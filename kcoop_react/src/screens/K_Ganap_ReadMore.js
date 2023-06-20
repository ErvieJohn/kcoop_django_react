import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function K_Ganap_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const location = useLocation();

  const navigate = useNavigate();

  const param = useParams();

  const selectedNumber = param.id;

  const titlePage = "K - Ganapan";

  var [Data, setData] = useState([]);

    const getStoriesDataID = () => {
      var InsertAPIURL = `http://127.0.0.1:8000/getTBL_StoriesID/`;

      var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {Stories_id: selectedNumber};
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(DataBody)
        })
          .then(response => response.json())
          .then(response => {
            Data = response[0];
            setData(Data);
            //console.log("DATA11: ", Data);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }
    
    var [kwentongKData, setKwentongKData] = useState([]);
    const getKwentongKData = () => {
      var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Stories/`;

      var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {Stories_name: "Kwentong - K"}; // for kwentong -  k
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(DataBody)
        })
          .then(response => response.json())
          .then(response => {
            kwentongKData = response;
            setKwentongKData(kwentongKData);
            //console.log("DATA11: ", kwentongKData);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    var [kBahagiData, setKBahagiData] = useState([]);
    const getKBahagiData = () => {
      var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Stories/`;

      var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {Stories_name: "K - Bahagi"}; // for k - bahagi
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(DataBody)
        })
          .then(response => response.json())
          .then(response => {
            kBahagiData = response;
            setKBahagiData(kBahagiData);
            //console.log("DATA11: ", kwentongKData);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    const postKwentongK = [];
    var counter = 0;
    kwentongKData.forEach((content)=>{
      if(counter < 3){
        postKwentongK.push({
        title: content.Stories_title,
        imgSrc: "/static/media/" + content.Stories_image,
        urlLink: "/kwentong_k/" + content.Stories_id,});
        counter++;
      }
      else return;
    })

    const postKBahagi = [];
    counter = 0;
    kBahagiData.forEach((content)=>{
      if(counter < 3){
        postKBahagi.push({
        title: content.Stories_title,
        imgSrc: "/static/media/" + content.Stories_image,
        urlLink: "/k_bahagi/" + content.Stories_id});
        counter++;
      }
      else return;
    })


    var [kGanapanData, setKGanapanData] = useState([]);
    const getKGanapanData = () => {
      var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Stories/`;

      var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        //var pageTitle = "National Capital Region";
        var DataBody = {Stories_name: "K - Ganapan"}; // for kwentong -  k
        //console.log("DATA BODY", JSON.stringify(DataBody));
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(DataBody)
        })
          .then(response => response.json())
          .then(response => {
            kGanapanData = response;
            setKGanapanData(kGanapanData);
            //console.log("DATA11: ", kwentongKData);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    
    useEffect(() => {
      getStoriesDataID();
      getKwentongKData();
      getKBahagiData();
      getKGanapanData();
      //console.log(announcementsData);
    }, [selectedNumber]);

  //console.log("props: ", location.state);
  if (location.state) {
    const data = location.state.data;

    const postOtherKGanap = [];
    let counted = 0;
    //var postOtherKGanapLen = postOtherKGanap.length;
    data.forEach((content)=>{
      if(counted < 3){
        if (Data.Stories_id !== content.Stories_id) {
          postOtherKGanap.push(content);
          counted++;  
        }
      }
      else return;
  })

    

    /*
    let k = 0;
    let countedKwentongK = 0;
    const postKwentongK = [];
    while (counted < 3) {
      // can change the 3, if you like to display more K-Ganap Stories
      if (selectedNumber - 1 != i) {
        postKwentongK.push(data[i]);
        counted++;
      }
      i++;
    }
    */
    //console.log("postOtherKGanap: ", postOtherKGanap);

    return (
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
                        &nbsp;{Data.Stories_title}
                      </b>
                    </h2>
                    <b style={{ marginLeft: "5%" }}>
                      <i>&nbsp;{Data.Stories_date}</i>
                    </b>
                    <br />
                    <br />
                    <div className="box box-warning " />
                    <div className="col-md-12">
                      <a href={"/static/media/" + Data.Stories_image} target="_blank">
                        <img
                          src={"/static/media/" + Data.Stories_image}
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
                          }}
                          dangerouslySetInnerHTML={{
                            __html: Data.Stories_content,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                  {/*<meta properly="og:title" content="sample" />
                  <meta name="og:title" content="sample" />
                  <meta
                    properly="og:image"
                    content="https://kcoop.org.ph/support/images/newsimg/Ate 20Anna.jpg"
                  />*/}
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

                        {postOtherKGanap.map((contentKGanap) => (
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
                                navigate("/k_ganap/" + contentKGanap.Stories_id, {
                                  state: {
                                    data: data,
                                    selectedNumber: contentKGanap.Stories_id,
                                  },
                                });
                              }}
                            >
                              <h5 align="center">
                                <b>{contentKGanap.Stories_title}</b>
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
                                  navigate("/k_ganap/" + contentKGanap.Stories_id, {
                                    state: {
                                      data: data,
                                      selectedNumber: contentKGanap.Stories_id,
                                    },
                                  });
                                }}
                              >
                                <img
                                  src={"/static/media/" + contentKGanap.Stories_image}
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

                        <div
                          className="box box-warning"
                          style={{ marginTop: "20%" }}
                        >
                          <div className="box-header with-border">
                            <h3 className="box-title">
                              <b>K - Bahagi</b>
                            </h3>
                            <br />
                          </div>
                          {postKBahagi.map((contentKBahagi) => (
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
                                navigate(contentKBahagi.urlLink, {
                                  state: {
                                    data: kBahagiData,
                                    selectedNumber: contentKBahagi.Stories_id,
                                  },
                                });
                              }}
                            >
                                <h5 align="center">
                                  <b>{contentKBahagi.title}</b>
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
                                navigate(contentKBahagi.urlLink, {
                                  state: {
                                    data: kBahagiData,
                                    selectedNumber: contentKBahagi.Stories_id,
                                  },
                                });
                              }}
                            >
                                  <img
                                    src={contentKBahagi.imgSrc}
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
    );
  } else {
    const data = kGanapanData;

    const postOtherKGanap = [];
    let counted = 0;
    //var postOtherKGanapLen = postOtherKGanap.length;
    data.forEach((content)=>{
      if(counted < 3){
        if (Data.Stories_id !== content.Stories_id) {
          postOtherKGanap.push(content);
          counted++;  
        }
      }
      else return;
  })
    return (
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
                        &nbsp;{Data.Stories_title}
                      </b>
                    </h2>
                    <b style={{ marginLeft: "5%" }}>
                      <i>&nbsp;{Data.Stories_date}</i>
                    </b>
                    <br />
                    <br />
                    <div className="box box-warning " />
                    <div className="col-md-12">
                      <a href={"/static/media/" + Data.Stories_image} target="_blank">
                        <img
                          src={"/static/media/" + Data.Stories_image}
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
                          }}
                          dangerouslySetInnerHTML={{
                            __html: Data.Stories_content,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                  {/*<meta properly="og:title" content="sample" />
                  <meta name="og:title" content="sample" />
                  <meta
                    properly="og:image"
                    content="https://kcoop.org.ph/support/images/newsimg/Ate 20Anna.jpg"
                  />*/}
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

                        {postOtherKGanap.map((contentKGanap) => (
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
                                navigate("/k_ganap/" + contentKGanap.Stories_id, {
                                  state: {
                                    data: data,
                                    selectedNumber: contentKGanap.Stories_id,
                                  },
                                });
                              }}
                            >
                              <h5 align="center">
                                <b>{contentKGanap.Stories_title}</b>
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
                                  navigate("/k_ganap/" + contentKGanap.Stories_id, {
                                    state: {
                                      data: data,
                                      selectedNumber: contentKGanap.Stories_id,
                                    },
                                  });
                                }}
                              >
                                <img
                                  src={"/static/media/" + contentKGanap.Stories_image}
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

                        <div
                          className="box box-warning"
                          style={{ marginTop: "20%" }}
                        >
                          <div className="box-header with-border">
                            <h3 className="box-title">
                              <b>K - Bahagi</b>
                            </h3>
                            <br />
                          </div>
                          {postKBahagi.map((contentKBahagi) => (
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
                                navigate(contentKBahagi.urlLink, {
                                  state: {
                                    data: kBahagiData,
                                    selectedNumber: contentKBahagi.Stories_id,
                                  },
                                });
                              }}
                            >
                                <h5 align="center">
                                  <b>{contentKBahagi.title}</b>
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
                                navigate(contentKBahagi.urlLink, {
                                  state: {
                                    data: kBahagiData,
                                    selectedNumber: contentKBahagi.Stories_id,
                                  },
                                });
                              }}
                            >
                                  <img
                                    src={contentKBahagi.imgSrc}
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
      
      
    );
  }
}
