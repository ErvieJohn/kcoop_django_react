import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

var DATA = [];

export default function Announcements_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const navigate = useNavigate();

  const location = useLocation();

  const param = useParams();

  //console.log("PARAMS: ", param.id);

  var [selectedData, setSelectedData] = useState([]);

  //var selectedData = [];
  //const title = selectedData.title;
  //const publishedDate = selectedData.publishedDate;
  //const urlLink = selectedData.urlLink;
  //const ImgSrc = selectedData.ImgSrc;
  //const description = selectedData.description;

  const getAnnouncementData = () => {
    //console.log("READING?????????????????????????????????????????");
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_PublicationsID/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        //'Access-Control-Allow-Origin': '*'
      };

      var Data = {Publications_id: param.id};
      //console.log(JSON.stringify(Data));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);
          //console.log("DATA: ", response);
          selectedData = response[0];
          setSelectedData(selectedData);
          
        }).catch(error => {
          console.log(`ERROR: ${error}`)});
  }  
  
  
  useEffect(() => {
    getAnnouncementData();
    //console.log("selectedData: ", selectedData);
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
                <h2><b>
                    <FontAwesomeIcon icon={faNewspaper}/>
                    &nbsp;{selectedData.Publications_title}</b></h2>
                <b><i>&nbsp;{selectedData.Publications_pubDate}</i></b><br /><br />
                <div className="box box-warning " />
                

                  {(selectedData.Publications_image == "no_img.jpg") ? (<></>) : (
                      <div className="col-md-12">
                          <a href={selectedData.ImgSrc} target="_blank">
                              <img src={"/static/media/" + selectedData.Publications_image} width="100%" style={{marginBottom: '2%', marginLeft: '-1%'}} />
                          </a>
                      </div>
                  )}
              
                <div className="col-md-12">
                  {/*(selectedData.description.length > 0) ? (
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
                          __html: selectedData.description,
                        }}
                      ></p>
                    </div>
                      ):(<></>)*/ }

                  
                    
                  
                </div>
              </div>
                
              {/*<meta properly="og:title" content="sample" />*/}
              {/*<meta name="og:title" content="sample" />*/}
              {/*<meta properly="og:image" content="https://kcoop.org.ph/support/images/newsimg/Ate 20Anna.jpg" />*/}
              {/*  <img src="support/images/webimg/news_sample.jpg" style=" margin-left: 8%">  */}
              {/* /. box */}
              <div className="col-md-3 pull-right" style={{marginTop: '8.6%'}}>
                <div>
                  <div className="box box-warning">
                    <div className="box-header with-border">
                      <h3 className="box-title"><b>Other Announcements</b></h3>
                      <br />
                    </div>

                    {/*postOtherAnnouncements.map((content) => (
                      <div>
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
                              navigate("/announcements_readmore", {
                                state: {
                                  data: data,
                                  selectedNumber: content.announcements_id,
                                },
                              });
                            }}
                          
                          >
                          <h5 align="center"><b>{content.title}</b></h5>
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
                                  navigate("/announcements_readmore", {
                                    state: {
                                      data: data,
                                      selectedNumber: content.announcements_id,
                                    },
                                  });
                                }}
                              
                              >
                                  <img src={content.ImgSrc} width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} />
                              </a>
                          </span>
                          <div className="box box-warning " style={{marginTop: '5%'}} />
                      </div>
                              ))*/}
                    


                    
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
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
  </div>
  );
  
}
