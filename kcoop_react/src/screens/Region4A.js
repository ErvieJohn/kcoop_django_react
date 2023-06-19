import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Region4A() {
  const titlePage = "Region IV - A";
  var [Data, setData] = useState([]);
  var [images, setImages] = useState([{}]);
  const getData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_SatalliteOffices/`; 
      /* *****************ALWAYS CHECK THE API URL **************** */
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {SatalliteOffices_region: titlePage};
      //console.log("DATA BODY", JSON.stringify(DataBody));
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

          //setImages(images);
          //console.log("DATA: ", History);
          
          var stringImage = [];
          var ArrayImage = [];
          var stringSplit;
          Data.map((data)=>{
            stringImage = data.SatalliteOffices_image;
            stringSplit = stringImage.split(",");
            ArrayImage.push({"City":data.SatalliteOffices_city,"Images":stringSplit});
          })
          images = ArrayImage;
          setImages(images);
          //console.log(images);
          
          //console.log(Data);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  useEffect(() => {
    getData();
    
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
                  <h2>
                    
                    <FontAwesomeIcon icon={faBuilding} /> 
                    &nbsp;<b>{titlePage}</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.8%', marginBottom: '2%'}}>
                    <div className="box-header with-border" />
                  </div>
                  
                  {
                  Data.map((content)=>(
                    <div className="box box-warning box-solid collapsed-box" style={{width: '100%', marginBottom: '3px'}}>
                      <div className="box-header with-border">
                        <h3 className="box-title"><b>{content.SatalliteOffices_city}</b></h3>
                        <div className="box-tools pull-right"><button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <FontAwesomeIcon icon={faPlus} /> 
                          </button></div>
                      </div>
                      <div className="box-body">
                        
                      {images.map((contentImage)=>(
                          <>
                          
                          {content.SatalliteOffices_city == contentImage.City ? (
                          <>
                             {contentImage['Images'].map((Images)=>(
                            <>
                            {console.log(content.SatalliteOffices_city,contentImage.SatalliteOffices_city)}
                              <div className="box box-warning" style={{width: '100%', marginBottom: '-5px'}}>
                                <div className="box-header with-border"><a href={"/static/media/" + Images} target="_blank"><img src={"/static/media/" + Images} style={{width: '70%', marginLeft: '15%', marginRight: '15%'}} alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></div>
                              </div>
                            </>
                          ))}
                          </>
                          ): 
                              (
                                <></>
                              )
                          }
                          </>
                        ))}
                      </div>
                    </div>
                  ))
                  }

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
