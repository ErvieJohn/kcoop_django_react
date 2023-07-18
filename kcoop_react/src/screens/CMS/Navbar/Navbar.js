import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData, whoweareData, PnSData, SOData, PublicationData, StoriesData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faBars, faClose, faLeftLong, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = (props) => {
  //const [pageTitle, setPageTitle] = useState(null);
  const user = JSON.parse(props.user);
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

  const[isLogoutOpen ,setIsLogoutOpen] = useState(false);  
  const toggleLogout = () =>{
    setIsLogoutOpen (!isLogoutOpen); 
    
    if(!isOpen){
      setIsOpen (!isOpen);
    }
    props.logout();
    /*
    if(isWhoweareOpen){
      setIsWhoweareOpen (!isWhoweareOpen);
    }
    */
  }

  return (
    <>
      <header className="header-cms" style={{left: isOpen ? '280px':'50px', paddingRight: "70px", transition: 'all 0.5s' }}>
        <div>
            <b>ADMINISTRATION</b>
        </div>
        {/* <div>
            <b>{pageTitle}</b>
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
               <NavLink to={SidebarData[0].link} className="link-cms" activeclassName="active-cms">
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[0].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[0].text}</div>
                  </div>
               </NavLink>
               <botton to={SidebarData[1].link} className="link-cms" activeclassName="active-cms" onClick={toggleWhoweare}
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
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[2].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[2].text}</div> 
                  </div>
                  

                  <div className="icon-arrow-cms">{isOpen ? (isPandSOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
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
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[3].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[3].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isSOOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
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
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[4].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[4].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isPublicationOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
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
                  <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[5].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[5].text} </div>
                  </div>
                  
                  <div className="icon-arrow-cms">{isOpen ? (isStoriesOpen ? (<FontAwesomeIcon icon={faMinus} />) : (<FontAwesomeIcon icon={faPlus} />)) : (<></>)}</div>
                  
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
               <div id="icon-text-cms">
                    <div className="icon-cms">{SidebarData[6].icon}</div>
                    <div style={{width:'15px',height:'auto',display:'inline-block'}}/>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text-cms">{SidebarData[6].text}</div>
                  </div>
                  
               </NavLink>

               
               <div className='footer-logout-cms' style={{width: isOpen ? '280px' : '50px', transition: 'all 0.5s'}}>
                {isOpen ? (<div className="icon-cms" style={{marginLeft: "15px"}}><FontAwesomeIcon icon={faUser}/><b style={{marginLeft: "20px"}}>{user[0].username}</b></div>):
                (<></>)}
                
                
                <botton to="#" className="link-cms" activeclassName="active-cms" onClick={toggleLogout}
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