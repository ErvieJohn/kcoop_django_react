import {React, useState, useEffect, useRef} from 'react';
import LoadingSpinner from '../../LoadingSpinner';
import { BASE_URL } from '../../../config';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import axios from 'axios';

function CMSRegion4A() {
    const pageTitle = "Region IV - A";

    var [satalliteOfficesData, setSatalliteOfficesData] = useState([]);
    var [imagesSatalliteOffices, setImagesSatalliteOffices] = useState([{}]);
    var [cityArray, setCityArray] = useState([]);


    const [imageFile, setImageFile] = useState('');
    const [image, setImage] = useState('');
    const [isUploadDisable, setIsUploadDisable] = useState(true);
    const imgInputRef = useRef(null);
    const [selectValue, setSelectValue] = useState("");

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
    let result = Object.values(satalliteOfficesData.reduce((c, {SatalliteOffices_city,SatalliteOffices_image, SatalliteOffices_status, SatalliteOffices_id}) => {
        c[SatalliteOffices_city] = c[SatalliteOffices_city] || {SatalliteOffices_city,SatalliteOffices_image: []};
        c[SatalliteOffices_city].SatalliteOffices_image = c[SatalliteOffices_city].SatalliteOffices_image.concat(Array.isArray(SatalliteOffices_image) ? {SatalliteOffices_image, SatalliteOffices_status, SatalliteOffices_id} : [{SatalliteOffices_image, SatalliteOffices_status, SatalliteOffices_id}]); 
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

  const updateImage = (region,id, status) => {
    var InsertAPIURL = `${BASE_URL}/updateSOImage/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {SatalliteOffices_region: region, SatalliteOffices_id: id, SatalliteOffices_status: status};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
      .then(response => response.json())
      .then(response => {
        satalliteOfficesData = response;
        //console.log("DATA: ", HistoryData);
        setSatalliteOfficesData(satalliteOfficesData);
        refreshData(satalliteOfficesData);

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const DeactivateButton = (e, id) =>{
    let deactive = "Deactivated";
    //console.log(id);
    updateImage(pageTitle,id,deactive);
    
    //window.location.reload(); 
  }

  const ActivateButton = (e, id) =>{
    //console.log(id);
    let activate = "Active";
    updateImage(pageTitle,id,activate);
    
    //console.log(id)
    //window.location.reload(); 
  }

  const deleteImage = (region,id) => {
    var InsertAPIURL = `${BASE_URL}/deleteSOImage/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {SatalliteOffices_region: region, SatalliteOffices_id: id};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
      .then(response => response.json())
      .then(response => {
        satalliteOfficesData = response;
        //console.log("DATA: ", HistoryData);
        setSatalliteOfficesData(satalliteOfficesData);
        refreshData(satalliteOfficesData);

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }
 
  const DeleteButton = (e, id) =>{
    var answer = window.confirm("Are you sure do you want to delete this image?");
    if (answer) {
      deleteImage(pageTitle,id);
    }
    //window.location.reload(); 
  }


  function handleImage(e){
    setImageFile(e.target.files);
    setImage(e.target.files[0]);
    let imageName = e.target.files[0];
    //console.log(imageName);
    if(imageName && (selectValue.length>0)){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
    
  }

  function selectOnChange(e){
    let selectedCity = e.target.value;
    setSelectValue(selectedCity);
    console.log(selectValue)
    if(image && (selectedCity.length>1)){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
  }

  const onClickUpload = () =>{
    const formData = new FormData();
    formData.append('image', image);
    formData.append('SatalliteOffices_region', pageTitle);
    formData.append('SatalliteOffices_city', selectValue);

    axios.post(`${BASE_URL}/uploadSOImage/`, formData).then((response)=>{
      //console.log(res);
      satalliteOfficesData = response.data;
      //console.log("DATA: ", HistoryData);
      setSatalliteOfficesData(satalliteOfficesData);
      refreshData(satalliteOfficesData);
    })

    setIsUploadDisable(true);
    imgInputRef.current.value = null;

  }

  useEffect(()=>{
    getTBL_SatalliteOffices(pageTitle);
  },[])


  return (
    <>
    {satalliteOfficesData ? (<>
        <div> <p>Region IV - A</p>
        
        
        {cityArray.map((item)=>(
            <>
            <h1>{item.City} </h1>
            
            {imagesSatalliteOffices.map((contentImage)=>(
                <>
                
                {item.City == contentImage.City ? (
                <>
                <h3> Active Images </h3>

                <Table style={{tableLayout: "fixed", width: "auto !important"}}>
                <Tr style={{padding: ".35em"}}>

                    {contentImage['Images'].map((Images)=>(
                  <>
                    {Images["SatalliteOffices_status"] == "Active" ? (
                       
                        <Td style={{padding: ".625em",textAlign: "center"}}>
                        <img src={Images["SatalliteOffices_image"]} style={{height: "220px", width: "340px"}}/>
                        <br/>
                        <button
                        style={{backgroundColor: 'red', color:'white'}} 
                        onClick={e=>DeactivateButton(e, Images["SatalliteOffices_id"])}
                        >Deactivate</button>
                        <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                        <button style={{backgroundColor: 'black', color:'white'}} 
                        onClick={e=>DeleteButton(e, Images["SatalliteOffices_id"])}>Delete</button>
                        </Td>
                      ) : (<>
                          
                      </>)}
                  </>
                ))}
                </Tr>
                </Table>
               
                  <h3> Deactivated Images </h3>
                  <Table style={{tableLayout: "fixed", width: "auto !important"}}>
                  <Tr style={{padding: ".35em"}}>
                      {contentImage['Images'].map((Images)=>(
                  <>
                    {Images["SatalliteOffices_status"] == "Deactivated" ? (
                         
                          <Td style={{padding: ".625em",textAlign: "center"}}>
                          <img src={Images["SatalliteOffices_image"]} style={{height: "220px", width: "340px"}}/>
                          <br/>
                          <button style={{backgroundColor: 'green', color:'white'}} onClick={e=>ActivateButton(e, Images["SatalliteOffices_id"])}>Activate</button>
                          <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                          <button style={{backgroundColor: 'black', color:'white'}} onClick={e=>DeleteButton(e, Images["SatalliteOffices_id"])}>Delete</button>
                          </Td>
                      ) : (<>
                          
                      </>)}
                  </>
                ))}
                </Tr>
                </Table>
                
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
        
        <h3>Add Image</h3>
        <input type="file" ref={imgInputRef} name="file" accept='image/*' onChange={handleImage}/>
        <label for="city">Select City: </label>
        <input type="text" list="city" onChange={selectOnChange}/>
        <datalist id="city">
          <option value="none" selected disabled hidden> </option>
          {cityArray.map((item)=>(
            <option value={item.City}>{item.City}</option>
          ))}
        </datalist>

        <button onClick={onClickUpload} disabled={isUploadDisable}>Upload</button>
        
        </div>
    </>) : (<>
        <LoadingSpinner/>
    </>)}
    </>
    
  )
}

export default CMSRegion4A