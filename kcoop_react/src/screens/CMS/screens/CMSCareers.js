import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

// for passing props with outlet
import { useOutletContext } from "react-router-dom";

const CMSCareers = () => {
  const [User] = useOutletContext();
  const user = JSON.parse(User);
    
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const slideTitle = "Careers";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  const [fileName, setFileName] = useState("No selected file");
  const [showImage, setShowImage] = useState(null)
  const imgInputRef = useRef(null);

  const getWhoWeAre = () => {
    var InsertAPIURL = `${BASE_URL}/getCareersData/?format=json`;

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
        let data = response;
        setSliderData(data);
        //console.log("DATA Slider: ", data);

        let aSlider = [];
        let nSlider = [];
        {data.forEach(element => {
          if(element["Careers_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}

        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);
        //console.log(aSlider.length);
        

      }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const updateSlider = (id, status) => {
    var InsertAPIURL = `${BASE_URL}/updateCareersImage/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Careers_id: id, Careers_status: status, username: user[0].username};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
      .then(response => response.json())
      .then(response => {
        let data = response;
        setSliderData(data);
        //console.log("DATA Slider: ", data);

        let aSlider = [];
        let nSlider = [];
        {data.forEach(element => {
          if(element["Careers_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}
       
        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const DeactivateButton = (e, id) =>{
    let deactive = "Deactivated";
    //console.log(id);
    updateSlider(id,deactive);
    
    //window.location.reload(); 
  }

  const ActivateButton = (e, id) =>{
    //console.log(id);
    let activate = "Active";
    updateSlider(id,activate);
    
    //console.log(id)
    //window.location.reload(); 
  }

  function handleImage(e){
    setImageFile(e.target.files);
    setImage(e.target.files[0]);
    let imageName = e.target.files[0];
    //console.log(imageName);
    setShowImage(URL.createObjectURL(e.target.files[0]))
    setFileName(e.target.files[0].name)
    if(imageName){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
    
  }

  const onClickUpload = () =>{
    const formData = new FormData();
    formData.append('image', image);
    formData.append('username', user[0].username);

    axios.post(`${BASE_URL}/uploadCareersImage/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      let aSlider = [];
      let nSlider = [];
      {data.forEach(element => {
        if(element["Careers_status"] == "Active"){
          aSlider.push(element);
        }
        else{
          nSlider.push(element);
        }
      })}
      
      setActiveSlider(aSlider);
      setNotActiveSlider(nSlider);
    })
    setFileName("No selected File")
    setShowImage(null)
    setImage(null)

    setIsUploadDisable(true);
    imgInputRef.current.value = null;

  }
 
  const deleteSlider = (id) => {
    var InsertAPIURL = `${BASE_URL}/deleteCareersImage/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Careers_id: id, username: user[0].username};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
      .then(response => response.json())
      .then(response => {
        let data = response;
        setSliderData(data);
        //console.log("DATA Slider: ", data);

        let aSlider = [];
        let nSlider = [];
        {data.forEach(element => {
          if(element["Careers_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}
       
        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }
 
  const DeleteButton = (e, id) =>{
    var answer = window.confirm("Are you sure do you want to delete this image?");
    if (answer) {
      deleteSlider(id);
    }
    //window.location.reload(); 
  }

  useEffect(()=>{
    getWhoWeAre();
  },[])

  return (
    <>
    
    {sliderData ? (<>
      <div> 
        <center>
          <h1><b>{slideTitle}</b></h1>
        </center>
        <h3> Active Images </h3>
        
        {activeSlider.length <= 0 ? (<>
            <h4> No Deactivated Images </h4>
        </>):(<>
          <h5> </h5>
        </>)}
        <div>
        <div>
        <ul className='list-cms'>
          {activeSlider.map((item)=>{return(
              <>
                <li style={{padding: ".625em",textAlign: "center"}}>
                <figure className='figure-cms'>
                  <img src={item.Careers_image} style={{height: "115px", width: "180px"}}/>
                  <br/>
                  <center>
                      <b>
                          {item.file_name}
                      </b>
                  </center>
                  <button className='btn-cms'
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Careers_id)}
                  ><FontAwesomeIcon icon={faStop}/></button>
                  <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                  <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Careers_id)}><FontAwesomeIcon icon={faTrash}/></button>
                </figure>
                </li>
              </>
            )}
        
            )}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </div>
        <h3> Deactivated Images </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <ul className='list-cms'>
          {notActiveSlider.map((item)=>{
            return(
              <li style={{padding: ".625em",textAlign: "center"}}>
              <figure className='figure-cms'>
                <img src={item.Careers_image} style={{height: "115px", width: "180px"}}/>
                <br/>
                <center>
                      <b>
                          {item.file_name}
                      </b>
                  </center>
                <button className='btn-cms' style={{backgroundColor: 'green', color:'white'}} 
                onClick={e=>ActivateButton(e, item.Careers_id)}><FontAwesomeIcon icon={faPlay}/></button>
                <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                onClick={e=>DeleteButton(e, item.Careers_id)}><FontAwesomeIcon icon={faTrash}/></button>
              </figure>
              </li>
          )
          })}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </>):(<>
          <h4> No Deactivated Images </h4>
        </>)}
        <center>
          <h3>Add Image</h3>
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
              }}
              />
            </span>
          </div>
          <br/>
          <button className='btn-cms' style={{backgroundColor: !isUploadDisable ? 'rgb(0, 254, 254)' : 'rgb(102, 110, 110)', 
          color: !isUploadDisable ? 'black':'white', width: "100px"}} onClick={onClickUpload} disabled={isUploadDisable}>
            <FontAwesomeIcon icon={faUpload}/> Upload</button>
        </center>
        
      </div>
      </>) : (<>
        <LoadingSpinner/>
        </>)
    }

    </>
    
  )
}
export default CMSCareers;