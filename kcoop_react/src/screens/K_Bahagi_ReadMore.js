import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from '../context/AuthContext';
import Error404 from './Error404';

export default function K_Bahagi_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const location = useLocation();

  const navigate = useNavigate();

  const param = useParams();

  const selectedNumber = param.id;

  const {dataStories,
    getStoriesDataID,
    getKwentongKData,
    kBahagiData,
    kwentongKData,
    getKBahagiData,
    postKwentongK,
    postKBahagi,
    postKGanapan,
    kGanapanData,
    getKGanapanData,
    storiesStatus,
} = useContext(AuthContext);

  const titlePage = "K - Bahagi";


    useEffect(() => {
      getStoriesDataID(selectedNumber);
      getKGanapanData();
      getKwentongKData();
      getKBahagiData();
      //console.log(announcementsData);
    }, [selectedNumber]);

  var data = [];
  

  //console.log("props: ", location.state);
  if (location.state) {
    data = location.state.data;

    
  } else {
    data = kBahagiData;
  }
  const postOtherKBahagiArray = [];
    let counted = 0;
    data.forEach((content)=>{
      if(counted < 3){
        if (dataStories.Stories_id !== content.Stories_id) {
          postOtherKBahagiArray.push(content);
          counted++;  
        }
      }
      else return;
      
    })
    //console.log("datazzzzz: ",postOtherKBahagiArray);
    const postOtherKBahagi = postOtherKBahagiArray.filter(function (el) {
        return el != null;
    });

    return (
      <>
        {storiesStatus === 200 ? (<>
          <div className="content-wrapper" style={{ minHeight: 705 }}>
            <div className="container">
              {/* Content Header (Page header) */}
              {/* Main content */}
              <section className="content">
                <div
                  className="box box-default"
                  style={{ left: "-5%", top: "-17px", width: "110%" }}
                >
                  {/* ariel  */}
                  <section className="content">
                    <div className="row" style={{ width: "98%", marginLeft: "1%" }}>
                      {/* /.col */}
                      <div className="col-md-9">
                        <h2>
                          <b>
                            <FontAwesomeIcon icon={faNewspaper} />
                            &nbsp;{dataStories.Stories_title}
                          </b>
                        </h2>
                        <b style={{ marginLeft: "5%" }}>
                          <i>&nbsp;{dataStories.Stories_date}</i>
                        </b>
                        <br />
                        <br />
                        <div className="box box-warning " />
                        <div className="col-md-12">
                          <a href={dataStories.Stories_image} target="_blank">
                            <img
                              src={dataStories.Stories_image}
                              width="100%"
                              style={{ marginBottom: "2%", marginLeft: "-1%" }}
                            />
                          </a>
                        </div>
                        <div className="col-md-12">
                          <div
                            style={{
                              textAlign: "justify",
                              whiteSpace: "pre-line",
                            }}
                          >
                            <p
                              style={{
                                textIndent: "30px",
                                wordWrap: "break-word",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: dataStories.Stories_content,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      
                      {/*  <img src="support/images/webimg/news_sample.jpg" style=" margin-left: 8%">  */}
                      {/* /. box */}
                      <div
                        className="col-md-3 pull-right"
                        style={{ marginTop: "8.6%" }}
                      >
                        <div>
                          <div className="box box-warning">
                            <div className="box-header with-border">
                              <h3 className="box-title">
                                <b>Other {titlePage}</b>
                              </h3>
                              <br />
                            </div>

                            {postOtherKBahagi.map((contentKBahagi) => (
                              <>
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
                                    navigate("/k_bahagi/" + contentKBahagi.Stories_id, {
                                      state: {
                                        data: data,
                                        selectedNumber: contentKBahagi.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                  <h5 align="center">
                                    <b>{contentKBahagi.Stories_title}</b>
                                  </h5>
                                </a>
                                <span>
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
                                      navigate("/k_bahagi/" + contentKBahagi.Stories_id, {
                                        state: {
                                          data: data,
                                          selectedNumber: contentKBahagi.Stories_id,
                                        },
                                      });
                                    }}
                                  >
                                    <img
                                      src={contentKBahagi.Stories_image}
                                      width="90%"
                                      style={{
                                        marginBottom: "2%",
                                        marginLeft: "5%",
                                      }}
                                    />
                                  </a>
                                </span>
                              </>
                            ))}

                            <div
                              className="box box-warning"
                              style={{ marginTop: "20%" }}
                            >
                              <div className="box-header with-border">
                                <h3 className="box-title">
                                  <b>K - Ganapan</b>
                                </h3>
                                <br />
                              </div>
                              {postKGanapan.map((contentKGanapan) => (
                                <>
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
                                    navigate(contentKGanapan.urlLink, {
                                      state: {
                                        data: kGanapanData,
                                        selectedNumber: contentKGanapan.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                    <h5 align="center">
                                      <b>{contentKGanapan.title}</b>
                                    </h5>
                                  </a>
                                  <span>
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
                                    navigate(contentKGanapan.urlLink, {
                                      state: {
                                        data: kGanapanData,
                                        selectedNumber: contentKGanapan.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                      <img
                                        src={contentKGanapan.imgSrc}
                                        width="90%"
                                        style={{
                                          marginBottom: "2%",
                                          marginLeft: "5%",
                                        }}
                                      />
                                    </a>
                                  </span>
                                </>
                              ))}
                            </div>

                            <div
                              className="box box-warning"
                              style={{ marginTop: "20%" }}
                            >
                              <div className="box-header with-border">
                                <h3 className="box-title">
                                  <b>Kwentong - K</b>
                                </h3>
                                <br />
                              </div>
                              {postKwentongK.map((contentKwentongK) => (
                                <>
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
                                    navigate(contentKwentongK.urlLink, {
                                      state: {
                                        data: kwentongKData,
                                        selectedNumber: contentKwentongK.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                    <h5 align="center">
                                      <b>{contentKwentongK.title}</b>
                                    </h5>
                                  </a>
                                  <span>
                                    
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
                                    navigate(contentKwentongK.urlLink, {
                                      state: {
                                        data: kwentongKData,
                                        selectedNumber: contentKwentongK.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                      <img
                                        src={contentKwentongK.imgSrc}
                                        width="90%"
                                        style={{
                                          marginBottom: "2%",
                                          marginLeft: "5%",
                                        }}
                                      />
                                    </a>
                                  </span>
                                </>
                              ))}
                            </div>

                          </div>
                          {/* /.col */}
                        </div>
                        {/* /.row */}
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
            {/* /.container */}
          </div>
        </>):(<>
          <Error404/>
        </>)}
      </>
      
    );
}
