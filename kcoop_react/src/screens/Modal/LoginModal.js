import {React, useState} from 'react';
import "./LoginModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../config';
import { useNavigate } from "react-router-dom";

function LoginModal(props) {

    const navigate = useNavigate();

    var [user, setUser] = useState("");
    var [pass, setPass] = useState("");

    var [showResult, setShowResult] = useState(" ");

    var [member, setMember] = useState([]);
    const getMember = (username, password) => {
        var InsertAPIURL = `${BASE_URL}/getMember/`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          //var pageTitle = "National Capital Region";
          var DataBody = {Member_username: username, Member_password: password};
          //console.log("DATA BODY", JSON.stringify(DataBody));
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              member = response;
              //console.log(getCareersAllData);
              setMember(member);
              //console.log("DATA: ", member);
              if(member.Member){
                //console.log("member.Member: ", member.Member[0]);
                localStorage.setItem('Member', JSON.stringify(member.Member[0]));
                //setShowResult(member.result);
                navigate('/app/dashboard/');
              }
              else{
                setShowResult(member.result);
              }
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
    }

  function submitForm (e){
    e.preventDefault();
    getMember(user, pass);
  }

  

  const [showPass, setShowPass] = useState(false);

  const showPassToggle = () => {
    setShowPass(!showPass);
  };


  const [isLoginPage, setIsLoginPage] = useState(true);

  const isLoginPageToggle = () => {
    navigate("/register/");
    props.modalToggle();
    //setIsLoginPage(!isLoginPage);

  };

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-login"></div>
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
                    

            <button className="close-modal-login" onClick={props.modalToggle}>
                <FontAwesomeIcon icon={faClose} size = '2x' />
            </button>

            <button className="btn-no-account" onClick={isLoginPageToggle}>I have don't have an account yet.</button> 
            
        </div>

        
        
      </div>
  )
}

export default LoginModal