import React, {useEffect, useState, useContext} from 'react';

import {AuthContext} from '../../context/AuthContext';


export default function HealthAndWellness() {
  const { getProgramsAndServices,
    getHeaderLogo,
    getProgramsAndServicesLogo,
    getProgramsAndServicesAllData, 
    ProgramsAndServicesLogo,
    HeaderLogo,
    logo,title,} = useContext(AuthContext);
  const titlePage = "Health and Wellness";


  useEffect(() => {
    getProgramsAndServices(titlePage);
    getProgramsAndServicesLogo(titlePage);
    getHeaderLogo();
    //console.log(announcementsData);
  }, []);

  return (
   
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-9">
                  <h2><img src={HeaderLogo.Header_logo} style={{width: '4.5%'}} />&nbsp;<b>{HeaderLogo.Header_name}</b></h2>
                  <br />
                  {/* <div class="box box-warning " style="margin-top:-1.8%;margin-bottom:1%"><div class="box-header with-border"><div class="col-md-1"><img src="support/images/progimg/cross.jpg" width = 50px alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-8" style="margin-left: 0%;margin-top: 2%"><h3 class="box-title"><b>&nbsp;Health and Wellness
                                 </b></h3></div></div></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww1.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww2.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww3.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww4.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww5.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/hww6.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/w7_2.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div> */}
                  <div className="box box-warning " style={{marginTop: '-1.8%', marginBottom: '1%'}}>
                    <div className="box-header with-border">
                      <div className="col-md-1"><img src={logo} width="50px" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                      <div className="col-md-8" style={{marginLeft: '0%', marginTop: '2%'}}>
                        <h3 className="box-title"><b>&nbsp;{title}
                          </b>
                        </h3>
                      </div>
                    </div>
                  </div>
                  { getProgramsAndServicesAllData.map((content)=>(
                    (content.ProgramAndServices_status == "Active") ? (
                      <>
                        <div className="col-md-12" style={{marginBottom: '2%'}}>
                          <img src={content.ProgramAndServices_image} width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                      </>
                    ) : (<></>)
                    
                    
                  ))

                  }
                  {/* /. box */}
                </div>
                <div className="col-md-3 pull-right" style={{marginTop: '6.2%'}}>
                  {/* /. box */}
                  <div>
                  <div className="box box-warning">
                      <div className="box-header with-border">
                        <h3 className="box-title"><b>Other {HeaderLogo.Header_name}</b></h3>
                        <br />
                      </div>
                      <div className="box-body no-padding" style={{marginLeft: '2%'}}>
                      {
                        ProgramsAndServicesLogo.map((content)=>(
                          <>
                            <a href={content.ProgramAndServicestype_url}><img src={content.ProgramAndServicestype_logoimage} width="85%" style={{marginBottom: '5%'}} /></a>
                          </>
                        ))
                        }
                      </div>
                    </div>
                    {/* /.box */}
                  </div>
                  {/* /.col */}
                </div>
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
