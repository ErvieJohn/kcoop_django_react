import {React, useState} from 'react';
import "../../Modal/LoginModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faClose, faEye, faEyeSlash, faL, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function AppRegister(props) {
    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");
    var [firstname, setFirstName] = useState("");
    var [lastname, setLastName] = useState("");
    var [email, setEmail] = useState("");

    var [showResult, setShowResult] = useState(" ");

    // function submitForm (e){
    //     e.preventDefault();
    //     AuthLogin(user, pass);
    //   }

    const [showPass, setShowPass] = useState(false);

    const showPassToggle = () => {
        setShowPass(!showPass);
    };

    const backLoginToggle = () =>{
        props.backButton();
    };


    const Register = async (firstname, lastname, email, username, password) => {
        var InsertAPIURL = `${BASE_URL}/api/member/register/`;

        var headers = {
          'Content-Type': 'application/json',
        };
        var DataBody = {firstname: firstname, lastname: lastname, 
        email: email, username: username, password: password};
        
        //console.log(JSON.stringify(DataBody));
        
        let response = await fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
        }).catch(error => {
        console.log(`Error: ${error}`)});  
        
        let data = await response.json();
            // console.log(data)
            // console.log(response.status)
        if(response.status === 200){
            props.loginMember(username, password);
            localStorage.removeItem('showRegister');
        }
        else{
            console.log("error in register");
            showResult = "There is an error when creating this account.";
            setShowResult(showResult);
        }  

    }

    function submitRegistrationForm(e){
        e.preventDefault();
        //console.log(firstname, lastname, email, user, pass);
        Register(firstname, lastname, email, user, pass);
    }

  return (
    <>
         <form className="Auth-form-modal" method="post" onSubmit={submitRegistrationForm}> 
            <h3 className="Auth-form-title-modal">KCOOP Registration</h3>
                <div className="Auth-form-content-modal">
                    
                    <div className="form-group-modal mt-3">
                        <label >First Name:</label>
                        <input
                        type="name"
                        // onKeyDown={event => (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')
                        //                                          || (event.key >= ' ') || (event.key >= '0' && event.key <= '9')}
                        className="form-control-modal mt-1"
                        placeholder="Enter First Name"
                        color='black'
                        value={firstname}
                        onChange={text=>{setFirstName(text.target.value);
                        }}
                        required
                        />
                    </div>

                    <div className="form-group-modal mt-3">
                        <label >Last Name:</label>
                        <input
                        type="name"
                        // onKeyDown={event => (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')
                        //                                          || (event.key >= ' ') || (event.key >= '0' && event.key <= '9')}
                        className="form-control-modal mt-1"
                        placeholder="Enter Last Name"
                        color='black'
                        value={lastname}
                        onChange={text=>{setLastName(text.target.value);
                        }}
                        required
                        />
                    </div>

                    <div className="form-group-modal mt-3">
                        <label >Email:</label>
                        <input
                        type="email"
                        // onKeyDown={event => (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')
                        //                                          || (event.key >= '@') || (event.key >= '0' && event.key <= '9')}
                        
                        className="form-control-modal mt-1"
                        placeholder="Enter Email"
                        color='black'
                        value={email}
                        onChange={text=>{setEmail(text.target.value);
                        }}
                        required
                        />
                    </div>



                    <div className="form-group-modal mt-3">
                        <label >Username:</label>
                        <input
                        type="username"
                        // onKeyDown={event => (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')
                        //                                          || (event.key >= '0' && event.key <= '9')}
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
                            Register
                        </button>
                    </div>

                </div>
        </form>
        <button className="btn-register-showpass" onClick={showPassToggle}> 
            <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size = '2x' />
        </button>

        <button className="btn-has-account" onClick={backLoginToggle}>I already have an account.</button>
    </>
   
  )
}

export default AppRegister