import {React, useState, useEffect, useRef} from 'react';
import LoadingSpinner from '../../LoadingSpinner';
import { BASE_URL } from '../../../config';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

function CMSRegion3() {
    const pageTitle = "Region III";

    var [satalliteOfficesData, setSatalliteOfficesData] = useState([]);
    var [imagesSatalliteOffices, setImagesSatalliteOffices] = useState([{}]);
    var [cityArray, setCityArray] = useState([]);


    const [imageFile, setImageFile] = useState('');
    const [image, setImage] = useState('');
    const [isUploadDisable, setIsUploadDisable] = useState(true);

    const [fileName, setFileName] = useState("No selected file");
    const [showImage, setShowImage] = useState(null);
    const imgInputRef = useRef(null);
    const cityValue = useRef(null);
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
    setShowImage(URL.createObjectURL(e.target.files[0]))
    setFileName(e.target.files[0].name)
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

    setFileName("No selected File")
    setShowImage(null)
    setImage(null)

    setIsUploadDisable(true);
    imgInputRef.current.value = null;
    cityValue.current.value = null;

  }

  useEffect(()=>{
    getTBL_SatalliteOffices(pageTitle);
  },[])

  var deact_count = 0; 

  return (
    <>
    {satalliteOfficesData ? (<>
        <div> 
          <center>
            <h1><b>{pageTitle}</b></h1>
          </center> 
        
        
        {cityArray.map((item)=>(
            <>
            <br/>
            <h1>{item.City} </h1>
            
            {imagesSatalliteOffices.map((contentImage)=>(
                <>
                
                {item.City == contentImage.City ? (
                <>
                <h3> Active Images </h3>

                <ul className='list-cms'>

                    {contentImage['Images'].map((Images)=>(
                  <>
                    {Images["SatalliteOffices_status"] == "Active" ? (
                       
                      <li style={{padding: ".625em",textAlign: "center", border: "1px solid black"}}>
                      <figure className='figure-cms'>
                        <img src={Images["SatalliteOffices_image"]} style={{height: "auto", width: "100%", marginBottom: "2%"}}/>
                        <br/>
                        <button className='btn-cms'
                        style={{backgroundColor: 'red', color:'white'}} 
                        onClick={e=>DeactivateButton(e, Images["SatalliteOffices_id"])}
                        ><FontAwesomeIcon icon={faStop}/></button>
                        <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                        <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                        onClick={e=>DeleteButton(e, Images["SatalliteOffices_id"])}><FontAwesomeIcon icon={faTrash}/></button>
                      </figure>
                      </li>
                      ) : (<>
                          {(()=>{
                            // console.log(index);
                            // console.log("deact_count", deact_count);
                            // console.log("length", contentImage['Images'].length );
                            deact_count++;
                            if(deact_count==contentImage['Images'].length){
                              deact_count = 0;
                              return(<h4> No Activated Branch </h4>)
                            }

                          })()}
                      </>)}
                  </>
                ))}
                </ul>
                <br style={{clear:"both"}}/>
               
                  <h3> Deactivated Images </h3>
                  <ul className='list-cms'>
                      {contentImage['Images'].map((Images)=>(
                  <>
                    {Images["SatalliteOffices_status"] == "Deactivated" ? (
                         
                        <li style={{padding: ".625em",textAlign: "center", border: "1px solid black"}}>
                        <figure className='figure-cms'>
                          <img src={Images["SatalliteOffices_image"]} style={{height: "auto", width: "100%", marginBottom: "2%"}}/>
                          <br/>
                          <button className='btn-cms' style={{backgroundColor: 'green', color:'white'}} 
                          onClick={e=>ActivateButton(e, Images["SatalliteOffices_id"])}><FontAwesomeIcon icon={faPlay}/></button>
                          <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                          <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                          onClick={e=>DeleteButton(e, Images["SatalliteOffices_id"])}><FontAwesomeIcon icon={faTrash}/></button>
                        </figure>
                        </li>
                      ) : (<>
                          {(()=>{
                            // console.log(index);
                            // console.log("deact_count", deact_count);
                            // console.log("length", contentImage['Images'].length );
                            deact_count++;
                            if(deact_count==contentImage['Images'].length){
                              deact_count = 0;
                              return(<h4> No Deactivated Branch </h4>)
                            }

                          })()}
                      </>)}
                  </>
                ))}
                </ul>
                <br style={{clear:"both"}}/>
                
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
        
          <center>
            <h3>Add Image</h3>
            {/*<input className='image-input-cms' type="file" ref={imgInputRef} name="file" accept='image/*' onChange={handleImage}/>*/}
            <form className='form-cms'
            onClick={() => document.querySelector(".input-field").click()}
            >
              <input ref={imgInputRef} type="file" accept='image/*' className='input-field hidden-input' hidden 
              onChange={handleImage}
              />

              {showImage ?
              <img src={showImage} width={150} height={150} alt={fileName} />
              : 
              <>
              <MdCloudUpload color='#1475cf' size={60} />
              <p>Browse Files to upload</p>
              </>
            }

            </form>

            <div className='uploaded-row'>
              <AiFillFileImage color='#1475cf' />
              <span className='upload-content'>
                {fileName} - 
                <MdDelete
                style={{cursor: 'pointer'}}
                onClick={() => {
                  setFileName("No selected File")
                  setShowImage(null)
                  setImage(null)
                  setIsUploadDisable(true);
                  imgInputRef.current.value = null;
                  cityValue.current.value = null;
                }}
                />
              </span>
            </div>
            <br/>
            <div id="icon-text-cms">
              <label for="city" style={{marginRight: "10px", fontSize: "16px", marginTop: "5px"}}>Select City: </label>
              <input className="inputSO" type="text" list="city" ref={cityValue} onChange={selectOnChange}/>
              <datalist id="city">
                <option value="none" selected disabled hidden> </option>
                {cityArray.map((item)=>(
                  <option value={item.City}>{item.City}</option>
                ))}
              </datalist>
            </div>
            
            <button className='btn-cms' style={{backgroundColor: !isUploadDisable ? 'rgb(0, 254, 254)' : 'rgb(102, 110, 110)', 
            color: !isUploadDisable ? 'black': 'white', width: "100px", marginTop: "10px"}} 
            onClick={onClickUpload} disabled={isUploadDisable}><FontAwesomeIcon icon={faUpload}/> Upload</button>
          </center>
        
        </div>
    </>) : (<>
        <LoadingSpinner/>
    </>)}
    </>
    
  )
}

export default CMSRegion3