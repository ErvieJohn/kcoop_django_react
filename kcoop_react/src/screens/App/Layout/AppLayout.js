import {React, useContext, useEffect, useState} from 'react';
import { Navigate, Outlet } from "react-router-dom";

import { BASE_URL } from '../../../config';

import jwt_decode from "jwt-decode";
import NavHeader from '../Nav/NavHeader';

function AppLayout(){
    const [memberAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);
    const [loading, setLoading] = useState(true);

    const toggleLogut = () => {
        localStorage.removeItem('memberAuthTokens');
        setMember(null);
        //navigate('/app/login');
    };

    // FOR REFRESH AUTH TOKEN
    let updateToken = async ()=> {

        let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':memberAuthToken?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setMemberAuthToken(data)
            setMember(jwt_decode(data.access))
            localStorage.setItem('memberAuthTokens', JSON.stringify(data))
        }else{
            toggleLogut()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(() => {
        if(loading){
        //   updateToken()
        }
      }, [memberAuthToken, loading]);


    return(
        <>
        {member ? (
            <>
                <NavHeader logout={toggleLogut}/>
                <Outlet context={[member]} />
            </>
        ):(
            <>
                <Navigate replace to="/app/login" />
            </>
        )}
        </>
    )
}

export default AppLayout