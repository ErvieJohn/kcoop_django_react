import React, { useState, useEffect } from 'react';

export default function Videos() {
  const titlePage = "Videos";

  var [Data, setData] = useState([]);

  const getStoriesData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Stories/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: titlePage};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          Data = response;
          setData(Data);
          console.log("DATA: ", Data);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  

  useEffect(() => {
    getStoriesData();
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

                  {Data.map((content)=>(
                    <>
                      <h5 className="box-title"><b>{content.Stories_title}</b></h5>
                      <embed width="100%" height={280} src={content.Stories_ytlink} />
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
