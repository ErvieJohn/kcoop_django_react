import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function AnnualReports() {
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
                
                     &nbsp;Annual Reports</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.5%'}}> 
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href="/static/media/K-COOP_2021AnnualReport.pdf" target="_blank"><img src="/static/media/K-COOP_2021AnnualReport.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href="/static/media/K-COOP_4thAnnualReport.pdf" target="_blank"><img src="/static/media/K-COOP_4thAnnualReport.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href="/static/media/KCOOP_3rdAnnualReport.pdf" target="_blank"><img src="/static/media/3rd Annual Report.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href="/static/media/KCOOP2019AnnualReport.pdf" target="_blank"><img src="/static/media/KCOOP2019AnnualReport.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href="/static/media/annualreport2018.pdf" target="_blank"><img src="/static/media/annualreport2018.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
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
