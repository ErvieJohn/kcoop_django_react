import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function KwentongK_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const location = useLocation();

  const navigate = useNavigate();

  const param = useParams();

  const selectedNumber = param.id;

  const titlePage = "Kwentong - K";

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
            console.log("DATA11: ", Data);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

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

    const postKGanapan = [];
    var counter = 0;
    kGanapanData.forEach((content)=>{
      if(counter < 3){
        postKGanapan.push({
        title: content.Stories_title,
        imgSrc: "/static/media/" + content.Stories_image,
        urlLink: "/k_ganap/" + content.Stories_id,});
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

    useEffect(() => {
      getStoriesDataID();
      getKBahagiData();
      getKGanapanData();
      //console.log(announcementsData);
    }, [selectedNumber]);


  //console.log("props: ", location.state);
  if (location.state) {
    const data = location.state.data;

    const postOtherKwentongK = [];
    let counted = 0;
    data.forEach((content)=>{
      if(counted < 3){
        if (Data.Stories_id !== content.Stories_id) {
          postOtherKwentongK.push(content);
          counted++;  
        }
      }
      else return;
      
  })

    

    /*
    let k = 0;
    let countedKwentongK = 0;
    const postKGanap = [];
    while (counted < 3) {
      // can change the 3, if you like to display more K-Ganap Stories
      if (selectedNumber - 1 != i) {
        postKGanap.push(data[i]);
        counted++;
      }
      i++;
    }
    */
    //console.log("postOtherKwentongK: ", postOtherKwentongK);

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

                        {postOtherKwentongK.map((contentKwentongK) => (
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
                                navigate("/kwentong_k/" + contentKwentongK.Stories_id, {
                                  state: {
                                    data: data,
                                    selectedNumber: contentKwentongK.Stories_id,
                                  },
                                });
                              }}
                            >
                              <h5 align="center">
                                <b>{contentKwentongK.Stories_title}</b>
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
                                  navigate("/kwentong_k/" + contentKwentongK.Stories_id, {
                                    state: {
                                      data: data,
                                      selectedNumber: contentKwentongK.Stories_id,
                                    },
                                  });
                                }}
                              >
                                <img
                                  src={"/static/media/" + contentKwentongK.Stories_image}
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
    return (
      <div className="content-wrapper" style={{ minHeight: "742px" }}>
        <div className="container">
          <section className="content">
            <div
              className="box box-default"
              style={{ left: "-5%", top: "-17.5px", width: "110%" }}
            >
              {/* ariel  */}
              <section className="content">
                <div className="row" style={{ width: "98%", marginLeft: "1%" }}>
                  {/* /.col */}
                  <div className="col-md-12 pull-left">
                    <div>
                      <div className="box box-warning ">
                        <div className="box-header" style={{ marginTop: "0%" }}>
                          <div>
                            <h1>404 Not Found</h1>
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
        </div>
      </div>
    );
  }
}
