import {React, useContext, useEffect, useState} from 'react';

import { AuthContext } from '../../context/AuthContext';

import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const [User, setUser] = useState(localStorage.getItem('USER'));

  const navigate = useNavigate();
  //console.log("isLogin: ", isLogin);
  /*
  useEffect(() => {
    
    console.log("isLogin HOME: ", isLogin);
    console.log("User HOME: ", User);
    
    const loggedUser = localStorage.getItem('USER');
    if(loggedUser){
      setUser(loggedUser);
    }
    
    }, []);

  if (!User){
    
    return <Navigate replace to="/cms/login" />;
    //return navigate("/cms/login");
  }
  else{
    return (
      <>
        <p>WELCOME TO Dashboard</p>
        <button onClick={AuthLogout}>logout</button>
      </>
    )
  }

  */

  function AuthLogout(){
    console.log("LOGOUT");
    localStorage.removeItem('USER');
    let isLoggedIn = null;
    setUser(isLoggedIn);
    console.log("isLogin AUTH: ", User);
    //return <Navigate replace to="/cms/login" />;
  }

  return(
    <>
    {User ? (<>
      <p>WELCOME TO Dashboard</p>
      <button onClick={AuthLogout}>logout</button>
    </>):(<>
    
      <Navigate replace to="/cms/login" />
    </>)}
    </>
  )
}

export default Dashboard