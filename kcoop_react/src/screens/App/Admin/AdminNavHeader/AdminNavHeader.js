import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear, faLessThan, faSearch, faSearchMinus, faSignOut, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";

function AdminNavHeader(props) {
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    // FOR USER DROPDOWN
    const [dropdown, setDropdown] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState(false);

    function clickedDropdown(){
        setDropdown(!dropdown);
    }
    
  return (
    <header className='header-background'>
            <div className='app-header'>
                <div style={{display: "flex"}}>
                    <a href='/app/admin' style={{color: "black"}}>
                        <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                        style={{marginRight: "15px", marginTop: "3px"}}></img>
                        <span className='kcooptitle-cms'>
                            <b> KASAGANA-KA  </b> COOPERATIVE <i style={{fontFamily: "monospace", marginLeft: "7px"}}> Administrator</i>
                        </span>
                    </a>
                    
                </div>

                <div className='dropdown-profile-wrapper'>
                    <button className='dropdown-btn-setting' type="button" 
                        style={{border: "none", backgroundColor: "transparent", padding: "10px"}} 
                        onClick={clickedDropdown}
                        onMouseOver={(e) => {
                            e.preventDefault();
                            setHoverDropdown(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            if(!dropdown){
                                setHoverDropdown(false);
                            }
                            
                        }}
                    > 
                        <FontAwesomeIcon icon={faUser} style={{marginRight:"10px"}}/> 
                        {"Hi, " + admin.username + "!"} 
                        {dropdown ? (<FontAwesomeIcon icon={faXmark} style={{marginLeft:"10px"}}/>): 
                        (<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"10px"}}/>)}
                    </button>
                    
                    <div class="dropdown-profile" style={{display: hoverDropdown ? ("flex"):("none")}}
                        onMouseOver={(e) => {
                            e.preventDefault();
                            setHoverDropdown(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            if(!dropdown){
                                setHoverDropdown(false);
                            }
                            
                        }}
                    >
                        {/* <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        // onClick={toggleSettingModal}
                        > <FontAwesomeIcon icon={faGear}/> My Profile</button> */}
                        <button className="dropdown-profile-btn" style={{borderRadius: "0 0 8px 8px"}} onClick={props.toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
                    </div> 
                </div>
                
            </div>
        </header>
  )
}

export default AdminNavHeader