import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';

function AppDashboard(props) {
  //const [member] = useOutletContext();
  // const navigate = useNavigate();

  // let parseMember = JSON.parse(localStorage.getItem('Member'));
  const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
  const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const getMemberProducts = async() => {
    var InsertAPIURL = `${BASE_URL}/api/member/showProducts/`;
    let response = await fetch(InsertAPIURL, {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + String(memberAuthTokens.access)
          }
      })
      let data = await response.json()

      if(response.status === 200){
        // console.log("data: ",data);
        // console.log("products: ", data.products);
        // console.log("categories: ", data.categories);
        if(data.products.length > 0){
          setProducts(data.products);
          setCategories(data.categories);
        }      
        
      }else if(response.statusText === 'Unauthorized'){
          props.logout();
      }
  }

  useEffect(()=>{
    getMemberProducts();
  },[])
  return (
    <>
    {member ? (
      <>
      {member.is_member_admin ? (
          <div>ADMIN</div>
          
        ): (
          <>
            <div>DASHBOARD</div>
            {categories ? (<>
              <b>CATEGORIES</b>
            </>):(<>
              <b>NO CATEGORIES</b>
            </>)}

            {products ? (<>
              <b>PRODUCTS</b>
            </>):(<>
              <b>NO PRODUCTS</b>
            </>)}
          </>
          
          
      )}
      
      </>):( <LoadingSpinner/>
      )}
    
    </>
   
  )
}

export default AppDashboard