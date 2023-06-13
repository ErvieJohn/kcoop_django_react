import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Region3() {
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
                  <h2>
                  <FontAwesomeIcon icon={faBuilding} /> 
                    &nbsp;<b>Region III</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.8%', marginBottom: '2%'}}>
                    <div className="box-header with-border" />
                  </div>
                  <div className="box box-warning box-solid collapsed-box" style={{width: '100%', marginBottom: '3px'}}>
                    <div className="box-header with-border">
                      <h3 className="box-title"><b>Bulacan</b></h3>
                      <div className="box-tools pull-right"><button type="button" className="btn btn-box-tool" data-widget="collapse">
                      <FontAwesomeIcon icon={faPlus} /> 
                        </button></div>
                    </div>
                    <div className="box-body">
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/baliuag2.jpg" target="_blank"><img src="/static/media/baliuag2.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Bocaue1.jpg" target="_blank"><img src="/static/media/Bocaue1.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Guiguinto.jpg" target="_blank"><img src="/static/media/Guiguinto.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Meyca2.jpg" target="_blank"><img src="/static/media/Meyca2.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Pulilan.jpg" target="_blank"><img src="/static/media/Pulilan.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Norza2.jpg" target="_blank"><img src="/static/media/Norza2.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Sapang Palay SatO.jpg" target="_blank"><img src="/static/media/Sapang Palay SatO.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                      <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                        <div className="box-header with-border"><a href="/static/media/Tubgko SatO.jpg" target="_blank"><img src="/static/media/Tubgko SatO.jpg" style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                      </div>
                    </div>
                  </div>
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
