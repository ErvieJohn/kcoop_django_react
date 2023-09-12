import {React, useState} from 'react';
import "../../Modal/LoginModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function AppLogin() {
    const navigate = useNavigate();

    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");

    var [showResult, setShowResult] = useState(" ");

    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    const AuthLogin = async (user, pass) => {
      var InsertAPIURL = `${BASE_URL}/api/member/login/`;

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
          
          setMember(jwt_decode(data.access))
          localStorage.setItem('memberAuthTokens', JSON.stringify(data))
          //navigate('/app/dashboard/');
      }
      else{
          showResult = "Invalid Username or Password";
          setShowResult(showResult);
      }     
  }

  function submitForm (e){
    e.preventDefault();
    AuthLogin(user, pass);
  }

  

  const [showPass, setShowPass] = useState(false);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };

  const isLoginPageToggle = () => {
    navigate("/register/");
    //setIsLoginPage(!isLoginPage);

  };

  return (
    <>
    {member ? (<>
        <Navigate replace to="/app" />
    </>):(
        <>
            <div className='login-body' style={{backgroundColor:  'rgb(55, 52, 52)', width: '100%',
                        height: '100%'}}>
                <div className="modal-login-content">
                    <form className="Auth-form-modal" method="post" onSubmit={submitForm}>
                        <h3 className="Auth-form-title-modal">KCOOP Login</h3>
                            <div className="Auth-form-content-modal">
                                
                                <div className="form-group-modal mt-3">
                                    <label >Username:</label>
                                    <input
                                    type="username"
                                    className="form-control-modal mt-1"
                                    placeholder="Enter Username"
                                    color='black'
                                    value={user}
                                    onChange={text=>{setUser(text.target.value);
                                        showResult = " ";
                                        setShowResult(showResult);
                                    }}
                                    required
                                    />
                                </div>
                                <div className="form-group-modal mt-3">
                                    <label >Password:</label>
                                    <input
                                    type={showPass ? "text" : "password"}
                                    className="form-control-modal mt-1"
                                    placeholder="Enter Password"
                                    color='black'
                                    value={pass}
                                    onChange={text=>{setPass(text.target.value);
                                                        showResult = " ";
                                                        setShowResult(showResult);
                                    }}
                                    required
                                    />
                                </div>
                                <div className="d-grid-modal gap-2 mt-3">
                                        <p style={{color: 'red', textAlign: 'center'}}>{showResult}</p> 
                                    <button type="submit" className="btn-modal-login">
                                        Log in
                                    </button>
                                </div>

                            </div>
                    </form>
                    
                    <button className="btn-modal-showpass" onClick={showPassToggle}> 
                        <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size = '2x' />
                    </button>
                            
                    <button className="btn-no-account" onClick={isLoginPageToggle}>I have don't have an account yet.</button> 
                    
                </div>
            </div>
        </>
    )}
    </>
    
        
  )
}

export default AppLogin