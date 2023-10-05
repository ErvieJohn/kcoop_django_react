import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear, faLessThan, faSearch, faSearchMinus, faSignOut, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import { BASE_URL } from '../../../../config';
import LoadingSpinner from '../../../LoadingSpinner';
import './AdminHome.css';
import AdminNavHeader from '../AdminNavHeader/AdminNavHeader';

function AdminHome(props) {
    const [adminAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    const [searchByValue, setSearchByValue] = useState("Username");

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    var [inputSearch, setInputSearch] = useState("");

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
        Cell: row => (
            <div style={{ textAlign: "center" }}>
                <a href={'/app/admin/edit/' + row.value} target='_blank'>{row.value}</a>
            </div>
          )
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
        var InsertAPIURL = `${BASE_URL}/api/admin/getMembers/`;
        let response = await fetch(InsertAPIURL, {
              method:'GET',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(adminAuthToken.access)
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
        var InsertAPIURL = `${BASE_URL}/api/admin/searchMembers/`;
        var DataBody = {searchby: searchByValue, inputsearch: inputSearch}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(adminAuthToken.access)
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
            <AdminNavHeader toggleLogout={toggleLogout}/>
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