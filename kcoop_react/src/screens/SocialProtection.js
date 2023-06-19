import React, {useEffect, useState} from 'react';

export default function SocialProtection() {
  var [Data, setData] = useState([]);
  var [images, setImages] = useState([]);
  const getData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getProgramsAndServices/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var titlePage = "Social Protection";
      var DataBody = {ProgramAndServices_title: titlePage};
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          Data = response;
          //console.log("DATA: ", HistoryData);
          setData(Data);
          let stringImage = Data.ProgramAndServices_image;
          images = stringImage.split(",");
          setImages(images);
          //console.log("DATA: ", History);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  var [ProgramsAndServicesLogo, setProgramsAndServicesLogo] = useState([]);
  const getProgramsAndServicesLogo = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getProgramsAndServicesLOGO/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      
      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          ProgramsAndServicesLogo = response;
          //console.log("DATA: ", HistoryData);
          setProgramsAndServicesLogo(ProgramsAndServicesLogo);

          //console.log("ProgramsAndServicesLogo: ", ProgramsAndServicesLogo);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  var [HeaderLogo, setHeaderLogo] = useState([]);

  const getHeaderLogo = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getProgramsAndServicesTitleLOGO/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var titlePage = "Programs & Services";
      var DataBody = {Header_name: titlePage};
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          HeaderLogo = response;
          //console.log("DATA: ", HistoryData);
          setHeaderLogo(HeaderLogo);

          //console.log("DATA: ", History);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }


  useEffect(() => {
    getData();
    getProgramsAndServicesLogo();
    getHeaderLogo();
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
                <div className="col-md-9">
                  <h2><img src={HeaderLogo.Header_logo} style={{width: '4.5%'}} />&nbsp;<b>{HeaderLogo.Header_name}</b></h2>
                  <br />
                  {/* <div class="box box-warning " style="margin-top:-1.8%;margin-bottom:1%"><div class="box-header with-border"><div class="col-md-1"><img src="support/images/progimg/peso.jpg" width = 50px alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-8" style="margin-left: 0%;margin-top: 2%"><h3 class="box-title"><b>&nbsp;Livelihood and Enterprise Development</b></h3></div></div></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/w1.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/kabuw2.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div><div class="col-md-12" style="margin-bottom:2%"><img src="support/images/prodimg/K-Trabaho.jpg" width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"></div> */}
                  <div className="box box-warning " style={{marginTop: '-1.8%', marginBottom: '1%'}}>
                    <div className="box-header with-border">
                      <div className="col-md-1"><img src={Data.ProgramAndServices_logo} width="50px" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                      <div className="col-md-8" style={{marginLeft: '0%', marginTop: '2%'}}>
                        <h3 className="box-title"><b>&nbsp;{Data.ProgramAndServices_title}</b></h3>
                      </div>
                    </div>
                  </div>
                  { images.map((content)=>(
                    <>
                      <div className="col-md-12" style={{marginBottom: '2%'}}><img src={content} width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                    </>
                    
                  ))

                  }
                  
                  {/* /. box */}
                </div>
                <div className="col-md-3 pull-right" style={{marginTop: '6.2%'}}>
                  {/* /. box */}
                  <div>
                    <div className="box box-warning">
                      <div className="box-header with-border">
                        <h3 className="box-title"><b>Other Programs And Services</b></h3>
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
    </div>
  )
}
