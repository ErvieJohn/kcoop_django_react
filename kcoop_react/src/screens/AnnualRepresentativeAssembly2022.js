import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function AnnualRepresentativeAssembly2022() {
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
                <div className="col-md-9">
                  <h2><b>
                     <FontAwesomeIcon icon={faNewspaper}/>
                     &nbsp;2022 Annual Representative Assembly</b></h2>
                  <b><i>&nbsp;Mar-25-2022</i></b><br /><br />
                  <div className="box box-warning " />
                  <div className="col-md-12"><a href="/static/media/2022_RA.jpg" target="_blank"><img src="/static/media/2022_RA.jpg" width="100%" style={{marginBottom: '2%', marginLeft: '-1%'}} /></a></div>
                  <div className="col-md-12">
                    <p />
                  </div>
                </div>
                {/* <meta properly="og:title" content="sample" />*/}
                {/* <meta name="og:title" content="sample" />*/}
                {/* <meta properly="og:image" content="https://kcoop.org.ph/support/images/newsimg/Ate 20Anna.jpg" />*/}
                {/*  <img src="support/images/webimg/news_sample.jpg" style=" margin-left: 8%">  */}
                {/* /. box */}
                <div className="col-md-3 pull-right" style={{marginTop: '8.6%'}}>
                  <div>
                    <div className="box box-warning">
                      <div className="box-header with-border">
                        <h3 className="box-title"><b>Other Announcements</b></h3>
                        <br />
                      </div>
                      <a href="/go_bring_me">
                        <h5 align="center"><b>Go Bring Me</b></h5>
                      </a>
                      <span><a href="/go_bring_me"><img src="/static/media/GBM-Ads.png" width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} /></a></span>
                      <div className="box box-warning " style={{marginTop: '5%'}} />
                      <a href="/k_kalusugan_w3">
                        <h5 align="center"><b>K - KALUSUGAN W2</b></h5>
                      </a>
                      <span><a href="/k_kalusugan_w3"><img src="/static/media/Kalusugan 3_June2022.png" width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} /></a></span>
                      <div className="box box-warning " style={{marginTop: '5%'}} />
                      <a href="/k_bahay_w3">
                        <h5 align="center"><b>K - BAHAY W3</b></h5>
                      </a>
                      <span><a href="/k_bahay_w3"><img src="/static/media/K-Bahay W3_2022.png" width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} /></a></span>
                      <div className="box box-warning " style={{marginTop: '5%'}} />
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
              </div>
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
