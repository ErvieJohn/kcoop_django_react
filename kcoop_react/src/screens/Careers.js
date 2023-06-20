import React, { useState, useEffect } from 'react';

export default function Careers() {
  const titlePage = "Careers";

  var [Data, setData] = useState([]);

  const getCareersData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getCareersData/?format=json`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      //var DataBody = {Stories_name: titlePage};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
        //body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          Data = response;
          setData(Data);
          //console.log("DATA: ", Data);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  

  useEffect(() => {
    getCareersData();
    //console.log(announcementsData);
  }, []);

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
                  <div>
                    <div className="box-header" style={{marginTop: '0%'}}>
                      {Data.map((content)=>(
                        <div className="box-body"><img src={"/static/media/" + content.Careers_content} style={{width: '100%', marginBottom: '5%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" />
                        </div>
                      ))}
                      
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
    </div>
  )
}
