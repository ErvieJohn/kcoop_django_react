import React, { useState, useEffect, useContext } from 'react';

import {AuthContext} from '../../context/AuthContext';

export default function Videos() {
  const {getAPI_Stories, 
    getStoriesAllData,} = useContext(AuthContext);  


  const titlePage = "Videos";

  useEffect(() => {
    getAPI_Stories(titlePage);
    //console.log(announcementsData);
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
                  {/*  */}

                  {getStoriesAllData.map((content)=>(
                    <>
                    {content.Stories_status == "Active" ? (<>
                      <h5 className="box-title"><b>{content.Stories_title}</b></h5>
                      <embed width="100%" height={280} src={content.Stories_ytlink} />
                    </>) : (<></>)}
                    </>
                  ))}
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
