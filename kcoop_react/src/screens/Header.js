import React, { useEffect, useState, useContext } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {AuthContext} from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

export default function Header(props) {
  const {WhoWeAre,
  ProgramAndServices,
  Headers,
  Stories,
  Publications,
  SatalliteOfices,
  getWhoWeAreTypeData,
  getProgramsAndServicesData,
  getSatalliteOficesData,
  getPublicationsData,
  getStoriesData,
  getHeadersData,
} = useContext(AuthContext);

  const [modal, setModal] = useState(props.modal);

  const toggleModal = () => {
    setModal(!modal);
    props.modalToggle();
  };

  const navigate = useNavigate();

  const toggleLogout = () => {
    localStorage.removeItem('memberAuthTokens');
    setMemberAuthToken(null);
    navigate('/app/login');
  };

  const toggleApp = () => {
    //localStorage.removeItem('memberAuthTokens');
    //setMemberAuthToken(null);
    navigate('/app');
  };

  const [loading, setLoading] = useState(true);
  const [memberAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);

  let updateToken = async ()=> {

    let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':memberAuthToken?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setMemberAuthToken(data)
        
        localStorage.setItem('memberAuthTokens', JSON.stringify(data))
        //console.log('read update?')
    }else{
      toggleLogout()
    }

    if(loading){
        setLoading(false)
    }
  } 


  useEffect(() => {
    // if(loading){
    //   updateToken();
    //   console.log('read?')
    // }
    
    getWhoWeAreTypeData();
    getProgramsAndServicesData();
    getSatalliteOficesData();
    getPublicationsData();
    getStoriesData();
    getHeadersData();
    
    //console.log(announcementsData);
  }, []);

  return (
  <>
    <header
      className="main-header"
      style={{ backgroundColor: "rgb(254, 176, 98)" }}
    >
      <nav
        className="navbar navbar-static-top"
        style={{ backgroundColor: "rgb(254, 176, 98)", fontSize: "13px"}}
      >
        <div className="container">
          <img
            src="/static/media/kcoop.png"
            width="45px"
            align="left"
            styles={{
              marginTop: "4px",
              marginBottom: "4px",
              marginRight: "3px",
            }}
          />
          <div className="navbar-header">
            <a href="/" className="navbar-brand" style={{fontSize: "16px"}}>
              <b > KASAGANA-KA  </b> COOPERATIVE
            </a>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className="collapse navbar-collapse pull-left"
            id="navbar-collapse"
          >
            <ul className="nav navbar-nav">
              <li className>
                <a
                  href="/"
                  draggable="false"
                  styles={{
                    color: "white",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="dropdown:active">
                <a
                  draggable="false"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  Who we are <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    WhoWeAre.map((content)=>(
                      <>
                        <li>
                          <a href={content.WhoWeAretype_url} draggable="false">
                            {content.WhoWeAretype_name}
                          </a>
                        </li>
                      </>
                    ))
                  }
                  


                </ul>
              </li>
              <li className="dropdown:active">
                <a
                  draggable="false"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  Programs &amp; Services
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    ProgramAndServices.map((content)=>(
                      <>
                        <li>
                            <a
                              href={content.ProgramAndServicestype_url}
                              draggable="false"
                            >
                              {content.ProgramAndServicestype_name}
                            </a>
                          </li>
                      </>
                    ))
                  }
                  
                 
                </ul>
              </li>
              <li className="dropdown:active">
                <a
                  draggable="false"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  Satellite Offices
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    SatalliteOfices.map((content)=>(
                      <>
                      <li>
                        <a href={content.SatalliteOfficestype_url} draggable="false">
                          {content.SatalliteOfficestype_name}
                        </a>
                      </li>
                      </>
                    ))
                  }
                  
                  
                </ul>
              </li>
              <li className="dropdown:active">
                <a
                  draggable="false"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  Publications <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    Publications.map((content)=>(
                      <>
                        <li>
                          <a href={content.Publicationstype_url} draggable="false">
                            {content.Publicationstype_name}
                          </a>
                        </li>
                      </>
                    ))
                  }
                 
                </ul>
              </li>
              <li className="dropdown:active">
                <a
                  draggable="false"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    KhtmlUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  Stories
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    Stories.map((content)=>(
                      <>
                        <li>
                          <a href={content.Storiestype_url} draggable="false">
                            {content.Storiestype_name}
                          </a>
                        </li>
                      </>
                    ))
                  }
                  
                  
                </ul>
              </li>
              <li >
                <a
                  href="/careers"
                  draggable="false"
                  styles={{ color: "white" }}
                >
                  Careers
                </a>
              </li>

              <li >
                  {memberAuthToken ? ( //logout button
                    <button className="login-btn" style={{borderRadius: "25px", backgroundColor: "#66ffcc", 
                    cursor: 'pointer', width: "100px", color: "black", borderWidth: "0px"}} onClick={toggleApp}
                    data-toggle={window.innerWidth < 768 ? "collapse" : ""}
                    data-target={window.innerWidth < 768 ? "#navbar-collapse" : ""}>
                      <b>Go To App</b>
                    </button>
                  ):(//login/singup button
                    <button className="login-btn" style={{borderRadius: "25px", backgroundColor: "#66ffcc", 
                    cursor: 'pointer', width: "100px", color: "black", borderWidth: "0px"}} onClick={toggleModal}
                    data-toggle={window.innerWidth < 768 ? "collapse" : ""}
                    data-target={window.innerWidth < 768 ? "#navbar-collapse" : ""}>
                      <b>Login/Signup</b>
                    </button>
                  )}
                  
              </li>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </header>

  </>
  );
}
