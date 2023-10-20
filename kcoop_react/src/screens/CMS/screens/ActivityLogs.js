import React, { useEffect, useRef, useState } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";

import { BASE_URL } from '../../../config';

// for passing props with outlet
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from '../../LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faRemove, faSearch } from '@fortawesome/free-solid-svg-icons';
import './ActivityLogs.css';

const ActivityLogs = () => {
    const [User] = useOutletContext();
    //let parseUser = JSON.parse(User);
    let parseUser = User;
    
    var [user, setUser] = useState(parseUser.username);
    const [staff, setStaff] = useState(false);
    //console.log("user", JSON.parse(User));
    //const [user, setUser] = useState(JSON.parse(User));
    
    const [data, setData] = useState([]);
    var [usernameVal, setUsernameVal] = useState(null);
    var [actionVal, setActionVal] = useState(null);
    var [dateVal, setDateVal] = useState(null);
    var [timeVal, setTimeVal] = useState(null);

    var dateToday = new Date();
    var dd = String(dateToday.getDate()).padStart(2, '0');
    var mm = String(dateToday.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dateToday.getFullYear();

    dateToday = yyyy + '-' + mm + '-' + dd;
    //var [dateToVal, setDateToVal] = useState(dateToday);
    var [dateToVal, setDateToVal] = useState(null);
    //console.log(dateToVal);

    var [timeToVal, setTimeToVal] = useState(null);

    const usernameRef = useRef(null);
    const actionRef = useRef(null);
    const dateRef = useRef(null);
    const dateToRef = useRef(null);
    const timeRef = useRef(null);
    const timeToRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const getCmsStaff = (user) =>{
        var InsertAPIURL = `${BASE_URL}/getCmsStaff/`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          var DataBody = {username: user}; 
          //console.log("DataBody: ", DataBody);
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
          .then(response => response.json())
          .then(response => {
            let res = response;
            //console.log("res: ", res);
            if(res.Staff){
                setStaff(true);
            }
            else{
                setStaff(false);
            }
            //console.log(res);
            //console.log(data);
    
          }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
    }

    const getAuditTrail = (user, username, action, date, time, toDate, toTime) => {
        setIsLoading(true);

        var InsertAPIURL = `${BASE_URL}/getAuditTrail/`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          var DataBody = {username: user, staff: staff,
            usernameInput: username, action: action, date: date, time: time, toDate: toDate, toTime: toTime}; 
          //console.log("DataBody: ", DataBody);
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
            //console.log(res);
            //console.log(data);
            setIsLoading(false);
    
          }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
              
      }
    
    var columns = [];

    if(staff){
        columns = [{  
            Header: 'Username',  
            accessor: 'AuditTrail_user',
            sortable: true,
            maxWidth: 170,
            width: 170,
            Cell: row => (
                <div style={{ textAlign: "center"}}>{row.value}</div>
              )
            },
            {  
            Header: 'Superuser',  
            accessor: 'AuditTrail_staff',
            sortable: true,
            maxWidth: 80,
            width: 80,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
            },
            {  
            Header: 'Action',  
            accessor: 'AuditTrail_action',
            sortable: true,
            maxWidth: 120,
            width: 120,
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
        
    }
    else{
        columns = [{  
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
    }
    
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
    function onChangeToDate(e){
        dateToVal = e.target.value;
        setDateToVal(dateToVal);
    }

    

    function onChangeTime(e){
        timeVal = e.target.value;
        setTimeVal(timeVal);
    }

    function onChangeToTime(e){
        timeToVal = e.target.value;
        setTimeToVal(timeToVal);
    }

    


    function searchData(){
        getAuditTrail(user, usernameVal, actionVal, dateVal, timeVal, dateToVal, timeToVal);
        //console.log(user, usernameVal, actionVal, dateVal, timeVal);
    }

    function clearData(){

        if(staff){
            usernameRef.current.value = null;
            setUsernameVal(null);
        }
        
        actionRef.current.value = "All";
        dateRef.current.value = null;
        dateToRef.current.value = null;
        timeRef.current.value = null;
        timeToRef.current.value = null;

        
        setActionVal("All");
        setDateVal(null);
        setDateToVal(null);
        setTimeVal(null);
        setTimeToVal(null);

        getAuditTrail(user, null, null, null, null, null, null);
    }


    useEffect(() => {
        //console.log("user: ", user);
        getCmsStaff(user);
        if(isLoading){
            getAuditTrail(user, usernameVal, actionVal, dateVal, timeVal, dateToVal, timeToVal);
        }
        

    }, []);



  return (
    <>
    <div>
        <center>
            <h1><b>Activity Logs</b></h1>
        </center>
        <center style={{margin: staff ? ("0px"):("0 100px 0 100px")}}>
            <div className='cms-AL-header' style={{marginBottom: "10px"}} id='icon-text-cms'>
                {staff ? (
                <div id='icon-text-cms' style={{marginTop:"20px"}}>
                    <b className='cms-header-labels' style={{marginTop: "2px"}}>Username: </b> 
                    <input ref={usernameRef} className="inputSO" type="text" placeholder='Enter Username' style={{height: "25px", width: "200px"}}
                    onChange={onChangeUsername}/>
                </div>):(<></>)}
                
                
                <div id='icon-text-cms' style={{marginTop:"20px"}}>
                    <b className='cms-header-labels' style={{marginTop: "2px"}}><label for="action">Action:</label></b>
                    <select ref={actionRef} defaultValue="All" name="action" id="action" className="inputSO" style={{height: "25px", width: "200px"}}
                    onChange={onChangeAction}>
                        <option value="All">All</option>
                        <option value="Create">Create</option>
                        <option value="Update">Update</option>
                        <option value="Delete">Delete</option>
                        <option value="Log In">Log In</option>
                        <option value="Log Out">Log Out</option>
                    </select>
                </div>
                <div>
                    <center><b>Date</b></center>
                    <div style={{display:"grid", justifyItems: 'flex-end'}}>
                        <div id='icon-text-cms'>
                            <b className='cms-header-labels' style={{marginTop: "2px"}}>From: </b> <input ref={dateRef} className="inputSO" type="date"
                                style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeDate}/>
                        </div>
                        <div id='icon-text-cms'>
                            <b className='cms-header-labels' style={{marginTop: "2px"}}>To: </b> <input ref={dateToRef} className="inputSO" type="date"
                                style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeToDate}/> 
                                {/* value={dateToVal}  */}
                        </div>
                    </div>
                    
                </div>
                
                <div>
                    <center><b>Time</b></center>
                    <div style={{display:"grid", justifyItems: 'flex-end'}}>
                        <div id='icon-text-cms'>
                            <b className='cms-header-labels' style={{marginTop: "2px"}}>From: </b> <input ref={timeRef} className="inputSO" type="time" 
                            style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeTime}/>
                        </div>
                        <div id='icon-text-cms'>
                            <b className='cms-header-labels' style={{marginTop: "2px"}}>To: </b> <input ref={timeToRef} className="inputSO" type="time" 
                            style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeToTime}/>
                        </div>
                    </div>
                    
                </div>
                
                <div className='cms-clear-btn-wrapper'>
                    <button className='btn-cms' style={{backgroundColor: 'black', color:'white', width: '100px', marginTop:"20px"}} 
                            onClick={clearData}><FontAwesomeIcon icon={faRemove}/> Clear</button>
                    <br/>
                    <button className='btn-cms' style={{backgroundColor: 'lightseagreen', color:'white', width: '100px', marginTop:"20px"}} 
                            onClick={searchData}><FontAwesomeIcon icon={faSearch}/> Search</button>
                </div>
                
                
                
            </div>
        </center>
        {isLoading ? (
            <LoadingSpinner/>
        
        ): (
            <div className='cms-text-content'>  
                <ReactTable  
                    className='react-table-cms'
                    data={data}  
                    columns={columns}  
                    defaultPageSize = {10}  
                    pageSizeOptions = {[10,30,50,80,100]}  
                />  
            </div>
            // <div style={{height: "420px",alignItems: "center", alignContent: "center",justifyContent: "center", display: "flex"}}>
            //     <center>
            //         <h3>
            //             No data found
            //         </h3>
            //     </center>
                
            // </div>
        )
        
        
        }
    </div>
    
    </>
    
  )
}

export default ActivityLogs;