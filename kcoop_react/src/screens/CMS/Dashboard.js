import {React, useContext, useEffect, useState} from 'react';

import { Navigate, Outlet } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import SideNavbar from './Navbar/SideNavbar';

import './Dashboard.css';

function Dashboard() {
  const [User, setUser] = useState(localStorage.getItem('USER'));

  function AuthLogout(){
    //console.log("Clicked?");
    localStorage.removeItem('USER');
    let isLoggedIn = null;
    setUser(isLoggedIn);
  }

  const [activeKey, setActiveKey] = useState('1');
  const [openKeys, setOpenKeys] = useState(['3', '4']);
  const [expanded, setExpand] = useState(true);
  

  return(
    <>
    {User ? (<>
    
    <div className='CmsBody'>
    <SideNavbar/>
      <div className='sticky-cms' style={{
        position: "absolute",
        top: "5%",
        right: "5%", transform: "translate(-50%, -50%)"}}>
        <button onClick={AuthLogout}>Logout</button>
      </div>
      {/**<Navbar/> */}
      
      
        <main className='cmsMain'>
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