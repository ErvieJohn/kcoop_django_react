import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  var [WhoWeAre, setWhoWeAre] = useState([]);

  var [ProgramAndServices, setProgramAndServices] = useState([]);

  const getWhoWeAreTypeData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getWhoWeAreType/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          WhoWeAre = response;
          setWhoWeAre(WhoWeAre);

          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  const getProgramsAndServicesData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getProgramsAndServicesType/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          ProgramAndServices = response;
          setProgramAndServices(ProgramAndServices);

          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  var [SatalliteOfices, setSatalliteOfices] = useState([]);
  const getSatalliteOficesData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_SatalliteOfficesType/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          SatalliteOfices = response;
          setSatalliteOfices(SatalliteOfices);

          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  var [Publications, setPublications] = useState([]);
  const getPublicationsData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_PublicationsType/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          Publications = response;
          setPublications(Publications);

          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  var [Stories, setStories] = useState([]);
  const getStoriesData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_StoriesType/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          Stories = response;
          setStories(Stories);

          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  
  useEffect(() => {
    getWhoWeAreTypeData();
    getProgramsAndServicesData();
    getSatalliteOficesData();
    getPublicationsData();
    getStoriesData();
    //console.log(announcementsData);
  }, []);

  return (
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
            <a href="/" className="navbar-brand">
              <b style={{fontSize: "16px"}}> KASAGANA-KA  </b> COOPERATIVE
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
              <li className>
                <a
                  href="/careers"
                  draggable="false"
                  styles={{ color: "white" }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </header>
  );
}
