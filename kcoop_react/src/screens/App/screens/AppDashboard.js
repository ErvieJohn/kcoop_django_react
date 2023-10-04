import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';
import MemberDashboard from './MemberDashboard';
import AdminHome from '../Admin/screens/AdminHome';

function AppDashboard(props) {
  const [member1, toggleLogout] = useOutletContext();
  //console.log(member1);
  // const navigate = useNavigate();

  // let parseMember = JSON.parse(localStorage.getItem('Member'));
  const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);
  const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);

  const [loading, setLoading] = useState(true);

  // FOR REFRESH AUTH TOKEN
  let updateToken = async ()=> {

    let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':memberAuthTokens?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setMemberAuthTokens(data)
        setMember(jwt_decode(data.access))
        localStorage.setItem('memberAuthTokens', JSON.stringify(data))
    }else{
      toggleLogout()
    }

    if(loading){
        setLoading(false)
    }
  }

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
    {member ? (
      <>
      <MemberDashboard logout={toggleLogout}/>
      
          {/* <AdminHome logout={toggleLogout}/> */}

      </>):( <LoadingSpinner/>
      )}
    
    </>
   
  )
}

export default AppDashboard