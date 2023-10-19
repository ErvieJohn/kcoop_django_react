import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear, faLessThan, faListCheck, faSearch, faSearchMinus, faSignOut, faUser, faUserFriends, faUserGroup, faUserSecret, faXmark } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function AdminNavHeader(props) {
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    // FOR USER DROPDOWN
    const [dropdown, setDropdown] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState(false);

    function clickedDropdown(){
        setDropdown(!dropdown);

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            setHoverDropdown(!hoverDropdown);
        }
    }

    const navigate = useNavigate();

    function toggleListMember(){
        clickedDropdown();
        navigate('/app/admin');
    }

    function toggleMemberActivityLog(){
        clickedDropdown();
        navigate('/app/admin/MemberActivityLog');
    }

    function toggleAdminActivityLog(){
        clickedDropdown();
        navigate('/app/admin/AdminActivityLog');
    }
    
  return (
    <header className='header-background'>
            <div className='app-header'>
                <div style={{display: "flex"}}>
                    <a href='/app/admin' style={{color: "black", display: "flex",alignItems: "center"}}>
                        <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                        style={{marginRight: "15px"}}></img>
                        <span className='kcooptitle-app-admin'>
                            <b> KASAGANA-KA  </b> COOPERATIVE 
                        </span>

                        <i style={{fontFamily: "monospace", marginLeft: "7px"}}> Administrator</i>
                        
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
                        <FontAwesomeIcon icon={faUser} className='show-userlogo-app' style={{marginRight:"10px"}}/> 
                        <b className='show-username-app'>{"Hi, " + admin.username + "!"} </b>

                        {dropdown ? (<FontAwesomeIcon icon={faXmark} style={{marginLeft:"10px"}}/>): 
                        (<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"10px"}}/>)}
                    </button>
                    
                    <div class="dropdown-profile" style={{display: hoverDropdown ? ("flex"):("none"), width: "200px"}}
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
                        
                        <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        onClick={toggleListMember}
                        > <FontAwesomeIcon icon={faListCheck}/> List of Members</button> 
                        
                        <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        onClick={toggleMemberActivityLog}
                        > <FontAwesomeIcon icon={faUserGroup}/> Members Activity Logs</button> 
                        <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        onClick={toggleAdminActivityLog}
                        > <FontAwesomeIcon icon={faUserSecret}/> Admin Activity Logs</button> 
                        <button className="dropdown-profile-btn" style={{borderRadius: "0 0 8px 8px"}} onClick={props.toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
                        
                    
                    </div> 
                </div>
                
            </div>
        </header>
  )
}

export default AdminNavHeader