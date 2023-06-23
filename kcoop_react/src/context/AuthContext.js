import {BASE_URL} from '../config';

import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
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
                console.log(ProgramsAndServicesLogo, logo);

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
              //console.log("response: ", response);
              satalliteOfficesData = response;
              //console.log("DATA: ", HistoryData);
              setSatalliteOfficesData(satalliteOfficesData);
    
              //setImages(images);
              //console.log("DATA: ", History);
              
              var stringImage = [];
              var ArrayImage = [];
              var stringSplit;
              satalliteOfficesData.map((data)=>{
                stringImage = data.SatalliteOffices_image;
                stringSplit = stringImage.split(",");
                ArrayImage.push({"City":data.SatalliteOffices_city,"Images":stringSplit});
              })
              imagesSatalliteOffices = ArrayImage;
              setImagesSatalliteOffices(imagesSatalliteOffices);
              //console.log(images);
              
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
              publicationsData = response;
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
              console.log("DATA: ", getStoriesAllData);
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
      var [postOtherAnnouncementsArray, setpostOtherAnnouncementsArray] = useState([]);
      var [postOtherAnnouncements, setpostOtherAnnouncements] = useState([]);

    
      const getAnnouncementDataID = (id, data) => {
        postOtherAnnouncements = [];
        setpostOtherAnnouncements(postOtherAnnouncements);
        postOtherAnnouncementsArray = [];
        setpostOtherAnnouncementsArray(postOtherAnnouncementsArray);
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
            .then(response => response.json())
            .then(response => {
             
              //console.log("DATA: ", response);
              selectedData = response[0];
              setSelectedData(selectedData);
              //console.log("is READING HERE?", selectedData);
              //console.log(selectedData.description.length);
    
              
              data.map((content)=>{
                if(content.Publications_id != selectedData.Publications_id){
                  postOtherAnnouncementsArray.push(content);
                  //console.log(content, "THIS IS CONTENT");
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
      //////////////////////////////////////////
      var [dataStories, setDataStories] = useState([]);
  
      
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
            .then(response => response.json())
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
      })

      

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


            getTBL_Publications, // FOR PUBLICATIONS
            publicationsData,

            getAPI_Stories, // FOR STORIES
            getStoriesAllData,
           

            getCareersData, // For Careers
            getCareersAllData,

            // FOR Announcements ID
            getAnnouncementDataID, 
            selectedData,
            postOtherAnnouncementsArray,
            postOtherAnnouncements,

            // FOR K_Ganapan READ MORE
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

        }}>

        {children}
        </AuthContext.Provider>
    );
};