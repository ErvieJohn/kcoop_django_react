import React, { useContext, useEffect, useState } from "react";
import "./Header.css";

import "react-slideshow-image/dist/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from "../context/AuthContext";



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
  const {getHomeData, 
    homeData,
    HomeslideImages,
    HomevisitCount,
    Homeannouncements,
    Homecontents,
    HomewhoWeAre,
    HomerightPart,
    Homevideo,} = useContext(AuthContext);

  useEffect (() =>{
    getHomeData();
    
  },[]);

  var whoWeAre = HomewhoWeAre[0];
  var whoWeAre1 = HomewhoWeAre[1];
  var whoWeAre2 = HomewhoWeAre[2];

  var video = Homevideo[0];

  var visit = HomevisitCount[0];

  var announcements = Homeannouncements[0];
  

  var slideImages = [
    {
      Home_image: "",
      
    },
    {
      Home_image: "",
      
    },
  ];

  var imageSlider = [];
  let index = 0;

  HomeslideImages.forEach((items)=>{
    if(index<2){
      slideImages[index].Home_image = items.Home_image;
      
    }
    else{
      slideImages[slideImages.length] = {Home_image:items.Home_image};
    }
    index++;
    //slideImages[index].Home_image = items.Home_image;
    
  });
  
  //console.log("whoWeAre: ", imageSlider);

  

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
    {slideImages ? (<>
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
              <img src={images.Home_image} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"/>
              
          </div>
        ))}
      </Carousel>
    
    </>) : (<></>) }
      

      
      
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
                  {video ? (<embed
                    width="100%"
                    height={280}
                    src={video.Home_content}
                  />):(<></>)}
                  
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="panel-info">
                        { announcements ? (<>
                          <div className="folded" styles={{ marginTop: "3%" }}>
                          <h3 style={{ backgroundColor: "#f47621" }}>
                            {announcements.Home_title}
                          </h3>
                        </div>
                        <img
                          src={announcements.Home_image}
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
                              style={{
                                backgroundColor: "#fb9838",
                                color: "white",
                              }}
                            >
                              <b>Not a member?</b>
                            </button>
                          </a>
                        </center>

                        </>):(<></>) }
                        
                        <h1 style={{ paddingBottom: "2%" }} />
                        {Homecontents.map((content)=>(
                            <div className="col-md-12">

                          
                            <div
                              className="box box-warning "
                              style={{ marginTop: "3%" }}
                            />
                            <h2>
                              <a href={content.Home_url}>
                                <b>{content.Home_content}</b>
                              </a>
                            </h2>
                            <b>
                              <i>&nbsp;{content.Home_date}</i>
                            </b>
                            <br />
                            <br />
                            <div className="col-md-12">
                              <a href={content.Home_image} target="_blank">
                                <img
                                  src={content.Home_image}
                                  width="100%"
                                  style={{
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
                            ))}
                        
                        {/* <img src="support/uploads/don_bosco.jpg" width="100%" styles="margin-top:5%"> */}
                      </div>
                    </div>
                  </div>
                  {/* Mensahe */}
                  <div className="col-md-13 pull-left">
                     { whoWeAre ? (
                      <>
                          <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="panel-info">
                              <div
                                className="folded"
                                style={{ marginBottom: "2%", marginTop: "3%" }}
                              >
                                <h3 style={{ backgroundColor: "#f47621" }}>
                                  {whoWeAre.Home_title}
                                </h3>
                              </div>
                              <p
                                style={{ paddingTop: "8%", textAlign: "justify" }} 
                                dangerouslySetInnerHTML={{
                                  __html:
                                  whoWeAre1.Home_content,
                                }}
                              ></p>
                              <img
                                src={whoWeAre.Home_image}
                                width="80%"
                                style={{
                                  marginLeft: "10%",
                                  marginTop: "5%",
                                  marginBottom: "5%",
                                }}
                              />
                              <p
                                style={{ paddingTop: "8%", textAlign: "justify" }}       
                                dangerouslySetInnerHTML={{
                                  __html:
                                  whoWeAre2.Home_content,
                                }}
                              ></p>
                              <a href="/history">
                                <button
                                  type="button"
                                  className="btn panel panel-default pull-right"
                                  style={{
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
                      </>
                     ) : (<></>)           
                     
                   }
                  </div>

                </div>
                <div className="col-md-3 pull-right">
                { visit ? (
                  <>
                  <h5>
                    <b>{visit.Home_content}</b>
                  </h5>
                  <img
                    src={visit.Home_url}
                    style={{ width: "35%" }}
                    border={0}
                    alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"
                  />
                  </>) : (<></>) 

                  }
                  
                  <br />
                  <br />
                  {HomerightPart.map((content)=>(
                    <>
                      <div className="panel panel-default">
                        <a href={content.Home_content} target="_blank">
                          <img src={content.Home_image} width="100%" />
                        </a>
                        <a></a>
                      </div>
                    </>
                    
                  ))}
                  
                  
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
