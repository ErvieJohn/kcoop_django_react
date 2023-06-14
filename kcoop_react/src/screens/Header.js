import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
                  <li>
                    <a href="/history" draggable="false">
                      HISTORY
                    </a>
                  </li>
                  <li>
                    <a href="/vmg" draggable="false">
                      V M G
                    </a>
                  </li>
                  <li>
                    <a href="/kso_guiding_principles" draggable="false">
                      KSO GUIDING PRINCIPLES
                    </a>
                  </li>
                  <li>
                    <a href="/cooperative_principles" draggable="false">
                      COOPERATIVE PRINCIPLES
                    </a>
                  </li>
                  <li>
                    <a href="/organizational_structure" draggable="false">
                      ORGANIZATIONAL STRUCTURE
                    </a>
                  </li>
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
                  <li>
                    <a
                      href="/livelihood_and_enterprise_development"
                      draggable="false"
                    >
                      Livelihood and Enterprise Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/education_training_and_formation"
                      draggable="false"
                    >
                      Education, Training and Formation
                    </a>
                  </li>
                  <li>
                    <a href="/health_and_wellness" draggable="false">
                      Health and Wellness
                    </a>
                  </li>
                  <li>
                    <a href="/security_shelter_and_safety" draggable="false">
                      Security, Shelter and Safety
                    </a>
                  </li>
                  <li>
                    <a href="/social_protection" draggable="false">
                      Social Protection
                    </a>
                  </li>
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
                  <li>
                    <a href="/ncr" draggable="false">
                      National Capital Region{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/region3" draggable="false">
                      Region III{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/region4a" draggable="false">
                      Region IV - A{" "}
                    </a>
                  </li>
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
                  <li>
                    <a href="/annual_reports" draggable="false">
                      Annual Reports
                    </a>
                  </li>
                  <li>
                    <a href="/audited_financial_statements" draggable="false">
                      Audited Financial Statements
                    </a>
                  </li>
                  <li>
                    <a href="/announcements" draggable="false">
                      Announcements
                    </a>
                  </li>
                  <li>
                    <a href="/by_the_numbers" draggable="false">
                      By The Numbers
                    </a>
                  </li>
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
                  <li>
                    <a href="/k_ganap" draggable="false">
                      K - Ganapan
                    </a>
                  </li>
                  <li>
                    <a href="/kwentong_k">Kwentong - K</a>
                  </li>
                  <li>
                    <a href="/k_bahagi" draggable="false">
                      K - Bahagi
                    </a>
                  </li>
                  <li>
                    <a href="/videos" draggable="false">
                      Videos
                    </a>
                  </li>
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
