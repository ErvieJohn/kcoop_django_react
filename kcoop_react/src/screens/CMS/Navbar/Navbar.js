import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarData, whoweareData, PnSData, SOData, PublicationData, StoriesData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faBars, faClose, faLeftLong, faSignOut, faUser, faLightbulb, faPowerOff, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";


const Navbar = (props) => {
  const location = useLocation();

  //const [pageTitle, setPageTitle] = useState(null);
  // const user = JSON.parse(props.user);
  const user = props.user;
  //console.log(user);
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen (!isOpen);
    if(isOpen){
      setIsWhoweareOpen (false); 
      setIsPandSOpen (false); 
      setIsSOOpen (false); 
      setISPublicationOpen (false);
      setIsStoriesOpen(false);
      setIsLogoutOpen(false);
    }
    props.open(!isOpen);
    //console.log("NAV",!isOpen);
  }

  const[isWhoweareOpen ,setIsWhoweareOpen] = useState(false);  
  const toggleWhoweare = () =>{
    setIsWhoweareOpen (!isWhoweareOpen); 
    

    if(!isOpen){
      setIsOpen (!isOpen);
      
    }
    props.open(true);
    
  } 

  const[isPandSOpen ,setIsPandSOpen] = useState(false);  
  const togglePandS = () =>{
    setIsPandSOpen (!isPandSOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    props.open(true);
    
  }

  const[isSOOpen ,setIsSOOpen] = useState(false);  
  const toggleSO = () =>{
    setIsSOOpen (!isSOOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    props.open(true);
    
  }

  const[isPublicationOpen ,setISPublicationOpen] = useState(false);  
  const togglePublication = () =>{
    setISPublicationOpen (!isPublicationOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    props.open(true);
    
  }

  const[isStoriesOpen ,setIsStoriesOpen] = useState(false);  
  const toggleStories = () =>{
    setIsStoriesOpen (!isStoriesOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    props.open(true);
    
  }

  const[isLogoutOpen ,setIsLogoutOpen] = useState(false);  
  const toggleLogout = () =>{
    setIsLogoutOpen (!isLogoutOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }

    props.logout();
    
  }
  var pageTitle;
  if(location.pathname=="/cms/home" || location.pathname=="/cms/" || location.pathname=="/cms"){
    pageTitle = "HOME";
  }
  else if(location.pathname=="/cms/history"){
    pageTitle = "HISTORY";
  }
  else if(location.pathname=="/cms/vmg"){
    pageTitle = "V M G";
  }
  else if(location.pathname=="/cms/kso_guiding_principles"){
    pageTitle = "KSO GUIDING PRINCIPLES";
  }
  else if(location.pathname=="/cms/cooperative_principles"){
    pageTitle = "COOPERATIVE PRINCIPLES";
  }
  else if(location.pathname=="/cms/organizational_structure"){
    pageTitle = "ORGANIZATIONAL STRUCTURE";
  }
  else if(location.pathname=="/cms/livelihood_and_enterprise_development"){
    pageTitle = "Livelihood and Enterprise Development";
  }
  else if(location.pathname=="/cms/education_training_and_formation"){
    pageTitle = "Education, Training and Formation";
  }
  else if(location.pathname=="/cms/health_and_wellness"){
    pageTitle = "Health and Wellness";
  }
  else if(location.pathname=="/cms/security_shelter_and_safety"){
    pageTitle = "Security, Shelter and Safety";
  }
  else if(location.pathname=="/cms/social_protection"){
    pageTitle = "Social Protection";
  }
  else if(location.pathname=="/cms/ncr"){
    pageTitle = "National Capital Region";
  }
  else if(location.pathname=="/cms/region3"){
    pageTitle = "Region III";
  }
  else if(location.pathname=="/cms/region4a"){
    pageTitle = "Region IV - A";
  }
  else if(location.pathname=="/cms/annual_reports"){
    pageTitle = "Annual Reports";
  }
  else if(location.pathname=="/cms/audited_financial_statements"){
    pageTitle = "Audited Financial Statements";
  }
  else if(location.pathname=="/cms/announcements" || location.pathname.includes("/cms/announcements")){
    pageTitle = "Announcements";
  }
  else if(location.pathname=="/cms/by_the_numbers"){
    pageTitle = "By The Numbers";
  }
  else if(location.pathname=="/cms/k_ganap" || location.pathname.includes("/cms/k_ganap")){
    pageTitle = "K - Ganapan";
  }
  else if(location.pathname=="/cms/kwentong_k" || location.pathname.includes("/cms/kwentong_k")){
    pageTitle = "Kwentong - K";
  }
  else if(location.pathname=="/cms/k_bahagi" || location.pathname.includes("/cms/k_bahagi")){
    pageTitle = "K - Bahagi";
  }
  else if(location.pathname=="/cms/videos"){
    pageTitle = "Videos";
  }
  else if(location.pathname=="/cms/careers"){
    pageTitle = "Careers";
  }
  else if(location.pathname=="/cms/activity_logs"){
    pageTitle = "Activity Logs";
  }

  const[isDarkMode , setIsDarkMode] = useState(props.currentDM);  
  //console.log("isDarkMode:         ", isDarkMode)
  //console.log("darkMode", typeof isDarkMode);
  const onDarkMode = () =>{
    setIsDarkMode (!isDarkMode); 
    props.darkmode();
    
  }

  return (
    <>
      <header className="header-cms" style={{left: isOpen ? '280px':'50px', paddingRight: "70px", transition: 'all 0.5s' }}>
        <div>
            <b id='pagetitle-cms'>{pageTitle}</b>
        </div> 
        <div>
          <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
          style={{marginRight: "15px", marginTop: "3px"}}></img>
          <span className='kcooptitle-cms'>
            <b> KASAGANA-KA  </b> COOPERATIVE
          </span>
          
        </div>
        
            {/* <b>ADMINISTRATION</b> */}
            
        <button className="darkmodesize-cms" onClick={onDarkMode}>
          <b className="darkmodetxt-cms">Dark Mode</b> {isDarkMode ? 
        <FontAwesomeIcon icon={faToggleOn}/> : <FontAwesomeIcon icon={faToggleOff} />}</button>
            {/* <label className='toggleLabel'>
                <strong className='toggleStrong'>Dark Mode</strong>
                <input className='toggleInput' type="checkbox" defaultChecked={isDarkMode} onClick={onDarkMode} />
                <span className='toggleSpan'/>
            </label> */}
        {/* <div id="icon-text-cms">
        </div> */}
         
        
      </header>
      <div className="container-cms">
           <div style={{width: isOpen ? "280px" : "50px"}} className="sidebar-cms">
               <div className="top_section-cms" style={{display: 'flex', justifyContent: 'space-between'}}>
                   {/*<h1 style={{display: isOpen ? "block" : "none"}} className="logo-cms">Logo</h1>*/}
                   
                   <div style={{marginLeft: isOpen ? "10px" : "0px", marginRight: "50px"}} className="bars-cms">
                        {isOpen ? <FontAwesomeIcon icon={faClose} onClick={toggle} style={{cursor: "pointer"}}/>
                        :<FontAwesomeIcon icon={faBars} onClick={toggle} style={{cursor: "pointer"}}/>}
                       
                   </div>
                   {isOpen ? (
                    <div>
                      <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                      style={{display: isOpen ? "block" : "none", marginRight: "15px"}}></img>
                      <b> KASAGANA-KA  </b> COOPERATIVE
                    </div>
                   ):(<></>)}
                   
                  
               </div>
               <NavLink to={SidebarData[0].link} className="link-cms" activeclassName="active-cms" title={ isOpen ? '':'Home'}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[0].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[0].text}</div>
                  </div>
                  
               </NavLink>
               <botton to={SidebarData[1].link} className="link-cms" activeclassName="active-cms" onClick={toggleWhoweare}
                  title={ isOpen ? '':'Who We Are'}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[1].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[1].text}</div>
                  </div>

                  <div className="icon-arrow-cms">{isOpen ? (isWhoweareOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
               </botton>
              {isWhoweareOpen ? (
                  whoweareData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms" >
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[2].link} className="link-cms" activeclassName="active-cms" onClick={togglePandS}
                title={ isOpen ? '':'Programs And Services'}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[2].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[2].text}</div> 
                  </div>
                  

                  <div className="icon-arrow-cms">{isOpen ? (isPandSOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
               </botton>
              {isPandSOpen ? (
                  PnSData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms" >
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[3].link} className="link-cms" activeclassName="active-cms" onClick={toggleSO}
              title={ isOpen ? '':'Satallite Offices'}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[3].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[3].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isSOOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isSOOpen ? (
                  SOData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms" >
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[4].link} className="link-cms" activeclassName="active-cms" onClick={togglePublication}
              title={ isOpen ? '':'Publications'}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[4].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[4].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isPublicationOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isPublicationOpen ? (
                  PublicationData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms" >
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

              <botton to={SidebarData[5].link} className="link-cms" activeclassName="active-cms" onClick={toggleStories}
              title={ isOpen ? '':'Stories'}
                  style={{cursor: "pointer",
                          WebkitTapHighlightColor: "transparent",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",}}>
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[5].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[5].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isStoriesOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
              </botton>
                
              
              {isStoriesOpen ? (
                  StoriesData.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link-cms" activeclassName="active-cms" >
                           <div style={{display: isOpen ? "block" : "none", marginLeft: "5%", fontSize: "14px"}} className="link_text-cms">{item.text}</div>
                       </NavLink>
                   ))
                ) : (<></>) 
              }

               <NavLink to={SidebarData[6].link} className="link-cms" activeclassName="active-cms" title={ isOpen ? '':'Careers'}>
               <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[6].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[6].text}</div>
                  </div>
                  
               </NavLink>

               
               <div className='footer-logout-cms' style={{width: isOpen ? '280px' : '50px', transition: 'all 0.5s'}}>

                {isOpen ? (<div className="icon-cms" style={{marginLeft: "15px"}}><FontAwesomeIcon icon={faUser}/><b style={{marginLeft: "20px"}}>{user.username}</b></div>):
                (<></>)}

                  <NavLink to={SidebarData[7].link} className="link-cms" activeclassName="active-cms" title={ isOpen ? '':'Activity Logs'}>
                      <div id="icon-text-cms">
                        <div className="icon-cms">{SidebarData[7].icon}</div>
                        <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[7].text}</div>
                      </div>
                      
                  </NavLink>
                
                
                <botton to="#" className="link-cms" activeclassName="active-cms" onClick={toggleLogout}
                    title={ isOpen ? '':'Logout'}
                    style={{cursor: "pointer",
                            WebkitTapHighlightColor: "transparent",
                            WebkitUserSelect: "none",
                            KhtmlUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                            userSelect: "none",}}>
                      
                    <div id="icon-text-cms">
                      <div className="icon-cms"><FontAwesomeIcon icon={faSignOut} /></div>
                      <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                      <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">Logout</div>
                    </div>
                    
                </botton>
               </div>
               
           </div>
        </div>
    </>
  );
}

export default Navbar;