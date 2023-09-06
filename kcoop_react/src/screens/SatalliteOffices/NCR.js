import React, {useEffect, useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';

import {AuthContext} from '../../context/AuthContext';

export default function NCR() {
  const titlePage = "National Capital Region";
  const {getTBL_SatalliteOffices,
    satalliteOfficesData,
    imagesSatalliteOffices,cityArray,} = useContext(AuthContext);
    
  
    useEffect(() => {
      getTBL_SatalliteOffices(titlePage);
      
    }, []);

  return (
    <div className="content-wrapper" style={{minHeight: '705px'}}>
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
                  {/*  */}
                  <h2>
                    
                    <FontAwesomeIcon icon={faBuilding} /> 
                    &nbsp;<b>{titlePage}</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.8%', marginBottom: '2%'}}>
                    <div className="box-header with-border" />
                  </div>
                  
                  {
                  cityArray.map((content)=>(
                    <div className="box box-warning box-solid collapsed-box" style={{width: '100%', marginBottom: '3px'}}>
                      <div className="box-header with-border">
                        <h3 className="box-title"><b>{content.City}</b></h3>
                        <div className="box-tools pull-right"><button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <FontAwesomeIcon icon={faPlus} /> 
                          </button></div>
                      </div>
                      <div className="box-body">
                        
                      {imagesSatalliteOffices.map((contentImage)=>(
                          <>
                          
                          {content.City == contentImage.City ? (
                          <>
                             {contentImage['Images'].map((Images)=>(
                            <>
                              <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                                {Images["SatalliteOffices_status"] == "Active" ? (<>
                                  <div className="box-header with-border"><a href={Images["SatalliteOffices_image"]} target="_blank"><img src={Images["SatalliteOffices_image"]} style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                                </>) : (<></>)}
                                
                              </div>
                            </>
                          ))}
                          </>
                          ): 
                              (
                                <></>
                              )
                          }
                          </>
                        ))}
                      </div>
                    </div>
                  ))
                  }

                </div>
                {/* /.box */}
              </div>
              {/* /.col */}
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
