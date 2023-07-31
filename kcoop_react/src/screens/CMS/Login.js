import {React, useContext, useState, useEffect} from 'react';
import './Login.css';

import {BASE_URL} from '../../config';

import { Navigate } from "react-router-dom";

function Login() {
    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");

    const [LoggedUser, setLoggedUser] = useState(localStorage.getItem("USER"));

    var [isLogin, setIsLogin] = useState(false);
    var [showResult, setShowResult] = useState("");

    const AuthLogin = (user, pass) => {
        var InsertAPIURL = `${BASE_URL}/cmsLogin/`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {username: user, password: pass};
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
        })
            .then(response => response.json())
            .then(response => {
            var data = response;
            
            //console.log("DATA11: ", data.data);
            if(data.data=="Invalid Username or Password"){
                showResult = data.data;
                setShowResult(showResult);

                setUser("");
                setPass("");
            }
            else{
                showResult = "";
                setShowResult(showResult);

                var User = [{"username":user,"password":pass}];
                
                localStorage.setItem('USER', JSON.stringify(User));

                isLogin = JSON.parse(localStorage.getItem('USER'));
                setIsLogin(isLogin);
                //console.log("isLogin", isLogin)

                //return <Navigate replace to="/cms" />;
                let isUserlogged = localStorage.getItem("USER");
                setLoggedUser(isUserlogged);

                if(localStorage.getItem('isDarkMode') === null){
                   
                    localStorage.setItem('isDarkMode', Boolean(false));
                }
            }
            
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});  
    }

    function handleSubmit(e){
        e.preventDefault();
        
        AuthLogin(user, pass);
        
        // UPDATE user logged 
        
        /*if(isUserlogged){
            return <Navigate replace to="/cms" />;
        }
        */
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
                                 <p style={{color: 'red', textAlign: 'center'}}>{(user.length > 0 || pass.length > 0) ? (""):(showResult)}</p> 
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