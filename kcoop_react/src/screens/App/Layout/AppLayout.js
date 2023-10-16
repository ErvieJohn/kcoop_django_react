import {React, useContext, useEffect, useState} from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { BASE_URL } from '../../../config';

import jwt_decode from "jwt-decode";

// for autologout
const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

function AppLayout(){
    const [memberAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);
    const [loading, setLoading] = useState(true);

    const logout = async() => {
        var InsertAPIURL = `${BASE_URL}/api/member/logoutMember/`;
        var DataBody = {username: member.username}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json();
          //console.log("response.statusText: ", response.statusText);
          if(response.status === 200){
            setMember(null);
          }
    }

    const toggleLogout = () => {
        logout();
        localStorage.removeItem('memberAuthTokens');
        
        //setMember(null);
        //navigate('/app/login');
    };

    // FOR REFRESH AUTH TOKEN
    // let updateToken = async ()=> {

    //     let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':memberAuthToken?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setMemberAuthToken(data)
    //         setMember(jwt_decode(data.access))
    //         localStorage.setItem('memberAuthTokens', JSON.stringify(data))
    //     }else{
    //         toggleLogut()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     if(loading){
    //        updateToken()
    //     }
    //   }, [memberAuthToken, loading]);

    let timer;

    // this function sets the timer that logs out the user after 10 secs
    const handleLogoutTimer = () => {
        timer = setTimeout(() => {
        // clears any pending timer.
        resetTimer();
        // Listener clean up. Removes the existing event listener from the window
        Object.values(events).forEach((item) => {
            window.removeEventListener(item, resetTimer);
        });
        // logs out user
        toggleLogout();
        }, 300000); // 300000ms = 5mins. You can change the time.
    };

    // this resets the timer if it exists.
    const resetTimer = () => {
        if (timer) clearTimeout(timer);
    };

    useEffect(() => {
        Object.values(events).forEach((item) => {
          window.addEventListener(item, () => {
            resetTimer();
            handleLogoutTimer();
          });
        });
      }, []);

    return(
        <>
        {member ? (
            <>
                {/* <NavHeader logout={toggleLogut}/> */}
                <Outlet context={[member,toggleLogout]}/>
            </>
        ):(
            <>
                <Navigate replace to="/app/login" />
            </>
        )}
        </>
    )
}

export default AppLayout