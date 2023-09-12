import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';

function AppDashboard() {
  const [member] = useOutletContext();
  // const navigate = useNavigate();

  // let parseMember = JSON.parse(localStorage.getItem('Member'));
  //const [memberAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);
  
  

  // useEffect(()=>{
    
    
  // },[])
  return (
    <>
    {member ? (
      <>
      {member.is_member_admin ? (
          <div>ADMIN</div>
          
        ): (
          <div>DASHBOARD</div>
      )}
      
      </>):( <LoadingSpinner/>
      )}
    
    </>
   
  )
}

export default AppDashboard