import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData, whoweareData, PnSData, SOData, PublicationData, StoriesData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen (!isOpen);
    if(isOpen){
      setIsWhoweareOpen (false); 
      setIsPandSOpen (false); 
      setIsSOOpen (false); 
      setISPublicationOpen (false);
      setIsStoriesOpen(false);
    }
  }

  const[isWhoweareOpen ,setIsWhoweareOpen] = useState(false);  
  const toggleWhoweare = () =>{
    setIsWhoweareOpen (!isWhoweareOpen); 
    

    if(!isOpen){
      setIsOpen (!isOpen);
    }
    /*
    if(isPandSOpen){
      setIsPandSOpen (!isPandSOpen);
    }
    */
    
  } 

  const[isPandSOpen ,setIsPandSOpen] = useState(false);  
  const togglePandS = () =>{
    setIsPandSOpen (!isPandSOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    /*
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen);
    }
    */
  }

  const[isSOOpen ,setIsSOOpen] = useState(false);  
  const toggleSO = () =>{
    setIsSOOpen (!isSOOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    /*
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen);
    }
    */
  }

  const[isPublicationOpen ,setISPublicationOpen] = useState(false);  
  const togglePublication = () =>{
    setISPublicationOpen (!isPublicationOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    /*
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen);
    }
    */
  }

  const[isStoriesOpen ,setIsStoriesOpen] = useState(false);  
  const toggleStories = () =>{
    setIsStoriesOpen (!isStoriesOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    /*
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen);
    }
    */
  }

  return (
    <>
      <div className="container-cms">
           <div style={{width: isOpen ? "280px" : "50px"}} className="sidebar-cms">
               <div className="top_section-cms">
                   {/*<h1 style={{display: isOpen ? "block" : "none"}} className="logo-cms">Logo</h1>*/}
                   
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars-cms">
                        {isOpen ? <FontAwesomeIcon icon={faClose} onClick={toggle} style={{cursor: "pointer"}}/>
                        :<FontAwesomeIcon icon={faBars} onClick={toggle} style={{cursor: "pointer"}}/>}
                       
                   </div>
                   
                   <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                   style={{display: isOpen ? "block" : "none"}}></img>
               </div>
               <NavLink to={SidebarData[0].link} className="link-cms" activeclassName="active-cms">
                  <div className="icon-cms">{SidebarData[0].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[0].text}</div>
               </NavLink>
               <botton to={SidebarData[1].link} className="link-cms" activeclassName="active-cms" onClick={toggleWhoweare}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div className="icon-cms">{SidebarData[1].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[1].text}</div>
                  <div className="icon-arrow-cms">{isOpen ? (isWhoweareOpen ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)) : (<></>)}</div>
               </botton>
              {isWhoweareOpen ? (
                  whoweareData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[2].link} className="link-cms" activeclassName="active-cms" onClick={togglePandS}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div className="icon-cms">{SidebarData[2].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[2].text}</div>
                  <div className="icon-arrow-cms">{isOpen ? (isPandSOpen ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)) : (<></>)}</div>
               </botton>
              {isPandSOpen ? (
                  PnSData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[3].link} className="link-cms" activeclassName="active-cms" onClick={toggleSO}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div className="icon-cms">{SidebarData[3].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[3].text} </div>
                  <div className="icon-arrow-cms">{isOpen ? (isSOOpen ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isSOOpen ? (
                  SOData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[4].link} className="link-cms" activeclassName="active-cms" onClick={togglePublication}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div className="icon-cms">{SidebarData[4].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[4].text} </div>
                  <div className="icon-arrow-cms">{isOpen ? (isPublicationOpen ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isPublicationOpen ? (
                  PublicationData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[5].link} className="link-cms" activeclassName="active-cms" onClick={toggleStories}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div className="icon-cms">{SidebarData[5].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[5].text} </div>
                  <div className="icon-arrow-cms">{isOpen ? (isStoriesOpen ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isStoriesOpen ? (
                  StoriesData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

               <NavLink to={SidebarData[6].link} className="link-cms" activeclassName="active-cms">
                  <div className="icon-cms">{SidebarData[6].icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[6].text}</div>
               </NavLink>
               
           </div>
        </div>
    </>
  );
}

export default Navbar;