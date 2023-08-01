import React, {useState, useEffect, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import {AuthContext} from '../../context/AuthContext';

export default function ByTheNumbers() {
  const titlePage = "By The Numbers";
  const {getTBL_Publications, 
  publicationsData,} = useContext(AuthContext);
  
  
  useEffect(() => {
    getTBL_Publications(titlePage);
    
  }, []);


  return (
    <div className="content-wrapper" style={{minHeight: '427px'}}>
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12">
                  <h2><b>
                  <FontAwesomeIcon icon={faNewspaper}/>
                   &nbsp;{titlePage}</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.5%'}}> 
                  </div>

                  {publicationsData.map((content)=>(
                    <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                      {content["Publications_status"] == "Active" ? (<>
                            <span><a href={content.Publications_file} target="_blank">
                              <img src={content.Publications_image} width="100%" 
                              alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                            </span>
                          </>):(<></>)}
                    </div>
                  ))}

                  {/* /. box */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}
