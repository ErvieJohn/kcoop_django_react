import React, { useState, useEffect, useContext } from 'react';

import {AuthContext} from '../context/AuthContext';

export default function Careers() {
  const titlePage = "Careers";

  const {getCareersData, 
  getCareersAllData,} = useContext(AuthContext);

  useEffect(() => {
    getCareersData(titlePage);
    //console.log(announcementsData);
  }, []);

  return (
      <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17.5px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12 pull-left">
                  <div>
                    <div className="box-header" style={{marginTop: '0%'}}>
                    <div className="box-body">
                      {getCareersAllData.map((content)=>(
                        <>
                        {content.Careers_status == "Active" ? (<>
                          <div className="col-md-6" style={{marginLeft: '0%', marginBottom: '10px'}}>
                            <img src={content.Careers_image} style={{width: '100%', marginBottom: '5%'}} 
                            alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" />
                          </div>
                        </>) : (<></>)}
                        
                        </>
                        
                      ))}
                      </div>
                    </div>
                    {/* /. box */}
                  </div>
                  {/* /.box */}
                </div>
                {/* /.col */}
                {/* /.row */}
              </div>
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
  )
}
