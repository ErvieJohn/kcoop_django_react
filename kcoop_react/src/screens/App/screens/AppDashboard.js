import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';

function AppDashboard() {
  let parseMember = JSON.parse(localStorage.getItem('Member'));
  const [isAdmin, setIsAdmin] = useState(false);
  const [member, setMember] = useState(parseMember);
  
  const getMemberAdmin = (member) => {
    var InsertAPIURL = `${BASE_URL}/getMemberAdmin/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Member_username: member.username};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          let admin = response;
          //console.log(getCareersAllData);
          
          //console.log("DATA: ", member);
          if(admin.isAdmin){
            setIsAdmin(true);
          }
          
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
}

  useEffect(()=>{
    getMemberAdmin(member);
    
  },[])
  return (
    <>
    {isAdmin ? (
      <div>ADMIN</div>
      
    ): (
      <div>DASHBOARD</div>
    )}
    </>
   
  )
}

export default AppDashboard