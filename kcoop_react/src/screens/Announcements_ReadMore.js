import React, {useState} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Announcements_ReadMore() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const location = useLocation();

  const param = useParams();

  //console.log("PARAMS: ", param.id);

  const [data, setData] = useState([]);

  const getAnnouncementData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getAnnouncementData`;

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

        //'Access-Control-Allow-Origin': '*'
      };

      var Data = {id: param.id};
      //console.log(JSON.stringify(Data));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);

          setData(response);
          console.log("DATA: ", data);
        }).catch(error => {
          console.log(`ERROR: ${error}`)});
  }  

  getAnnouncementData();

  const navigate = useNavigate();

  //console.log("props: ", location.state);
  if (location.state) {
    const data = location.state.data;
    const selectedNumber = location.state.selectedNumber;

    //console.log("data: ",data);

    const title = data[selectedNumber - 1].title;
    
    
    const publishedDate = data[selectedNumber - 1].publishedDate;
    const urlLink = data[selectedNumber - 1].urlLink;
    const ImgSrc = data[selectedNumber - 1].ImgSrc;



    const description = data[selectedNumber - 1].description;

    const postOtherAnnouncementsArray = [];
    //var postOtherKBahagiLen = postOtherKBahagiArray.length;
    let i = 0;
    let counted = 0;
    var max = 3;
    if(data.length < 3){
        max = data.length;
    }
    
    //console.log("max: ", max, "datalen:", data.length );
    while (counted < max) {
      // can change the max, if you like to display more K-Ganap Stories
      if (selectedNumber - 1 !== i) {
        postOtherAnnouncementsArray.push(data[i]);
        counted++;
        //console.log(i);
      }
      i++;
    }

    const postOtherAnnouncements = postOtherAnnouncementsArray.filter(function (el) {
        return el != null;
      });
    //console.log("filteredlen: ", filtered.length);
    //console.log("postOtherKBahagi: ",postOtherKBahagi);
    

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
                     &nbsp;{title}</b></h2>
                  <b><i>&nbsp;{publishedDate}</i></b><br /><br />
                  <div className="box box-warning " />
                  

                    {(ImgSrc == "/static/media/no_img.jpg") ? (<></>) : (
                        <div className="col-md-12">
                            <a href={ImgSrc} target="_blank">
                                <img src={ImgSrc} width="100%" style={{marginBottom: '2%', marginLeft: '-1%'}} />
                            </a>
                        </div>
                    )}
                
                  <div className="col-md-12">
                    {(description.length > 0) ? (
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
                    ):(<></>) }

                    
                      
                    
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

                      {postOtherAnnouncements.map((content) => (
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
                                    selectedNumber: content.number,
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
                                        selectedNumber: content.number,
                                      },
                                    });
                                  }}
                                
                                >
                                    <img src={content.ImgSrc} width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} />
                                </a>
                            </span>
                            <div className="box box-warning " style={{marginTop: '5%'}} />
                        </div>
                      ))}
                      


                      
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
