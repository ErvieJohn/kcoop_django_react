import React, {useEffect, useState, useRef} from 'react'
import AdminNavHeader from '../../AdminNavHeader/AdminNavHeader';
import { useOutletContext } from 'react-router-dom';
import LoadingSpinner from '../../../../LoadingSpinner';
import jwt_decode from "jwt-decode";
import { BASE_URL } from '../../../../../config';
import ReactTable from 'react-table-6';
import { faSearch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AuditTrail.css';

function AdminAuditTrail() {
    const [adminAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    const [toggleLogout] = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    var columns = [];
    columns = [{  
            Header: 'Admin User',  
            accessor: 'AdminAuditTrail_user',
            sortable: true,
            maxWidth: 180,
            width: 180,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
        },
        {  
            Header: 'Action',  
            accessor: 'AdminAuditTrail_action',
            sortable: false,
            maxWidth: 180,
            width: 180,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
        },
        {  
            Header: 'Activity',  
            accessor: 'AdminAuditTrail_activity',
            sortable: false,
            maxWidth: 400,
            width: 400,
            // Cell: row => (
            //     <div style={{ textAlign: "center" }}>{row.value}</div>
            //     )
        },{  
            Header: 'Date',  
            accessor: 'AdminAuditTrail_date',
            sortable: true,
            maxWidth: 180,
            width: 180,  
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
        },{  
            Header: 'Time',  
            accessor: 'AdminAuditTrail_time',
            sortable: true,
            maxWidth: 220,
            width: 220,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
            )
        }
    ];

    const getActivityLog = async() => {
        var InsertAPIURL = `${BASE_URL}/api/admin/adminActivityLog/`;
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
            toggleLogout();
          }
    }

    const [isSearched, setIsSearched] = useState(false);

    var [inputSearch, setInputSearch] = useState(null);
    var [actionVal, setActionVal] = useState(null);
    var [dateVal, setDateVal] = useState(null);
    var [timeVal, setTimeVal] = useState(null);

    var [dateToVal, setDateToVal] = useState(null);
    //console.log(dateToVal);

    var [timeToVal, setTimeToVal] = useState(null);

    const inputSearchRef = useRef(null);
    const actionRef = useRef(null);
    const dateRef = useRef(null);
    const dateToRef = useRef(null);
    const timeRef = useRef(null);
    const timeToRef = useRef(null);

    const searchActivityLog = async(searched) => {
        var InsertAPIURL = `${BASE_URL}/api/admin/searchAdminActivityLog/`;

        var DataBody;
        
        if(!searched){
            DataBody = {inputsearch: inputSearch, action: actionVal, dateFrom: dateVal, timeFrom: timeVal, dateTo: dateToVal, timeTo: timeToVal}
        }
        else{
            DataBody = {inputsearch: null, action: null, dateFrom: null, timeFrom: null, dateTo: null, timeTo: null}
        }
        
        //console.log("DataBody: ", DataBody);
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
            toggleLogout();
          }
    }


    function handleOnChangeSearch(text){
        if(text.target.value.length > 0){
            inputSearch = text.target.value;

            setIsSearched(true);
        }
        else{
            inputSearch = null;
            if(actionVal, dateVal, timeVal, dateToVal, timeToVal == null || actionVal == "All"){
                setIsSearched(false);
            }
        }
        setInputSearch(inputSearch);
        setIsLoading(true);
        searchActivityLog(false);
    }

    function onChangeAction(e){
        if(e.target.value !== "All"){
            actionVal = e.target.value;

            setIsSearched(true);
        }
        else{
            actionVal = null;
            
            if(inputSearch, dateVal, timeVal, dateToVal, timeToVal == null){
                //console.log("inputSearch: ", inputSearch);
                setIsSearched(false);
            }
        }
        
        setActionVal(actionVal);
        setIsLoading(true);
        searchActivityLog(false);

        //setIsSearched(true);
    }

    function onChangeDate(e){
        dateVal = e.target.value;
        setDateVal(dateVal);

        

        setIsLoading(true);
        searchActivityLog(false);

        setIsSearched(true);

        if(dateVal == null){
            if(inputSearch, actionVal, timeVal, dateToVal, timeToVal == null || actionVal == "All"){
                setIsSearched(false);
            }
        }
    }

    function onChangeToDate(e){
        dateToVal = e.target.value;
        setDateToVal(dateToVal);

        

        setIsLoading(true);
        searchActivityLog(false);

        setIsSearched(true);

        if(dateToVal == null){
            if(inputSearch, actionVal, dateVal, timeVal, timeToVal == null || actionVal == "All"){
                setIsSearched(false);
            }
        }
    }

    function onChangeTime(e){
        timeVal = e.target.value;
        setTimeVal(timeVal);

        setIsLoading(true);
        searchActivityLog(false);

        setIsSearched(true);

        if(timeVal == null){
            if(inputSearch, actionVal, dateVal, dateToVal, timeToVal == null || actionVal == "All"){
                setIsSearched(false);
            }
        }
    }

    function onChangeToTime(e){
        timeToVal = e.target.value;
        setTimeToVal(timeToVal);

        setIsLoading(true);
        searchActivityLog(false);

        setIsSearched(true);

        if(timeToVal == null){
            if(inputSearch, actionVal, dateVal, dateToVal == null || actionVal == "All"){
                setIsSearched(false);
            }
        }
    }

    function onClickClear(){
        inputSearchRef.current.value = null;
        actionRef.current.value = "All";
        dateRef.current.value = null;
        dateToRef.current.value = null;
        timeRef.current.value = null;
        timeToRef.current.value = null;

        inputSearch = null;
        setInputSearch(inputSearch);
        setActionVal(null);
        setDateVal(null);
        setDateToVal(null);
        setTimeVal(null);
        setTimeToVal(null);

        setIsLoading(true);
        searchActivityLog(true);
        setIsSearched(false);
    }

    useEffect(() =>{
        if(isLoading){
            getActivityLog();
        }
            
        
    }, []);

  return (
    <>
        <AdminNavHeader toggleLogout={toggleLogout}/>
        <div style={{margin: "0 50px 0 50px"}}>
            <div className='content-header'>
                <b style={{marginRight: "10px", marginTop: "2px"}}>
                    <label>Admin User:</label> 
                </b>
                <input className='admin-input-search-AT' type="text" placeholder='Search Admin User'
                            style={{backgroundImage: <FontAwesomeIcon icon={faSearch}/>}}
                            value={inputSearch}
                            onChange={(text)=>{
                                handleOnChangeSearch(text);
                                
                            }}
                            ref={inputSearchRef}
                        />
                <div id='icon-text-cms'>
                    <b style={{marginRight: "10px", marginTop: "2px"}}>
                        <label for="action">Action:</label>
                    </b>
                    <select ref={actionRef} defaultValue="All" name="action" id="action" className="inputSO" 
                    style={{height: "25px", width: "200px"}}
                    onChange={onChangeAction}>
                        <option value="All">All</option>
                        <option value="Update">Update</option>
                        <option value="Delete">Delete</option>
                        <option value="Login">Login</option>
                        <option value="Logout">Logout</option>
                    </select>
                </div>
                   

                <div style={{marginLeft: "10px"}}>
                    <center><b>Date</b></center>
                    <div style={{display:"grid", justifyItems: 'flex-end'}}>
                        <div id='icon-text-cms'>
                            <b style={{marginRight: "10px", marginTop: "2px"}}>From: </b> <input ref={dateRef} className="inputSO" type="date"
                                style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeDate}/>
                        </div>
                        <div id='icon-text-cms'>
                            <b style={{marginRight: "10px", marginTop: "2px"}}>To: </b> <input ref={dateToRef} className="inputSO" type="date"
                                style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeToDate}/> 
                                {/* value={dateToVal}  */}
                        </div>
                    </div>
                    
                </div>
                
                <div style={{marginLeft: "10px"}}>
                    <center><b>Time</b></center>
                    <div style={{display:"grid", justifyItems: 'flex-end'}}>
                        <div id='icon-text-cms'>
                            <b style={{marginRight: "10px", marginTop: "2px"}}>From: </b> <input ref={timeRef} className="inputSO" type="time" 
                            style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeTime}/>
                        </div>
                        <div id='icon-text-cms'>
                            <b style={{marginRight: "10px", marginTop: "2px"}}>To: </b> <input ref={timeToRef} className="inputSO" type="time" 
                            style={{width: "100px", height: "25px", width: "150px"}} onChange={onChangeToTime}/>
                        </div>
                    </div>
                    
                </div>

                <div style={{display: isSearched ? "block" : "none",marginLeft: "10px"}}>
                    <button class="btn-admin-status" onClick={onClickClear}>
                            <FontAwesomeIcon icon={faXmarkCircle}/>
                    </button>
                </div>

            </div>

            <div className='content-member-table'>
                {isLoading ? (
                    <>
                        <LoadingSpinner/>
                    </>
                ):(
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

export default AdminAuditTrail