import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData, whoweareData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen (!isOpen);
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen); 
    }
  }

  const[isWhoweareOpen ,setIsWhoweareOpen] = useState(false);  
  const toggleWhoweare = () =>{
    setIsWhoweareOpen (!isWhoweareOpen); 
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    
  } 

  return (
    <>
      <div className="container-cms">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar-cms">
               <div className="top_section-cms">
                   {/*<h1 style={{display: isOpen ? "block" : "none"}} className="logo-cms">Logo</h1>*/}
                   <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                   style={{display: isOpen ? "block" : "none"}}></img>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars-cms">
                        {isOpen ? <FontAwesomeIcon icon={faClose} onClick={toggle} style={{cursor: "pointer"}}/>
                        :<FontAwesomeIcon icon={faBars} onClick={toggle} style={{cursor: "pointer"}}/>}
                       
                   </div>
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
               </botton>
              {isWhoweareOpen ? (
                  whoweareData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

               {/*
                   SidebarData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms">
                           <div className="icon-cms">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                   */}
           </div>
        </div>
    </>
  );
}

export default Navbar;