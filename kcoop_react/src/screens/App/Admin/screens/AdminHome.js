import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear, faLessThan, faSearch, faSearchMinus, faSignOut, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import { BASE_URL } from '../../../../config';
import LoadingSpinner from '../../../LoadingSpinner';
import './AdminHome.css';

function AdminHome(props) {
    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    const [searchByValue, setSearchByValue] = useState("Username");

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    // FOR USER DROPDOWN
    const [dropdown, setDropdown] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState(false);

    var [inputSearch, setInputSearch] = useState("");

    function clickedDropdown(){
        setDropdown(!dropdown);
    }

    function toggleLogout(){
        props.logout();
    }

    function handleSearchByChange(e) {
        setSearchByValue(e.target.value);
    }

    var columns = [];
    columns = [{  
        Header: 'Username',  
        accessor: 'Username',
        sortable: true,
        maxWidth: 180,
        width: 180,
        // Cell: row => (
        //     <div style={{ textAlign: "center"}}>{row.value}</div>
        //   )
        },
        {  
        Header: 'First Name',  
        accessor: 'FirstName',
        sortable: true,
        maxWidth: 180,
        width: 180,
        // Cell: row => (
        //     <div style={{ textAlign: "center" }}>{row.value}</div>
        //     )
        },
        {  
        Header: 'Last Name',  
        accessor: 'LastName',
        sortable: true,
        maxWidth: 180,
        width: 180,
        // Cell: row => (
        //     <div style={{ textAlign: "center" }}>{row.value}</div>
        //     )
        },{  
        Header: 'Email',  
        accessor: 'Email',
        sortable: false,
        maxWidth: 400,
        width: 400,  
        Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
            )
        }
        ,{  
        Header: 'Date Joined',  
        accessor: 'DateJoined',
        sortable: true,
        maxWidth: 220,
        width: 220,
        Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
          )
        }];

    const getMembers = async() => {
        var InsertAPIURL = `${BASE_URL}/api/member/getMembers/`;
        let response = await fetch(InsertAPIURL, {
              method:'GET',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(memberAuthTokens.access)
              }
          })
          let data = await response.json()
    
          if(response.status === 200){
            //console.log("data.data: ", data.data);
            setData(data.data);

            setIsLoading(false);
            
          }else if(response.statusText === 'Unauthorized'){
            props.logout();
          }
    }

    const searchMembers = async() => {
        var InsertAPIURL = `${BASE_URL}/api/member/searchMembers/`;
        var DataBody = {searchby: searchByValue, inputsearch: inputSearch}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(memberAuthTokens.access)
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json()
    
          if(response.status === 200){
           //console.log("data.data: ", data.data);
            setData(data.data);

            setIsLoading(false);
            
          }else if(response.statusText === 'Unauthorized'){
            props.logout();
          }
    }

    

    function handleOnChangeSearch(text){
        inputSearch = text.target.value;
        setInputSearch(inputSearch)
        setIsLoading(true);
        searchMembers();
    }

    useEffect(() =>{
        if(isLoading){
            getMembers();
        }
            
        
    }, []);


  return (
    <>
        <header className='header-background'>
            <div className='app-header'>
                <div style={{display: "flex"}}>
                    <a href='/app' style={{color: "black"}}>
                        <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                        style={{marginRight: "15px", marginTop: "3px"}}></img>
                        <span className='kcooptitle-cms'>
                            <b> KASAGANA-KA  </b> COOPERATIVE
                        </span>
                    </a>
                    
                </div>

                <div>
                    <span>
                        <b> Administrator </b>
                    </span>
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
                        {"Hi, " + member.username + "!"} 
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
                        <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        // onClick={toggleSettingModal}
                        > <FontAwesomeIcon icon={faGear}/> My Profile</button>
                        <button className="dropdown-profile-btn" style={{borderRadius: "0 0 8px 8px"}} onClick={toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
                    </div> 
                </div>
                
            </div>
        </header>
        
            <div style={{margin: "0 50px 0 50px"}}>
                <div className='content-header'>
                    <div className='content-header-search' >
                        <label for="search-by" style={{marginRight: "10px"}}>Search by:</label> 
                        <select name="search-by" value={searchByValue} id="search-by" style={{marginRight: "10px"}}
                            onChange={handleSearchByChange}
                        > 
                            <option selected value="Username">Username</option> 
                            <option value="Firstname">First Name</option> 
                            <option value="Lastname">Last Name</option> 
                            <option value="Email">Email</option> 
                        </select>
                        <input className='app-input-search' type="text" placeholder={'Search for '+searchByValue}
                            style={{backgroundImage: <FontAwesomeIcon icon={faSearch}/>}}
                            value={inputSearch}
                            onChange={(text)=>{
                                handleOnChangeSearch(text);
                                
                            }}
                        />

                    </div>
                </div>
                
                <div className='content-member-table'>
                {isLoading ? (
                    <>
                        <LoadingSpinner/>
                    </>):(
                    <>
                        <ReactTable  
                            className='react-table-cms'
                            style={{marginRight: "30px"}}
                            data={data}  
                            columns={columns}  
                            defaultPageSize = {10}  
                            pageSizeOptions = {[10,30,50,80,100]}  
                    />   
                    </>
                )}
                    
                     
                </div>


            </div>
            
        
    </>
    
  )
}

export default AdminHome