import {React, useContext, useState, useEffect} from 'react';
import './Login.css';

import {BASE_URL} from '../../config';


import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from "react-router-dom";

function Login() {
    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");

    

    const {AuthLogin, showResult, setShowResult, isLogin} = useContext(AuthContext);
    

    function handleSubmit(e){
        e.preventDefault();
        
        AuthLogin(user, pass);
        setUser("");
        setPass("");
    }

    const navigate = useNavigate();

    useEffect(() => {
    const isUser = JSON.parse(localStorage.getItem('USER'));
    if (!isUser) {
        navigate('/cms')
    }
    console.log("isUser: ", isUser)
    }, []);

  return (
    <>
    {isLogin ? (navigate('/cms')) : (
        <>
        <div className='login-body' style={{backgroundColor:  'rgb(55, 52, 52)', width: '100%',
        height: '100%'}}>
        <div className="Auth-form-container">
                <form className="Auth-form" method="post" onSubmit={handleSubmit}>
                <h3 className="Auth-form-title">KCOOP Administration</h3>
                    <div className="Auth-form-content">
                        
                    <div className="form-group mt-3">
                        <label>Username:</label>
                        <input
                        type="username"
                        className="form-control mt-1"
                        placeholder=""
                        color='black'
                        value={user}
                        onChange={text=>setUser(text.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder=""
                        color='black'
                        value={pass}
                        onChange={text=>setPass(text.target.value)}
                        
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        {/***/} <p style={{color: 'red', textAlign: 'center'}}>{(user.length > 0 || pass.length > 0) ? (""):(showResult)}</p> 
                        <button type="submit" className="btn">
                        Log in
                        </button>
                    </div>
                    </div>
                </form>
        </div>
            
    </div>
        </>

    )}
    
        
    </>

  )
}

export default Login