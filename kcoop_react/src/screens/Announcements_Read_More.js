import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Announcements_Read_More() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //window.location.reload(false);
  const navigate = useNavigate();

  const param = useParams();

  const titlePage = "Announcements";
  const location = useLocation();
  const data = location.state.data;

  var [selectedData, setSelectedData] = useState([]);

  var [postOtherAnnouncementsArray, setpostOtherAnnouncementsArray] = useState([]);
  var [postOtherAnnouncements, setpostOtherAnnouncements] = useState([]);

  const getAnnouncementData = () => {
    postOtherAnnouncements = [];
    setpostOtherAnnouncements(postOtherAnnouncements);
    postOtherAnnouncementsArray = [];
    setpostOtherAnnouncementsArray(postOtherAnnouncementsArray);
    //console.log("READING?????????????????????????????????????????");
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_PublicationsID/`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',

        //'Access-Control-Allow-Origin': '*'
      };

      var DataBody = {Publications_id: param.id};
      //console.log(JSON.stringify(Data));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
         
          console.log("DATA: ", response);
          selectedData = response[0];
          setSelectedData(selectedData);
          console.log("is READING HERE?", selectedData);
          //console.log(selectedData.description.length);

          
          data.map((content)=>{
            if(content.Publications_id != selectedData.Publications_id){
              postOtherAnnouncementsArray.push(content);
              console.log(content, "THIS IS CONTENT");
            }
            
          });
          console.log(postOtherAnnouncementsArray);
          setpostOtherAnnouncementsArray(postOtherAnnouncementsArray);

          postOtherAnnouncements = postOtherAnnouncementsArray.filter(function (el) {
            return el != null;
          });

          var tempPostOther = [];
          var numPostOther = 5; // Can Change the number of Post Other Announcements
          if(postOtherAnnouncements.length > numPostOther){
            for(let i=0; i < numPostOther; i++){
              tempPostOther.push(postOtherAnnouncements[i]);
            }
          }

          postOtherAnnouncements = tempPostOther;
          setpostOtherAnnouncements(postOtherAnnouncements);

          
        }).catch(error => {
          console.log(`ERROR: ${error}`)});
    
  }  
  
  useEffect(() => {
    getAnnouncementData();
    //getAllAnnouncementsData();
    //window.location.reload(false);
  }, [data]);
  
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
                          <a href={"/static/media/" + selectedData.Publications_image}  target="_blank">
                              <img src={"/static/media/" + selectedData.Publications_image} width="100%" style={{marginBottom: '2%', marginLeft: '-1%'}} />
                          </a>
                      </div>
                  )}
              
                <div className="col-md-12">
                  
                      <div
                      style={{
                        textAlign: "justify",
                        whiteSpace: "pre-line",
                      }}
                    >
                      <p
                        //style={{
                        //  textIndent: "30px",
                        //}}
                        dangerouslySetInnerHTML={{
                          __html: selectedData.Publications_content,
                        }}
                      ></p>
                    </div>
                      

                  
                    
                  
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
                              //navigate(0);
                              navigate("/announcements/" + content.Publications_id, {
                                state: {
                                  data: data,
                                  selectedNumber: content.Publications_id,
                                },
                              });
                              
                            }}
                          
                          >
                          <h5 align="center"><b>{content.Publications_title}</b></h5>
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
                                  

                                  navigate("/announcements/" + content.Publications_id, {
                                    state: {
                                      data: data,
                                      selectedNumber: content.Publications_id,
                                    },
                                  });
                                  
                                }}
                              
                              >
                                  <img src={"/static/media/" + content.Publications_image} width="90%" style={{marginBottom: '2%', marginLeft: '5%'}} />
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
  
}
