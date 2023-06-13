import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function K_Ganap_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const location = useLocation();

  const navigate = useNavigate();

  //console.log("props: ", location.state);
  if (location.state) {
    const data = location.state.data;
    const selectedNumber = location.state.selectedNumber;

    const title = data[selectedNumber - 1].title;
    const publishedDate = data[selectedNumber - 1].publishedDate;
    const urlLink = data[selectedNumber - 1].urlLink;
    const imgSrc = data[selectedNumber - 1].imgSrc;
    const description = data[selectedNumber - 1].description;

    const postOtherKGanap = [];
    //var postOtherKGanapLen = postOtherKGanap.length;
    let i = 0;
    let counted = 0;
    let max = 3;
    if(data.length < 3){
        max = data.length;
    }

    while (counted < max) {
      // can change the max, if you like to display more K-Ganap Stories
      if (selectedNumber - 1 !== i) {
        postOtherKGanap.push(data[i]);
        counted++;
      }
      i++;
    }

    const postKwentongK = [
      {
        number: 1,
        title: "Kwentong K ni Nanay Hilyn Tambalong",
        imgSrc: "/static/media/Hilyn%20Tambalong-Meycauayan-Website.jpg",
        urlLink: "https://kcoop.org.ph/stories.php?nId=20&sId=1",
      },
      {
        number: 2,
        title: "My Covid-19 Journey (Sarah Jean Sarmiento)",
        imgSrc: "/static/media/Sarah%20Sarmiento.jpg",
        urlLink: "https://kcoop.org.ph/stories.php?nId=19&sId=3",
      },
      {
        number: 3,
        title: "BAKIT NANDITO PA RIN AKO?",
        imgSrc: "/static/media/K-Bahagi.jpg",
        urlLink: "https://kcoop.org.ph/stories.php?nId=26&sId=3",
      },
    ];

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
                        &nbsp;{title}
                      </b>
                    </h2>
                    <b style={{ marginLeft: "5%" }}>
                      <i>&nbsp;{publishedDate}</i>
                    </b>
                    <br />
                    <br />
                    <div className="box box-warning " />
                    <div className="col-md-12">
                      <a href={imgSrc} target="_blank">
                        <img
                          src={imgSrc}
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
                            __html: description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                  <meta properly="og:title" content="sample" />
                  <meta name="og:title" content="sample" />
                  <meta
                    properly="og:image"
                    content="https://kcoop.org.ph/support/images/newsimg/Ate 20Anna.jpg"
                  />
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
                            <b>Other K - Ganapan</b>
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
                                navigate("/k_ganap_readmore", {
                                  state: {
                                    data: data,
                                    selectedNumber: contentKGanap.number,
                                  },
                                });
                              }}
                            >
                              <h5 align="center">
                                <b>{contentKGanap.title}</b>
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
                                  navigate("/k_ganap_readmore", {
                                    state: {
                                      data: data,
                                      selectedNumber: contentKGanap.number,
                                    },
                                  });
                                }}
                              >
                                <img
                                  src={contentKGanap.imgSrc}
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
                              <a href={contentKwentongK.urlLink}>
                                <h5 align="center">
                                  <b>{contentKwentongK.title}</b>
                                </h5>
                              </a>
                              <span>
                                <a href={contentKwentongK.urlLink}>
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
