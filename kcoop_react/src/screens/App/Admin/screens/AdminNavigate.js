import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../../config';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../../LoadingSpinner';
import AdminHome from './AdminHome';

// for autologout
const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

function AdminNavigate(props) {
  const [toggleLogut] = useOutletContext();
  //console.log(member1);
  // const navigate = useNavigate();

  // let parseMember = JSON.parse(localStorage.getItem('Member'));
  const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);
  const [adminAuthToken, setAdminAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);

  const [loading, setLoading] = useState(true);

  const toggleLogout= () =>{
    toggleLogut();
  }

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

  // useEffect(() => {
  //   if(loading){
  //     updateToken()
  //   }

  //   Object.values(events).forEach((item) => {
  //     window.addEventListener(item, () => {
  //       resetTimer();
  //       handleLogoutTimer();
  //     });
  //   });
  // }, [memberAuthTokens, loading]);

 
  return (
    <>
    {admin ? (
      <>
      <AdminHome logout={toggleLogout}/>
      
          {/* <AdminHome logout={toggleLogout}/> */}

      </>):( <LoadingSpinner/>
      )}
    
    </>
   
  )
}

export default AdminNavigate