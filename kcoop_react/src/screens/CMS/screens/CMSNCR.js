import {React, useState, useEffect, useRef} from 'react';
import LoadingSpinner from '../../LoadingSpinner';
import { BASE_URL } from '../../../config';

function CMSNCR() {
    const pageTitle = "National Capital Region";

    const [activeSlider, setActiveSlider] = useState([]);

    const [notActiveSlider, setNotActiveSlider] = useState([]);


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
            //console.log("response: ", response);
            satalliteOfficesData = response;
            //console.log("DATA: ", HistoryData);
            setSatalliteOfficesData(satalliteOfficesData);
            refreshData(satalliteOfficesData);
            
            //console.log(Data);
          }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }

  const refreshData = (satalliteOfficesData) =>{
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
      //console.log("imagesSatalliteOffices: ", imagesSatalliteOffices);
      //console.log("imagesSatalliteOffices: ", imagesSatalliteOffices[1]["Images"][0]);
  }

  useEffect(()=>{
    getTBL_SatalliteOffices(pageTitle);
  },[])


  return (
    <>
    {satalliteOfficesData ? (<>
        <div> <p>NCR</p>
        
        
        {cityArray.map((item)=>(
            <>
            <h1>{item.City} </h1>
            
            {imagesSatalliteOffices.map((contentImage)=>(
                          <>
                          
                          {item.City == contentImage.City ? (
                          <>
                          <h3> Active Images </h3>
                             {contentImage['Images'].map((Images)=>(
                            <>
                              {Images["SatalliteOffices_status"] == "Active" ? (<>
                                  
                                  <img src={Images["SatalliteOffices_image"]} style={{height: "115px", width: "180px"}}/>
                                </>) : (<>
                                    <h3> Deactivated Images </h3>
                                    <img src={Images["SatalliteOffices_image"]} style={{height: "115px", width: "180px"}}/>
                                </>)}
                            </>
                          ))}
                            <h3> Deactivated Images </h3>
                                {contentImage['Images'].map((Images)=>(
                            <>
                              {Images["SatalliteOffices_status"] == "Deactivated" ? (<>
                                  
                                    <h3> Deactivated Images </h3>
                                    <img src={Images["SatalliteOffices_image"]} style={{height: "115px", width: "180px"}}/>
                                </>) : (<>
                                    
                                </>)}
                            </>
                          ))}
                          </>
                          ): 
                              (
                                <></>
                              )
                          }
                          </>
                        ))}
                      
                    
                  
            
            </>
        ))}
        
        
        </div>
    </>) : (<>
        <LoadingSpinner/>
    </>)}
    </>
    
  )
}

export default CMSNCR