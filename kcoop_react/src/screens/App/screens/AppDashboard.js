import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';
import MemberDashboard from './MemberDashboard';

function AppDashboard(props) {
  const [member1, toggleLogut] = useOutletContext();
  //console.log(member1);
  // const navigate = useNavigate();

  // let parseMember = JSON.parse(localStorage.getItem('Member'));
  const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

  const toggleLogout= () =>{
    toggleLogut();
  }

 
  return (
    <>
    {member ? (
      <>
      {member.is_member_admin ? (
          <div>ADMIN</div>
          
        ): (
          <>
          <MemberDashboard logout={toggleLogout}/>
            {/* <div>DASHBOARD</div> */}
            
            {/* {categories ? (<>
              <b>CATEGORIES</b>
            </>):(<>
              <b>NO CATEGORIES</b>
            </>)}

            {products ? (<>
              <b>PRODUCTS</b>
            </>):(<>
              <b>NO PRODUCTS</b>
            </>)} */}
          </>
          
          
      )}
      
      </>):( <LoadingSpinner/>
      )}
    
    </>
   
  )
}

export default AppDashboard