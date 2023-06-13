import React from 'react'

export default function Videos() {
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
                  <h5 className="box-title"><b>Kwentong-K | Serbisyong may Sinop at Sigla</b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/C-oo87xE8Yc" />
                  <h5 className="box-title"><b>KWENTONG 2021: KOOPERATIBANG may </b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/smFXr-FSsuQ" />
                  <h5 className="box-title"><b>Kwentong-K | K-COOP sa Panahon ng Pandemya</b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/wW-uvZqV12Y" />
                  <h5 className="box-title"><b>Project Karinderya</b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/JvEO6DIXRkk" />
                  <h5 className="box-title"><b>Don Bosco Scholars Batch 1</b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/B8hUu2mQ7-I" />
                  <h5 className="box-title"><b>Kwentong-K ni Nanay Raquel Jose | Sapang Palay Satellite Office</b></h5>
                  <embed width="100%" height={280} src="https://www.youtube.com/embed/ucx3czgXVqI" />
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
