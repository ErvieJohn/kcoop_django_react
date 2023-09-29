import {React, useContext, useState, useEffect} from 'react';
import './Login.css';

import {BASE_URL} from '../../config';

import { Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

function Login() {
    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");

    // const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    const [LoggedUser, setLoggedUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    
    var [showResult, setShowResult] = useState("");

    const AuthLogin = async (user, pass) => {
        var InsertAPIURL = `${BASE_URL}/api/login/`;

        var headers = {
            'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {username: user, password: pass};
        //console.log("DATA BODY", JSON.stringify(DataBody));
        let response = await fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
        }).catch(error => {
            console.log(`Error: ${error}`)});  

        let data = await response.json();
        if(response.status === 200){
            //console.log("data: ", data);
            //console.log("token: ", data.access);
            // setAuthTokens(data)
            setLoggedUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            showResult = "Invalid Username or Password";
            setShowResult(showResult);
        }     
    }

    function handleSubmit(e){
        e.preventDefault();
        AuthLogin(user, pass);
    }

 return(
    <>
        {LoggedUser ? (<>
            <Navigate replace to="/cms" />
        </>):(
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
                                placeholder="Enter Username"
                                color='black'
                                value={user}
                                onChange={text=>{
                                    const re = /^[A-Za-z0-9]+$/;
                                    if (text.target.value === "" || re.test(text.target.value)){
                                        //this.setState({ value: e.target.value });
                                        setUser(text.target.value);
                                    }
                                    //setUser(text.target.value);
                                    setShowResult("")}}
                                maxLength={20}
                                autoFocus={true}
                                required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password:</label>
                                <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Password"
                                color='black'
                                value={pass}
                                onChange={text=>{setPass(text.target.value);
                                                setShowResult("");}}
                                required
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                 <p style={{color: 'red', textAlign: 'center'}}>{showResult}</p> 
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