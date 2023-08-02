import {React, useContext, useEffect, useState} from 'react';

import { Navigate, Outlet } from "react-router-dom";

import Navbar from './Navbar/Navbar';

import './Dashboard.css';

import { BASE_URL } from '../../config';

const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

function Dashboard() {
  const [User, setUser] = useState(localStorage.getItem('USER'));
  const [isOpen, setOpen] = useState(false);
  var statDM;
  if(localStorage.getItem('isDarkMode') != null){
    statDM = localStorage.getItem('isDarkMode');
    statDM = statDM.toLowerCase() == 'true' ? true : false;
  }
  else{
    statDM = false;
  }

  
  const [darkMode, setDarkMode] = useState(statDM);
  //const [darkMode, setDarkMode] = useState(false);

  const cmsLogout = (user) =>{
    var InsertAPIURL = `${BASE_URL}/cmsLogout/`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {username: user};
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
        }).catch(error => {
            console.log(`getting data error from api url ${error}`)});  
  }

  const AuthLogout = () =>{
    
    var userArr = JSON.parse(User);
    //console.log(userArr[0]["username"]);
    cmsLogout(userArr[0]["username"]);
    localStorage.removeItem('USER');
    let isLoggedIn = null;
    setUser(isLoggedIn);
  }

  const isOpenFunc = (open) =>{
    setOpen(open);
    //console.log("Dashboard",isOpen);
  }

  const isDarkMode = () =>{
    setDarkMode(!darkMode);
    //console.log("setDM", !darkMode);
    //localStorage.removeItem('isDarkMode');
    localStorage.setItem('isDarkMode', !darkMode);
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
      AuthLogout();
    }, 300000); // 300000ms = 5mins. You can change the time.
  };

  // this resets the timer if it exists.
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  // when component mounts, it adds an event listeners to the window
  // each time any of the event is triggered, i.e on mouse move, click, scroll, keypress etc, the timer to logout user after 10 secs of inactivity resets.
  // However, if none of the event is triggered within 10 secs, that is app is inactive, the app automatically logs out.
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
    {User ? (<>
    
    <div className={darkMode ? 'CmsBody-darkmode' :  'CmsBody'}>
    {/* <div className='CmsBody'> */}
    {/* <div className='CmsBody-darkmode'> */}
   
    {/*<SideNavbar/>*/}
    <Navbar logout={AuthLogout} user={User} open={isOpenFunc} darkmode={isDarkMode} currentDM={darkMode} /> 

    
         <main className={darkMode ? 'cmsMainDarkMode' : 'cmsMain'} style={{marginLeft: !isOpen ? "80px":"290px"}}>
        {/* <main className='cmsMainDarkMode' style={{marginLeft: !isOpen ? "80px":"290px"}}> */}
          <Outlet/>
        </main>

    </div>
    
    </>):(<>
      <Navigate replace to="/cms/login" />
    </>)}
    </>
  )
}

export default Dashboard