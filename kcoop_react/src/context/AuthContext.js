import {BASE_URL} from '../config';

import React, {createContext, useEffect, useState} from 'react';

import { Navigate } from "react-router-dom";

//import Error404 from "../screens/Error404";
//import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    //const navigate = useNavigate();

    var [getWhoWeAreData, setGetWhoWeAreData] = useState([]); // For Who We Are 
    
    var [WhoWeAre, setWhoWeAre] = useState([]); // FOR HEADER
    var [ProgramAndServices, setProgramAndServices] = useState([]);
    var [Headers, setHeaders] = useState([]);
    var [Stories, setStories] = useState([]);
    var [Publications, setPublications] = useState([]);
    var [SatalliteOfices, setSatalliteOfices] = useState([]);

    var [getProgramsAndServicesAllData, setGetProgramsAndServicesAllData] = useState([]); //For Programs And Services
    var [logo, setLogo] = useState([]);
    var [title, setTitle] = useState([]);

    const getHeadersData = () => {
        var InsertAPIURL = `${BASE_URL}/getTBL_Header/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            Headers = response;
            setHeaders(Headers);

            //console.log("DATA: ", Headers);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    const getWhoWeAreTypeData = () => {
        var InsertAPIURL = `${BASE_URL}/getWhoWeAreType/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            WhoWeAre = response;
            setWhoWeAre(WhoWeAre);

            //console.log("DATA: ", announcementsData[0].title);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    const getProgramsAndServicesData = () => {
        var InsertAPIURL = `${BASE_URL}/getProgramsAndServicesType/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            ProgramAndServices = response;
            setProgramAndServices(ProgramAndServices);

            //console.log("DATA: ", announcementsData[0].title);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    
    const getSatalliteOficesData = () => {
        var InsertAPIURL = `${BASE_URL}/getTBL_SatalliteOfficesType/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            SatalliteOfices = response;
            setSatalliteOfices(SatalliteOfices);

            //console.log("DATA: ", announcementsData[0].title);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    
    const getPublicationsData = () => {
        var InsertAPIURL = `${BASE_URL}/getTBL_PublicationsType/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            Publications = response;
            setPublications(Publications);

            //console.log("DATA: ", announcementsData[0].title);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    
    const getStoriesData = () => {
        var InsertAPIURL = `${BASE_URL}/getTBL_StoriesType/?format=json`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            Stories = response;
            setStories(Stories);

            //console.log("DATA: ", announcementsData[0].title);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    const getWhoWeAre = (titlePage) => {
        var InsertAPIURL = `${BASE_URL}/getWhoWeAre/`;

        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        var DataBody = {WhoWeAre_title: titlePage};
        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
        })
            .then(response => response.json())
            .then(response => {
            //console.log("response: ", response);
            getWhoWeAreData = response;
            //console.log("DATA: ", HistoryData);
            setGetWhoWeAreData(getWhoWeAreData);
            //console.log("DATA: ", HistoryData);
            //console.log("DATA: ", History);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    const getProgramsAndServices = (titlePage) => {
        var InsertAPIURL = `${BASE_URL}/getProgramsAndServices/`;
    
          var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          
          var DataBody = {ProgramAndServices_title: titlePage};
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              //console.log("response: ", response);
              getProgramsAndServicesAllData = response;
              //console.log("DATA: ", HistoryData);
              setGetProgramsAndServicesAllData(getProgramsAndServicesAllData);
    
              
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [ProgramsAndServicesLogo, setProgramsAndServicesLogo] = useState([]);
        const getProgramsAndServicesLogo = (titlePage) => {
            var InsertAPIURL = `${BASE_URL}/getProgramsAndServicesLOGO/`;

            var headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
            
            fetch(InsertAPIURL, {
                method: 'GET',
                headers: headers,
            })
                .then(response => response.json())
                .then(response => {
                //console.log("response: ", response);
                ProgramsAndServicesLogo = response;
                //console.log("DATA: ", HistoryData);
                setProgramsAndServicesLogo(ProgramsAndServicesLogo);

                ProgramsAndServicesLogo.map((content)=>{
                    if(titlePage==content.ProgramAndServicestype_name){
                    logo = content.ProgramAndServicestype_logo;
                    setLogo(logo);

                    title = content.ProgramAndServicestype_name;
                    setTitle(title);
                    }
                })
                //console.log(ProgramsAndServicesLogo, logo);

                //console.log("ProgramsAndServicesLogo: ", ProgramsAndServicesLogo);
                }).catch(error => {
                console.log(`getting data error from api url ${error}`)});
        }

      var [HeaderLogo, setHeaderLogo] = useState([]);

      const getHeaderLogo = () => {
        var InsertAPIURL = `${BASE_URL}/getProgramsAndServicesTitleLOGO/`;
    
          var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          var titlePage = "Programs & Services";
          var DataBody = {Header_name: titlePage};
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              //console.log("response: ", response);
              HeaderLogo = response;
              //console.log("DATA: ", HistoryData);
              setHeaderLogo(HeaderLogo);
    
              //console.log("DATA: ", History);
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [satalliteOfficesData, setSatalliteOfficesData] = useState([]);
      var [imagesSatalliteOffices, setImagesSatalliteOffices] = useState([{}]);
      var [cityArray, setCityArray] = useState([]);

      const getTBL_SatalliteOffices = (titlePage) => {
        var InsertAPIURL = `${BASE_URL}/getTBL_SatalliteOffices/`; 
          /* *****************ALWAYS CHECK THE API URL **************** */
          var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          //var pageTitle = "National Capital Region";
          var DataBody = {SatalliteOffices_region: titlePage};
          //console.log("DATA BODY", JSON.stringify(DataBody));
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              console.log("response: ", response);
              satalliteOfficesData = response;
              //console.log("DATA: ", HistoryData);
              setSatalliteOfficesData(satalliteOfficesData);
    
              let result = Object.values(satalliteOfficesData.reduce((c, {SatalliteOffices_city,SatalliteOffices_image, SatalliteOffices_status}) => {
                c[SatalliteOffices_city] = c[SatalliteOffices_city] || {SatalliteOffices_city,SatalliteOffices_image: []};
                c[SatalliteOffices_city].SatalliteOffices_image = c[SatalliteOffices_city].SatalliteOffices_image.concat(Array.isArray(SatalliteOffices_image) ? {SatalliteOffices_image, SatalliteOffices_status} : [{SatalliteOffices_image, SatalliteOffices_status}]); 
                return c;
              }, {}));
              //console.log("result:", result);

              var imagesArray = [];
              result.map((item)=>{
                imagesArray.push({"City":item.SatalliteOffices_city,"Images":item.SatalliteOffices_image});
              })

              //console.log("imagesArray: ", imagesArray[0]["Images"][0]);
              var stringImage = [];
              var ArrayImage = [];
              var stringSplit;
              imagesArray.map((data)=>{
                stringImage = data["Images"];
                //stringSplit = stringImage.split(",");
                ArrayImage.push({"City":data.City,"Images":stringImage});
              })

              imagesArray.sort(function(a, b){return b["Images"].length - a["Images"].length});
              cityArray = imagesArray;
              setCityArray(cityArray);
              //console.log("cityArray: ", cityArray);
              
              imagesSatalliteOffices = ArrayImage;
              setImagesSatalliteOffices(imagesSatalliteOffices);
              console.log("imagesSatalliteOffices: ", imagesSatalliteOffices);
              console.log("imagesSatalliteOffices: ", imagesSatalliteOffices[1]["Images"][0]);
              
              //console.log(Data);
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [publicationsData, setPublicationsData] = useState([]);
      const getTBL_Publications = (titlePage) => {
        var InsertAPIURL = `${BASE_URL}/getTBL_Publications/`; 
          /* *****************ALWAYS CHECK THE API URL **************** */
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
              let data = response;
              let dataActive = [];
              data.forEach(item=>{
                if(item["Publications_status"] == "Active"){
                  dataActive.push(item);
                }
              })

              publicationsData = dataActive;
              setPublicationsData(publicationsData);
              



            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [getStoriesAllData, setGetStoriesAllData] = useState([]);

      const getAPI_Stories = (titlePage) => {
        var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          //var pageTitle = "National Capital Region";
          var DataBody = {Stories_name: titlePage};
          //console.log("DATA BODY", JSON.stringify(DataBody));
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              getStoriesAllData = response;
              setGetStoriesAllData(getStoriesAllData);
              //console.log("DATA: ", getStoriesAllData);
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [getCareersAllData, setGetCareersAllData] = useState([]);
      const getCareersData = () => {
        var InsertAPIURL = `${BASE_URL}/getCareersData/?format=json`;
    
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          //var pageTitle = "National Capital Region";
          //var DataBody = {Stories_name: titlePage};
          //console.log("DATA BODY", JSON.stringify(DataBody));
          fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
            //body: JSON.stringify(DataBody)
          })
            .then(response => response.json())
            .then(response => {
              getCareersAllData = response;
              setGetCareersAllData(getCareersAllData);
              //console.log("DATA: ", Data);
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
      }

      var [selectedData, setSelectedData] = useState([]);
      var [announcementsStatus, setAnnouncementStatus] = useState();
    
      const getAnnouncementDataID = (id) => {
        
        //console.log("READING?????????????????????????????????????????");
        var InsertAPIURL = `${BASE_URL}/getTBL_PublicationsID/`;
    
          var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
    
            //'Access-Control-Allow-Origin': '*'
          };
    
          var DataBody = {Publications_id: id};
          //console.log(JSON.stringify(Data));
          fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataBody)
          })
            .then(response => {
              setAnnouncementStatus(response.status);
              if(response.ok){
                //console.log("response.status: ", response.status);
                
                return response.json();
              }
              else{
                
                return console.log("response.status: ", response.status);
              }
              })
            .then(response => {
              //console.log()
              selectedData = response[0];
              setSelectedData(selectedData);
              
            }).catch(error => {
              //console.log("RESPONSE: ", error);
              console.log(`ERROR: ${error}`)});
              //navigate('/*');
              
              //return <Error404/>;
        
      } 
      //////////////////////////////////////////
      var [dataStories, setDataStories] = useState([]);
      var [storiesStatus, setStoriesStatus] = useState();
      
      const getStoriesDataID = (selectedNumber) => {
        var InsertAPIURL = `${BASE_URL}/getTBL_StoriesID/`;
  
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
            .then(response => {
              setStoriesStatus(response.status);
              if(response.ok){
                //console.log("response.status: ", response.status);
                
                return response.json();
              }
              else{
                
                return console.log("response.status: ", response.status);
              }
              })
            .then(response => {
              dataStories = response[0];
              setDataStories(dataStories);
              //console.log("DATA11: ", Data);
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
              
      }
      

      var [kwentongKData, setKwentongKData] = useState([]);
      const getKwentongKData = () => {
        var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`;
  
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
        var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`;
  
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
        var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`;
  
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
      });

      

      var [homeData, setHomeData] = useState([]);

      var [HomeslideImages, setHomeslideImages] = useState([]);
      var [HomevisitCount, setHomevisitCount] = useState([]);
      var [Homeannouncements, setHomeannouncements] = useState([]);
      var [Homecontents, setHomecontents] = useState([]);

      var [HomewhoWeAre, setHomewhoWeAre] = useState([]);
      var [HomerightPart, setHomerightPart] = useState([]);
      var [Homevideo, setHomevideo] = useState([]);

      const getHomeData = () => {
        var InsertAPIURL = `${BASE_URL}/getHomeData/`;
  
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          //var pageTitle = "National Capital Region";
          //console.log("DATA BODY", JSON.stringify(DataBody));
          fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers
          })
            .then(response => response.json())
            .then(response => {
              homeData = response;
              setHomeData(homeData);

              homeData.map((item)=>{
                if(item.Home_title == "Image Slider"){
                  HomeslideImages.push(item);
                }
                else if (item.Home_title == "Visit Counter"){
                  HomevisitCount.push(item);
                }
                else if (item.Home_title == "Announcement"){
                  Homeannouncements.push(item);
                }
                
                else if (item.Home_title == "Content"){
                  Homecontents.push(item);
                }
                else if (item.Home_title == "Who We Are text 1"){
                  HomewhoWeAre.push(item);
                }
                else if (item.Home_title == "Who We Are"){
                  HomewhoWeAre.push(item);
                }
                else if (item.Home_title == "Who We Are text 2"){
                  HomewhoWeAre.push(item);
                }
                else if (item.Home_title == "Right Part"){
                  HomerightPart.push(item);
                }
                else if (item.Home_title == "Video"){
                  Homevideo.push(item);
                }
              });

              let ActiveImages = [];
              {HomeslideImages.forEach(element=>{
                if(element["Home_status"] == "Active"){
                  ActiveImages.push(element);
                }
              })
              }

              setHomeslideImages(ActiveImages);
              setHomevisitCount(HomevisitCount);
              setHomeannouncements(Homeannouncements);
              setHomecontents(Homecontents);
              setHomewhoWeAre(HomewhoWeAre);
              setHomerightPart(HomerightPart);
              setHomevideo(Homevideo);

              //console.log("HomeslideImages: ", Homevideo[0].Home_content);
              
            }).catch(error => {
              console.log(`getting data error from api url ${error}`)});
              
      }


      

    


    return(
        <AuthContext.Provider
        value={{
            getWhoWeAre,
            getWhoWeAreTypeData,
            getProgramsAndServicesData,
            getSatalliteOficesData,
            getPublicationsData,
            getStoriesData,
            getHeadersData,
            getWhoWeAreData, // for Who We Are
            WhoWeAre,
            ProgramAndServices,
            Headers,
            Stories,
            Publications,
            SatalliteOfices,

            getProgramsAndServices,
            getHeaderLogo,
            getProgramsAndServicesLogo,
            getProgramsAndServicesAllData, //For Programs And Services
            ProgramsAndServicesLogo,
            HeaderLogo,
            logo,title,


            getTBL_SatalliteOffices, // FOR SATALLITE OFFICES
            satalliteOfficesData,
            imagesSatalliteOffices,
            cityArray,


            getTBL_Publications, // FOR PUBLICATIONS
            publicationsData,

            getAPI_Stories, // FOR STORIES
            getStoriesAllData,
           

            getCareersData, // For Careers
            getCareersAllData,

            // FOR Announcements ID
            getAnnouncementDataID, 
            selectedData,

            announcementsStatus,

            // FOR Stories
            dataStories,
            getStoriesDataID,
            getKwentongKData,
            kBahagiData,
            kwentongKData,
            getKBahagiData,
            postKwentongK,
            postKBahagi,
            kGanapanData,
            getKGanapanData,
            postKGanapan,

            storiesStatus,

            // For Home
            getHomeData, 
            homeData,
            HomeslideImages,
            HomevisitCount,
            Homeannouncements,
            Homecontents,
            HomewhoWeAre,
            HomerightPart,
            Homevideo,

        }}>

        {children}
        </AuthContext.Provider>
    );
};