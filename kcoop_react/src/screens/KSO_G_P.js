import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function KSO_G_P() {
  var [Data, setData] = useState([]);

  const getData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getWhoWeAre/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var titlePage = "KSO GUIDING PRINCIPLES";
      var DataBody = {WhoWeAre_title: titlePage};
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

          //console.log("DATA: ", History);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  useEffect(() => {
    getData();
    
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
                  <h2><b>
                  <FontAwesomeIcon icon={faUserGroup} /> 
                     &nbsp;Who We Are</b></h2>
                  <br />
                  <div id={2} />
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{marginTop: '0%'}}>
                      <FontAwesomeIcon icon={faCircleDot} color='orange' size='1.5x'/> 
                        <h2 className="box-title"><b>&nbsp;{Data.WhoWeAre_title}</b></h2>
                        <div className="box-body" style={{marginLeft: '3%', marginRight: '3%'}}>
                      {
                          (Data.WhoWeAre_image != "/static/media/no_img.jpg") ? (
                            <>
                              <p><img alt="" src={Data.WhoWeAre_image} style={{height: '100%', width: '100%'}} /></p>
                            </>
                            
                          ) : (
                            <>
                                
                          
                            </>
                          )
                        }
                        
                        <p
                                
                                dangerouslySetInnerHTML={{
                                  __html:
                                  Data.WhoWeAre_content,
                                }}
                              ></p>
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
