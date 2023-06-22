import {BASE_URL} from '../config';

import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    var [HistoryData, setHistoryData] = useState([]);
    

    const getHistoryData = (titlePage) => {
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
            HistoryData = response;
            //console.log("DATA: ", HistoryData);
            setHistoryData(HistoryData);
            //console.log("DATA: ", HistoryData);
            //console.log("DATA: ", History);
            }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

    

    return(
        <AuthContext.Provider
        value={{
            getHistoryData,

            HistoryData,
        }}>

        {children}
        </AuthContext.Provider>
    );
};