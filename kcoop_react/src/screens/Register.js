import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';

function Register() {

    //console.log("Height: ", window.innerHeight);

  var [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className="content-wrapper" style={{minHeight: '705px'}}>
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17.5px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12 pull-left">
                  <h2><b> <FontAwesomeIcon icon={faRegistered} /> 
                  &nbsp;Registration</b></h2>
                  <br />
                  <div id={1} />
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{marginTop: '0%'}}>
                      {/* <FontAwesomeIcon icon={faCircleDot} color='orange' size='1.5x'/>  */}
                      {/* <h2 className="box-title"><b>&nbsp;{TITLE}</b></h2> */}
                      <div className="box-body" style={{marginLeft: '3%', marginRight: '3%'}}>
                        <center>
                            <form className="Auth-form-modal" method="post"> {/*  onSubmit={submitForm}> */}
                                <h3 className="Auth-form-title-modal">KCOOP Registration</h3>
                                    <div className="Auth-form-content-modal">
                                        
                                        <div className="form-group-modal mt-3">
                                            <label >First Name:</label>
                                            <input
                                            type="name"
                                            className="form-control-modal mt-1"
                                            placeholder="Enter First Name"
                                            color='black'
                                            // value={user}
                                            // onChange={text=>{setUser(text.target.value);
                                            //     showResult = " ";
                                            //     setShowResult(showResult);
                                            // }}
                                            required
                                            />
                                        </div>

                                        <div className="form-group-modal mt-3">
                                            <label >Last Name:</label>
                                            <input
                                            type="name"
                                            className="form-control-modal mt-1"
                                            placeholder="Enter Last Name"
                                            color='black'
                                            // value={user}
                                            // onChange={text=>{setUser(text.target.value);
                                            //     showResult = " ";
                                            //     setShowResult(showResult);
                                            // }}
                                            required
                                            />
                                        </div>

                                        <div className="form-group-modal mt-3">
                                            <label >Username:</label>
                                            <input
                                            type="username"
                                            className="form-control-modal mt-1"
                                            placeholder="Enter Username"
                                            color='black'
                                            // value={user}
                                            // onChange={text=>{setUser(text.target.value);
                                            //     showResult = " ";
                                            //     setShowResult(showResult);
                                            // }}
                                            required
                                            />
                                        </div>

                                    

                                        <div className="form-group-modal mt-3">
                                            <label >Phone Number:</label>

                                            <div id='combine-cms'>   
                                                <img style={{marginLeft: "20px"}}src={"/static/media/PH.svg"} width="10%" height="10%" alt="PH Flag" />
                                                
                                                <label style={{marginLeft: "10px"}}>+63 </label>
                                                <input
                                                    style={{marginLeft: "10px", width: "225px",
                                                    padding:" 0px 25px"}}
                                                    maxLength={10}
                                                    type='tel'
                                                    value={phoneNumber}
                                                    placeholder="Ex. 9123456789"
                                                    onChange={text=>{
                                                        phoneNumber = text;
                                                        setPhoneNumber(phoneNumber);
                                                        //console.log("phoneNumber: ", phoneNumber);
                                                }}
                                                    required/>
                                            </div>
                                            
                                        </div>
                                        <div className="d-grid-modal gap-2 mt-3">
                                                {/* <p style={{color: 'red', textAlign: 'center'}}>{showResult}</p>  */}
                                            <button type="submit" className="btn-modal-login">
                                                Register
                                            </button>
                                        </div>

                                    </div>
                            </form>
                        </center>
                       
                                
                      </div>
                          
                          
                        
                      </div>
                    </div>
                  </div>
                  {/* /. box */}
                </div>
                {/* /.box */}
              </div>
              {/* /.col */}
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}

export default Register