import {React, useContext, useEffect, useState} from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { BASE_URL } from '../../../../config';

import jwt_decode from "jwt-decode";
import axios from 'axios';

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

    const logout = async() => {
        var InsertAPIURL = `${BASE_URL}/api/admin/logoutAdmin/`;
        var DataBody = {username: admin.username}
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
            setAdmin(null);
          }
    }

    const toggleLogout = () => {
        //console.log("Loggedout");
        logout();
        localStorage.removeItem('adminAuthToken');

        //navigate('/app/login');
    };

    // FOR REFRESH AUTH TOKEN
    let updateToken = async ()=> {

        let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':adminAuthToken?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAdminAuthToken(data)
            setAdmin(jwt_decode(data.access))
            localStorage.setItem('adminAuthToken', JSON.stringify(data))
        }else{
            toggleLogout()
        }

        if(loading){
            setLoading(false)
        }
    }

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
        }, 600000); // 600000ms = 10mins. You can change the time.
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

        if(loading){
            updateToken();
        }

      }, [adminAuthToken, loading]);


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