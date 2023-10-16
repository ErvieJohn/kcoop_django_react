import React, {useEffect, useState} from 'react'
import AdminNavHeader from '../../AdminNavHeader/AdminNavHeader';
import { useOutletContext } from 'react-router-dom';
import LoadingSpinner from '../../../../LoadingSpinner';
import jwt_decode from "jwt-decode";
import { BASE_URL } from '../../../../../config';
import ReactTable from 'react-table-6';

function MemberAuditTrail() {
    const [adminAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    const [toggleLogout] = useOutletContext();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    var columns = [];
    columns = [{  
            Header: 'Username',  
            accessor: 'MemberAuditTrail_user',
            sortable: true,
            maxWidth: 180,
            width: 180,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
        },
        {  
            Header: 'Action',  
            accessor: 'MemberAuditTrail_action',
            sortable: true,
            maxWidth: 180,
            width: 180,
            // Cell: row => (
            //     <div style={{ textAlign: "center" }}>{row.value}</div>
            //     )
        },
        {  
            Header: 'Activity',  
            accessor: 'MemberAuditTrail_activity',
            sortable: true,
            maxWidth: 400,
            width: 420,
            // Cell: row => (
            //     <div style={{ textAlign: "center" }}>{row.value}</div>
            //     )
        },{  
            Header: 'Date',  
            accessor: 'MemberAuditTrail_date',
            sortable: false,
            maxWidth: 180,
            width: 180,  
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
                )
        },{  
            Header: 'Time',  
            accessor: 'MemberAuditTrail_time',
            sortable: true,
            maxWidth: 220,
            width: 220,
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
            )
        }
    ];

    const getActivityLog = async() => {
        var InsertAPIURL = `${BASE_URL}/api/admin/memberActivityLog/`;
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

export default MemberAuditTrail