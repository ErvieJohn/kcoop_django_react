import {React, useContext, useEffect, useState} from 'react';

import { Navigate, Outlet } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import SideNavbar from './Navbar/SideNavbar';

import './Dashboard.css';

function Dashboard() {
  const [User, setUser] = useState(localStorage.getItem('USER'));
  const [isOpen, setOpen] = useState(false);
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

  return(
    <>
    {User ? (<>
    
    <div className='CmsBody'>
    {/*<SideNavbar/>*/}
    <Navbar logout={AuthLogout} user={User} open={isOpenFunc}/>

        <main className='cmsMain' style={{marginLeft: !isOpen ? "80px":"290px"}}>
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