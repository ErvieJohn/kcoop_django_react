import React, { useEffect, useState } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";

import { BASE_URL } from '../../../config';

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const ActivityLogs = () => {
    const [User] = useOutletContext();
    const user = JSON.parse(User);
    const [data, setData] = useState([]);
    var [usernameVal, setUsernameVal] = useState(null);
    var [actionVal, setActionVal] = useState(null);
    var [dateVal, setDateVal] = useState(null);
    var [timeVal, setTimeVal] = useState(null);

    const getAuditTrail = (user, username, action, date, time) => {
        var InsertAPIURL = `${BASE_URL}/getAuditTrail/`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          var DataBody = {username: user[0].username, staff: user[0].Staff,
            usernameInput: username, action: action, date: date, time: time}; 
          console.log("DataBody: ", DataBody);
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
          .then(response => response.json())
          .then(response => {
            let res = response;
            
            //data = res;
            
            setData(res);
            console.log("res: ",res[0].AuditTrail_datetime);
            //console.log(data);
    
          }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
              
      }
    
    const columns = [{  
        Header: 'Username',  
        accessor: 'AuditTrail_user',
        sortable: true,
        maxWidth: 205,
        width: 205,
        Cell: row => (
            <div style={{ textAlign: "center"}}>{row.value}</div>
          )
        },
        {  
        Header: 'Action',  
        accessor: 'AuditTrail_action',
        sortable: true,
        maxWidth: 170,
        width: 170,
        Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
            )
        },{  
        Header: 'Activity',  
        accessor: 'AuditTrail_activity',
        sortable: false,
        maxWidth: 620,
        width: 620,
        },{  
        Header: 'DateTime',  
        accessor: 'AuditTrail_datetime',
        sortable: true,
        maxWidth: 200,
        width: 200,
        Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
          )
        }];
    
    function onChangeUsername(e){
        usernameVal = e.target.value;
        setUsernameVal(usernameVal);

        //console.log(usernameVal);
        //getAuditTrail(user, usernameVal, actionVal, dateVal, timeVal);
    }

    function onChangeAction(e){
        actionVal = e.target.value;
        setActionVal(actionVal);
    }

    function onChangeDate(e){
        dateVal = e.target.value;
        setDateVal(dateVal);
    }

    function onChangeTime(e){
        timeVal = e.target.value;
        setTimeVal(timeVal);
    }


    function searchData(){
        getAuditTrail(user, usernameVal, actionVal, dateVal, timeVal);
        console.log(user, usernameVal, actionVal, dateVal, timeVal);
    }


    useEffect(() => {
        getAuditTrail(user, usernameVal, actionVal, dateVal, timeVal);
    }, []);



  return (
    <>
    <center>
        <h1><b>Activity Logs</b></h1>
    </center>
    <center style={{margin: user[0].Staff ? "none":"0 100px 0 100px"}}>
        <div style={{justifyContent: 'space-between', marginBottom: "10px", marginRight: "30px"}} id='icon-text-cms'>
            {user[0].Staff ? (
            <div id='icon-text-cms'>
                <b style={{marginRight: "10px", marginTop: "2px"}}>Username: </b> 
                <input className="inputSO" type="text" placeholder='Enter Username' style={{height: "25px", width: "200px"}}
                onChange={onChangeUsername}/>
            </div>):(<></>)}
            
            
            <div id='icon-text-cms'>
                <b style={{marginRight: "10px", marginTop: "2px"}}><label for="action">Action:</label></b>
                <select name="action" id="action" className="inputSO" style={{height: "25px", width: "200px"}}
                onChange={onChangeAction}>
                    <option value="All">All</option>
                    <option value="Create">Create</option>
                    <option value="Update">Update</option>
                    <option value="Delete">Delete</option>
                    <option value="Log In">Log In</option>
                    <option value="Log Out">Log Out</option>
                </select>
            </div>
            <div id='icon-text-cms'>
                <b style={{marginRight: "10px", marginTop: "2px"}}>Date: </b> <input className="inputSO" type="date"
                    style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeDate}/>
            </div>
            
            <div id='icon-text-cms'>
                <b style={{marginRight: "10px", marginTop: "2px"}}>Time: </b> <input className="inputSO" type="time" 
                style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeTime}/>
            </div>

            <button type="button" class="search-cms" onClick={searchData}>Search</button>
            
        </div>
    </center>
    {data.length > 0 ? (
    <div>  
        <ReactTable  
            className='react-table-cms'
            style={{marginRight: "30px"}}
            data={data}  
            columns={columns}  
            defaultPageSize = {10}  
            pageSizeOptions = {[10,30,50,80,100]}  
        />  
    </div>
    ):
    <div style={{height: "100px"}}>
        <center>
            <h3>
                No data found
            </h3>
        </center>
        {/* <LoadingSpinner/> */}
    </div>
    }
    </>
    
  )
}

export default ActivityLogs;