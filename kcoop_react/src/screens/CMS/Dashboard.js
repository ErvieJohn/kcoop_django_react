import {React, useContext, useEffect, useState} from 'react';

import { Navigate, Outlet } from "react-router-dom";

import Navbar from './Navbar/Navbar';

import './Dashboard.css';

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

  const AuthLogout = () =>{
    //console.log("Clicked?");
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