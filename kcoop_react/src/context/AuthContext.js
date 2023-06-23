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
        }}>

        {children}
        </AuthContext.Provider>
    );
};