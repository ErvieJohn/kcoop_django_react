import {React, useContext, useEffect, useState} from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { BASE_URL } from '../../../../config';

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

function AdminLayout(){
    const [adminAuthToken, setAdminAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);
    const [loading, setLoading] = useState(true);

    const toggleLogout = () => {
        console.log("Loggedout");
        localStorage.removeItem('adminAuthToken');
        setAdmin(null);
        //navigate('/app/login');
    };

    // FOR REFRESH AUTH TOKEN
    // let updateToken = async ()=> {

    //     let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':adminAuthToken?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setAdminAuthToken(data)
    //         setAdmin(jwt_decode(data.access))
    //         localStorage.setItem('adminAuthToken', JSON.stringify(data))
    //     }else{
    //         toggleLogout()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     if(loading){
    //        updateToken()
    //     }
    //   }, [adminAuthToken, loading]);

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
        {admin ? (
            <>
                {/* <NavHeader logout={toggleLogout}/> */}
                <Outlet context={[toggleLogout]}/>
            </>
        ):(
            <>
                <Navigate replace to="/app/admin/login" />
            </>
        )}
        </>
    )
}

export default AdminLayout