import React, { useEffect, useState, useContext } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {AuthContext} from '../context/AuthContext';

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


  useEffect(() => {
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
                  <button className="login-btn" style={{borderRadius: "25px", backgroundColor: "#66ffcc", 
                  cursor: 'pointer', width: "100px", color: "black", borderWidth: "0px"}} onClick={toggleModal}
                  data-toggle={window.innerWidth < 768 ? "collapse" : ""}
                  data-target={window.innerWidth < 768 ? "#navbar-collapse" : ""}>
                    <b>Login/Signup</b>
                  </button>
              </li>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </header>

  </>
  );
}
