import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './MemberSettingModal.css';

function MemberSettingModal(props) {

    const navigate = useNavigate();

    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");
    var [firstname, setFirstName] = useState("");
    var [lastname, setLastName] = useState("");
    var [email, setEmail] = useState("");

    var [currentpass, setCurrentPass] = useState("");

  function submitForm (e){
    e.preventDefault();
  }

  const [showPass, setShowPass] = useState(false);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };

  const [showCurrentPass, setShowCurrentPass] = useState(false);

  const showCurrentPassToggle = () => {
    setShowCurrentPass(!showCurrentPass);
  };

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content" style={{marginTop:"20px"}}>
              <form className="Auth-form-modal" method="post" onSubmit={submitForm}>
                <h3 className="Auth-form-title-modal">Account Setting</h3>
                    <div className="Auth-form-content-modal" style={{overflowY: 'scroll', height: window.innerHeight - 200}}>

                        <div className="form-group-modal mt-3">
                            <label >Username:</label>
                            <input
                            type="username"
                            // onKeyDown={event => (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')
                            //                                          || (event.key >= '0' && event.key <= '9')}
                            className="show-username-input mt-1"
                            //placeholder="Enter Username"
                            color='black'
                            value={member.username}
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
                            value={member.FirstName}
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
                            value={member.LastName}
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
                            value={member.Email}
                            onChange={text=>{setEmail(text.target.value);
                            }}
                            
                            />
                        </div>

                        <div className="form-group-modal mt-3">
                            <label >New Password:</label>
                            <div style={{display: 'flex'}}>
                                <input
                                type={showPass ? "text" : "password"}
                                className="form-control-modal mt-1"
                                placeholder="Enter New Password"
                                color='black'
                                value={pass}
                                onChange={text=>{setPass(text.target.value);
                                                
                                }}
                                
                                />
                                <button style={{background: "transparent", border: "none"}} onClick={showPassToggle}> 
                                    <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size = '2x' />
                                </button>
                            </div>
                            
                        </div>

                        <div className="form-group-modal mt-3">
                            <label >Current Password:</label>
                            <div style={{display: 'flex'}}>
                                <input
                                type={showCurrentPass ? "text" : "password"}
                                className="form-control-modal mt-1"
                                placeholder="Enter Current Password"
                                color='black'
                                value={currentpass}
                                onChange={text=>{setCurrentPass(text.target.value);
                                                
                                }}
                                
                                />
                                <button style={{background: "transparent", border: "none"}} onClick={showCurrentPassToggle}> 
                                    <FontAwesomeIcon icon={showCurrentPass ? faEyeSlash : faEye} size = '2x' />
                                </button>
                            </div>
                            
                        </div>

                        
                        

                        <div className="d-grid-modal gap-2 mt-3">
                            <button type="submit" className="btn-modal-login">
                                Update
                            </button>
                        </div>

                    </div>
              </form>
              
              
                      

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button> 
          </div>
      </div>
  )
}

export default MemberSettingModal