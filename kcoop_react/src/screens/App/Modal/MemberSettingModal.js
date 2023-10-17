import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClose, faExclamationCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './MemberSettingModal.css';

function MemberSettingModal(props) {

    const navigate = useNavigate();

    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    //var [user, setUser] = useState("");
    var [pass, setPass] = useState("");
    var [firstname, setFirstName] = useState(member.FirstName);
    var [lastname, setLastName] = useState(member.LastName);
    var [email, setEmail] = useState(member.Email);

    var [currentpass, setCurrentPass] = useState("");

    const [error, setError] = useState(false);
    var [errorText, setErrorText] = useState("");

    const updateMember = async(username, password, firstname, lastname, email, newpassword) => {
        var InsertAPIURL = `${BASE_URL}/api/member/updateMember/`;
        var DataBody = {username: username, password: password, firstName: firstname, lastName: lastname, email: email, newPassword: newpassword};
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  //'Authorization':'Bearer ' + String(memberAuthTokens.access)
              },
              body: JSON.stringify(DataBody)
          })
          let data = await response.json();

          if(response.status === 200){
            setError(false);

            localStorage.removeItem('memberAuthTokens'); // to logout the user
            setMember(null);

            alert(data.detail + "\nYou are automatically logged out.");
           

            props.modalToggle();
            window.location.reload();
          }else {
            
            setError(true);
            errorText = data.detail;
            setErrorText(errorText);
          }
    }

  function submitForm (e){
    e.preventDefault();
    updateMember(member.username, currentpass, firstname, lastname, email, pass);
  }

  const [showPass, setShowPass] = useState(false);

  const showPassToggle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const [showCurrentPass, setShowCurrentPass] = useState(false);

  const showCurrentPassToggle = (e) => {
    e.preventDefault();
    setShowCurrentPass(!showCurrentPass);
  };

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content" style={{marginTop:"20px"}}>
              <form className="Auth-form-modal" method="post" onSubmit={submitForm}>
                <h3 className="Auth-form-title-modal">Account Setting</h3>
                    <div className="Auth-form-content-modal" style={{overflowY: 'scroll', height: window.innerHeight - 190}}>
                        <div class="w3-panel w3-pale-blue w3-leftbar w3-border-blue">
                            <div style={{display: "flex", marginTop: "10px"}}>
                                <FontAwesomeIcon icon={faCircleInfo} style={{marginTop: "5px"}}/>
                                <p style={{marginLeft: "10px"}}>Note: You are automatically logged out after you successfully update your details.</p>
                            </div>
                            
                        </div>
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
                            value={firstname}
                            maxLength={30}
                            onChange={text=>{
                                const re = /^[A-Za-z ]+$/;
                                if (text.target.value === "" || re.test(text.target.value)){
                                    //this.setState({ value: e.target.value });
                                    setFirstName(text.target.value);
                                }
                            
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
                            maxLength={30}
                            onChange={text=>{
                                const re = /^[A-Za-z ]+$/;
                                if (text.target.value === "" || re.test(text.target.value)){
                                    //this.setState({ value: e.target.value });
                                    setLastName(text.target.value);
                                }
                                
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
                            required
                            maxLength={100}
                            onChange={text=>{
                                const re = /^[A-Za-z0-9@.]+$/;
                                if (text.target.value === "" || re.test(text.target.value)){
                                    //this.setState({ value: e.target.value });
                                    setEmail(text.target.value);
                                    setError(false);
                                }
                                
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
                                maxLength={20}
                                onChange={text=>{setPass(text.target.value);
                                    setError(false);
                                }}
                                
                                />
                                <button type="button"  style={{background: "transparent", border: "none"}} 
                                    onClick={(e) =>showPassToggle(e)}> 
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
                                required
                                maxLength={20}
                                onChange={text=>{setCurrentPass(text.target.value);
                                                setError(false);
                                }}
                                
                                />
                                <button type="button" style={{background: "transparent", border: "none"}} 
                                    onClick={(e) =>showCurrentPassToggle(e)}> 
                                    <FontAwesomeIcon icon={showCurrentPass ? faEyeSlash : faEye} size = '2x' />
                                </button>
                            </div>
                            
                        </div>

                        
                        <div class="w3-panel w3-pale-red w3-leftbar w3-border-red" style={{display: error ? ("block"):("none")}}>
                            <div style={{display: "flex", marginTop: "10px"}}>
                                <FontAwesomeIcon icon={faExclamationCircle}/>
                                <p style={{marginLeft: "10px"}}>Error: {errorText}</p>
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