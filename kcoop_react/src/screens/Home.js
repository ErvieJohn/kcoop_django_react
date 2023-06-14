import React from "react";
import "./Header.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const slideImages = [
  {
    src: "/static/media/2023%205G.jpg",
    caption: "Slide 1",
  },
  {
    src: "/static/media/1.jpg",
    caption: "Slide 2",
  },
  {
    src: "/static/media/LED.jpg",
    caption: "Slide 3",
  },
  {
    src: "/static/media/ETF_V2.jpg",
    caption: "Slide 4",
  },
  {
    src: "/static/media/HW.jpg",
    caption: "Slide 5",
  },
  {
    src: "/static/media/SSS_home.jpg",
    caption: "Slide 6",
  },
  {
    src: "/static/media/SocialP_home.jpg",
    caption: "Slide 7",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  //height: "600px",
};

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  //onChange: (oldIndex, newIndex) => {
  //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  //}
};

export default function Home() {
  return (
    <div className="content-wrapper" style={{ minHeight: "427px" }}>
      {/*
       <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.src})` }}
            >
               <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    */}
      <Carousel 
      autoPlay 
      infiniteLoop 
      interval={2000}
      showStatus={false} 
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
       >
        {slideImages.map((images)=>(
              <div className="image">
              <img src={images.src} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"/>
              
          </div>
        ))}
      </Carousel>

      
      
      {/*<div className="slideshow-container" styles={{left: '0px', top: '0px', width: '100%'}}>
          
          <div className="mySlides fade" style={{display: 'none'}}><img src="/static/media/1.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div className="mySlides fade" style={{display: 'none'}}><img src="/static/media/LED.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div className="mySlides fade" style={{display: 'none'}}><img src="/static/media/ETF V2.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div className="mySlides fade" style={{display: 'none'}}><img src="/static/media/HW.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div className="mySlides fade" style={{display: 'block'}}><img src="/static/media/SSS.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div className="mySlides fade" style={{display: 'none'}}><img src="/static/media/SocialP.jpg" style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
          <div style={{textAlign: 'center'}}><span className="dot" /><span className="dot" /><span className="dot" /><span className="dot" /><span className="dot active" /><span className="dot" /></div>
  </div>*/}
      <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div
            className="box box-default"
            styles={{ left: "-5%", top: "-17.5px", width: "110%" }}
          >
            {/* ariel  */}
            <section className="content">
              <div className="row" styles={{ width: "98%", marginLeft: "1%" }}>
                {/* /.col */}
                <div className="col-md-9 pull-left">
                  <embed
                    width="100%"
                    height={280}
                    src="https://www.youtube.com/embed/smFXr-FSsuQ"
                  />
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="panel-info">
                        <div className="folded" styles={{ marginTop: "3%" }}>
                          <h3 style={{ backgroundColor: "#f47621" }}>
                            Announcements
                          </h3>
                        </div>
                        <img
                          src="/static/media/kaisa.jpg"
                          width="100%"
                          styles={{ marginTop: "5%", marginBottom: "1%" }}
                        />
                        <center>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.kcoop.koinspwa"
                            target="_blank"
                          >
                            <button
                              type="button"
                              className="btn panel panel-default pull-right"
                              styles={{
                                backgroundColor: "#fb9838",
                                color: "white",
                              }}
                            >
                              <b>Not a member?</b>
                            </button>
                          </a>
                        </center>
                        <h1 style={{ paddingBottom: "2%" }} />
                        <div className="col-md-12">
                          <div
                            className="box box-warning "
                            style={{ marginTop: "3%" }}
                          />
                          <h2>
                            <a href="/go_bring_me">
                              <b>Go Bring Me</b>
                            </a>
                          </h2>
                          <b>
                            <i>&nbsp;Jul-26-2022</i>
                          </b>
                          <br />
                          <br />
                          <div className="col-md-12">
                            <a href="/static/media/GBM-Ads.png" target="_blank">
                              <img
                                src="/static/media/GBM-Ads.png"
                                width="100%"
                                styles={{
                                  marginBottom: "2%",
                                  marginLeft: "-1%",
                                }}
                              />
                            </a>
                          </div>
                          <div className="col-md-12">
                            <p />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="box box-warning "
                            styles={{ marginTop: "3%" }}
                          />
                          <h2>
                            <a href="/k_kalusugan_w3">
                              <b>K - KALUSUGAN W3</b>
                            </a>
                          </h2>
                          <b>
                            <i>&nbsp;Jul-22-2022</i>
                          </b>
                          <br />
                          <br />
                          <div className="col-md-12">
                            <a
                              href="/static/media/Kalusugan 3_June2022.png"
                              target="_blank"
                            >
                              <img
                                src="/static/media/Kalusugan 3_June2022.png"
                                width="100%"
                                styles={{
                                  marginBottom: "2%",
                                  marginLeft: "-1%",
                                }}
                              />
                            </a>
                          </div>
                          <div className="col-md-12">
                            <p />
                          </div>
                        </div>
                        {/* <img src="support/uploads/don_bosco.jpg" width="100%" styles="margin-top:5%"> */}
                      </div>
                    </div>
                  </div>
                  {/* Mensahe */}
                  <div className="col-md-13 pull-left">
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="panel-info">
                          <div
                            className="folded"
                            styles={{ marginBottom: "2%", marginTop: "3%" }}
                          >
                            <h3 styles={{ backgroundColor: "#f47621" }}>
                              Who we are
                            </h3>
                          </div>
                          <p style={{ paddingTop: "8%" }}>
                            Kabuhayan sa Ganap na Kasarinlan Credit &amp;
                            Savings Cooperative (KASAGANA-KA COOP/K-COOP), is a
                            cooperative duly registered under the Cooperative
                            Development Authority on February 2016. It aims to
                            help improve the quality of life of its members in
                            urban and peri-urban communities through authentic
                            economic and social empowerment using microfinance
                            as a strategy for its members to gain access to
                            collateral-free credit for self-help activities.{" "}
                          </p>
                          <img
                            src="/static/media/kso2.jpg"
                            width="80%"
                            styles={{
                              marginLeft: "10%",
                              marginTop: "5%",
                              marginBottom: "5%",
                            }}
                          />
                          <p>
                            KASAGANA-KA COOP is the fourth organization under
                            the Kasagana- ka Synergizing Organizations. It was a
                            spin-off from Kasagana- ka Development Center, Inc.,
                            to clearly separate the social programs from the
                            credit and savings programs and services.{" "}
                          </p>
                          <a href="/history">
                            <button
                              type="button"
                              className="btn panel panel-default pull-right"
                              styles={{
                                backgroundColor: "#fb9838",
                                color: "white",
                              }}
                            >
                              <b>Get to know more ABOUT US</b>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.col */}
                  </div>
                </div>
                <div className="col-md-3 pull-right">
                  <h5>
                    <b>Visits Since July 2018</b>
                  </h5>
                  <img
                    src="http://www.cutercounter.com/hit.php?id=18701&nd=6&style=26"
                    style={{ width: "35%" }}
                    border={0}
                    alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"
                  />
                  <br />
                  <br />
                  <div className="panel panel-default">
                    <a href="https://iskaparate.com/" target="_blank">
                      <img src="/static/media/iskaparate.png" width="100%" />
                    </a>
                    <a></a>
                  </div>
                  <a></a>
                  <div className="panel panel-default">
                    <a></a>
                    <a
                      href="https://kcoop.org.ph/support/enews/enewsfile/K-COOP_2021AnnualReport.pdf"
                      target="_blank"
                    >
                      <img
                        src="/static/media/K-COOP_2021AnnualReport.jpg"
                        width="100%"
                        alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"
                      />
                    </a>
                  </div>
                  <div className="panel panel-default">
                    <span>
                      <a
                        href="/static/media/K-COOP 2022 By the Numbers.jpg"
                        target="_blank"
                      >
                        <img
                          src="/static/media/K-COOP 2022 By the Numbers.jpg"
                          width="100%"
                        />
                      </a>
                      <a />
                    </span>
                    <a> </a>
                  </div>
                  <a></a>
                  <div className="panel panel-default">
                    <a>
                      <h5 className="pull-center" align="center">
                        <b>2021 Audited Financial Statements</b>
                      </h5>
                      <span />
                    </a>
                    <a
                      href="https://kcoop.org.ph/support/enews/enewsfile/AuditedFs2021.pdf"
                      target="_blank"
                    >
                      <img
                        src="/static/media/AuditedFs2021.jpg"
                        width="100%"
                        alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"
                      />
                    </a>
                  </div>
                  <div className="panel panel-default">
                    {/* GetButton.io widget */}
                    {/* /GetButton.io widget */}
                  </div>
                  {/* /. box */}
                  {/* /.box */}
                </div>
                {/* /.row */}
                {/* ariel */}
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </section>
            {/* /.content */}
          </div>
          {/* /.container */}
        </section>
      </div>
    </div>
  );
}
