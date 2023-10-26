import React, {useEffect, useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import {AuthContext} from '../../context/AuthContext';

export default function 
OrganizationalStructure() {
  const { getWhoWeAreData, getWhoWeAre} = useContext(AuthContext);

  const titlePage = "ORGANIZATIONAL STRUCTURE";

  

  useEffect(() => {
    getWhoWeAre(titlePage);
    
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
                  <h2><b>
                  <FontAwesomeIcon icon={faUserGroup} /> 
                   &nbsp;Who We Are</b></h2>
                  <br />
                  <div id />
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{marginTop: '0%'}}>
                      <FontAwesomeIcon icon={faCircleDot} color='orange' size='1.5x'/>
                        <h2 className="box-title"><b>&nbsp;{titlePage}</b></h2>
                        <div className="box-body" style={{marginLeft: '3%', marginRight: '3%'}}>
                        {
                            getWhoWeAreData.map((content)=>(
                              (content.WhoWeAre_status == "Active") ? (
                                (content.WhoWeAre_image != "no_img.jpg") ? (<img src={content.WhoWeAre_image} style={{width: '100%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" />) : 
                              (<></>)
                              ) : (<></>)
                              
                            ))
                          }
                          {
                            getWhoWeAreData.map((content)=>(
                              <p
                                          
                            dangerouslySetInnerHTML={{
                              __html:
                              content.WhoWeAre_content,
                            }}
                          ></p>
                            ))
                          }

                          
                          
                          
                          </div>

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
