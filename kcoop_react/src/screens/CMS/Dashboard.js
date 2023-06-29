import {React, useContext, useEffect} from 'react';

import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const {isLogin} = useContext(AuthContext);

  const navigate = useNavigate();
  //console.log("isLogin: ", isLogin);

  function AuthLogout(){
    localStorage.removeItem('USER');
  }

  useEffect(() => {
    const isUser = JSON.parse(localStorage.getItem('USER'));
    if (isUser) {
        navigate('/cms/login')
    }
    console.log("isUser: ", isUser);
    }, []);


  return (
    
    
    <>
        <p>WELCOME TO Dashboard</p>
        <button onClick={AuthLogout}>logout</button>
    </>
    
  )
}

export default Dashboard