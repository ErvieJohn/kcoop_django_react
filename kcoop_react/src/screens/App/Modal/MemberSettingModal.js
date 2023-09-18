import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function MemberSettingModal(props) {

    const navigate = useNavigate();

    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");
    var [firstname, setFirstName] = useState("");
    var [lastname, setLastName] = useState("");
    var [email, setEmail] = useState("");

  function submitForm (e){
    e.preventDefault();
  }

  const [showPass, setShowPass] = useState(false);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content">
              <form className="Auth-form-modal" method="post" onSubmit={submitForm}>
                <h3 className="Auth-form-title-modal">Account Setting</h3>
                    <div className="Auth-form-content-modal">

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
                                
                            }}
                            disabled={true}
                            />
                        </div>
                        
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
                                               
                            }}
                            
                            />
                        </div>
                        <div className="d-grid-modal gap-2 mt-3">
                            <button type="submit" className="btn-modal-login">
                                Update
                            </button>
                        </div>

                    </div>
              </form>
              
              <button className="btn-register-showpass" onClick={showPassToggle}> 
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size = '2x' />
              </button>
                      

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button> 
          </div>
      </div>
  )
}

export default MemberSettingModal