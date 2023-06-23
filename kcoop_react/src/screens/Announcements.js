import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import {AuthContext} from '../context/AuthContext';

export default function Announcements() {
  const navigate = useNavigate();

  const {getTBL_Publications, 
    publicationsData,} = useContext(AuthContext);

  const titlePage = "Announcements";


  useEffect(() => {
    getTBL_Publications(titlePage);
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
                {publicationsData.map((content) => (
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
                                        data: publicationsData,
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
                                        data: publicationsData,
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
