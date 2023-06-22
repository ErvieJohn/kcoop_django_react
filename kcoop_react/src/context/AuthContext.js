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

            getWhoWeAreData,
            WhoWeAre,
            ProgramAndServices,
            Headers,
            Stories,
            Publications,
            SatalliteOfices,
        }}>

        {children}
        </AuthContext.Provider>
    );
};