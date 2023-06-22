import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../config';

export default function Announcements() {
  const navigate = useNavigate();

  const titlePage = "Announcements";

  var [Data, setData] = useState([]);

  const getAnnouncementsData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Publications/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Publications_name: titlePage};
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
    getAnnouncementsData();
    //console.log(announcementsData);
  }, []);

  return (
    <div className="content-wrapper" style={{minHeight: '443px'}}>
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
                     &nbsp;{titlePage}</b></h2>
                  <br />
                <div className="box box-warning " style={{marginTop: '-1.5%'}} />
                {Data.map((content) => (
                  <table style={{marginTop: '2%'}}>
                    <tbody>
                      <tr>
                        <td>
                          <div className="col-md-6"><img src={"/static/media/" + content.Publications_image} width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                          <div className="col-md-6">
                            <h4><a 
                                  style={{
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                    WebkitUserSelect: "none",
                                    KhtmlUserSelect: "none",
                                    MozUserSelect: "none",
                                    msUserSelect: "none",
                                    userSelect: "none",
                                  }}
                                  onClick={() => {
                                    navigate("/announcements/" + content.Publications_id, {
                                      state: {
                                        data: Data,
                                        selectedNumber: content.Publications_id,
                                      },
                                    });
                                  }}
                            ><b>{content.Publications_title}</b></a></h4>
                            <h6><b><i>{content.Publications_pubDate}</i></b></h6>


                            {/*<p style={{marginLeft: '0%', fontSize: 'small'}}><a href="/go_bring_me">View full details ....</a></p>*/}
                            
                            <div
                                style={{
                                  textAlign: "justify",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {(content.Publications_content.length > 0) ? (<p
                                  //style={{
                                  //  textIndent: "30px",
                                  //}}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                    
                                      content.Publications_content.substring(0, 200) +
                                      `...`,
                                  }}
                                ></p>) : (<></>)}
                                
                                {/* 
                                <Link
                                  to={{
                                    pathname: "/k_ganap_readmore",
                                    state: { data: "erviepogi" },
                                  }}
                                >
                                  Read More
                                </Link>
*/}

                                <a
                                  style={{
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                    WebkitUserSelect: "none",
                                    KhtmlUserSelect: "none",
                                    MozUserSelect: "none",
                                    msUserSelect: "none",
                                    userSelect: "none",
                                  }}
                                  onClick={() => {
                                    navigate("/announcements/" + content.Publications_id, {
                                      state: {
                                        data: Data,
                                        selectedNumber: content.Publications_id,
                                      },
                                    });
                                  }}
                                >
                                  View full details
                                </a>
                              </div>

                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
                  
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
