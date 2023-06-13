import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function VMG() {
  return (
    <div className="content-wrapper" style={{minHeight: '427px'}}>
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
                  <div id={2} />
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{marginTop: '0%'}}>
                        <FontAwesomeIcon icon={faCircleDot} color='orange' size='1.5x'/>
                        <h2 className="box-title"><b>V M G</b></h2>
                        <div className="box-body" style={{marginLeft: '3%', marginRight: '3%'}}>
                          <p />
                          <p><img alt="" src="/static/media/Look.jpg" style={{height: '100%', width: '100%'}} /></p>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /. box */}
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
