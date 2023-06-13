import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function AuditedFinancialStatements() {
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
                    &nbsp;Audited Financial Statements</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.5%'}}> 
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/AuditedFs2022.pdf" target="_blank"><img src="/static/media/AuditedFs2022.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2022</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/AuditedFs2021.pdf" target="_blank"><img src="/static/media/AuditedFs2021.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2021</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/2020%20Audited%20Financial%20Statements.pdf" target="_blank"><img src="/static/media/2020 Audited Financial Statements.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2020</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/K-COOP%20Audited%20FS%202019_with%20BIR%20Stamp.pdf" target="_blank"><img src="/static/media/K-COOP Audited FS 2019_with BIR Stamp.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2019</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/AFS%202018.pdf" target="_blank"><img src="/static/media/FS2018cover.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2018</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/K-COOP%20Audted%20FS%202017.pdf" target="_blank"><img src="/static/media/K-COOP Audted FS 2017.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2017</b></center>
                    </span>
                  </div>
                  <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}>
                    <span>
                      <a href="/static/media/K-COOP%20Audited%20FS%202016.pdf" target="_blank"><img src="/static/media/K-COOP Audited FS 2016.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a>
                      <center><b>2016</b></center>
                    </span>
                  </div>
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
