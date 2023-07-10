import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const CMSHome = () => {
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const slideTitle = "Image Slider";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isDisable, setIsDisable] = useState(false);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  
  const imgInputRef = useRef(null);

  const getSlider = (slideTitle) => {
    var InsertAPIURL = `${BASE_URL}/getHomeSlide/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Home_title: slideTitle}; // for kwentong -  k
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
          if(element["Home_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}

        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);
        //console.log(aSlider.length);
        if(aSlider.length<=2){
          setIsDisable(true);
        }
        else{
          setIsDisable(false);
        }

      }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const updateSlider = (title,id, status) => {
    var InsertAPIURL = `${BASE_URL}/updateHomeSlide/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      
      var DataBody = {Home_title: title, Home_id: id, Home_status: status};
      
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
          if(element["Home_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}
       
        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);

        if(aSlider.length<=2){
          setIsDisable(true);
        }
        else{
          setIsDisable(false);
        }

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const DeactivateButton = (e, id) =>{
    let deactive = "Deactivated";
    updateSlider(slideTitle,id,deactive);
    //console.log(e);
    //window.location.reload(); 
  }

  const ActivateButton = (e, id) =>{
    let activate = "Active";
    updateSlider(slideTitle,id,activate);
    //console.log(id)
    //window.location.reload(); 
  }

  function handleImage(e){
    setImageFile(e.target.files);
    setImage(e.target.files[0]);
    let imageName = e.target.files[0];
    //console.log(imageName);
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

    axios.post(`${BASE_URL}/uploadImage/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      let aSlider = [];
      let nSlider = [];
      {data.forEach(element => {
        if(element["Home_status"] == "Active"){
          aSlider.push(element);
        }
        else{
          nSlider.push(element);
        }
      })}
      
      setActiveSlider(aSlider);
      setNotActiveSlider(nSlider);
    })

    setIsUploadDisable(true);
    imgInputRef.current.value = null;

  }
  
  const deleteSlider = (title,id) => {
    var InsertAPIURL = `${BASE_URL}/deleteImage/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Home_title: title, Home_id: id};
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
          if(element["Home_status"] == "Active"){
            aSlider.push(element);
          }
          else{
            nSlider.push(element);
          }
        })}
       
        setActiveSlider(aSlider);
        setNotActiveSlider(nSlider);

        if(aSlider.length<=2){
          setIsDisable(true);
        }
        else{
          setIsDisable(false);
        }

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const DeleteButton = (e, id) =>{
    var answer = window.confirm("Are you sure do you want to delete this image?");
    if (answer) {
      deleteSlider(slideTitle,id);
    }
    //window.location.reload(); 
  }

  useEffect(()=>{
    getSlider(slideTitle);
  },[])

  return (
    <>
    {sliderData ? (<>
      <div> <p>HOMEEEEEEEEEEEEE</p>
        <h1>Image Slider </h1>
        <h3> Active Images </h3>
        
        {activeSlider.length <= 2 ? (<>
          <h5 style={{color: 'red'}}>Note: Active images must have atleast 2 images.</h5>
        </>):(<>
          <h5> </h5>
        </>)}
        <div>
        <div>
        <Table style={{tableLayout: "fixed", width: "auto !important"}}>
        <Tr style={{padding: ".35em"}}>
          {activeSlider.map((item)=>{return(
              <>
                <Td style={{padding: ".625em",textAlign: "center"}}>
                  <img src={item.Home_image} style={{height: "115px", width: "180px"}}/>
                  <br/>
                  <button
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Home_id)}
                  disabled={isDisable}
                  >Deactivate</button>
                  <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                  <button style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Home_id)}>Delete</button>
                </Td>
              </>
            )}
        
            )}
        </Tr>
        </Table>
        </div>
        </div>
        <h3> Deactivated Images </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <Table style={{tableLayout: "fixed", width: "auto !important"}}>
        <Tr style={{padding: ".35em"}}>
          {notActiveSlider.map((item)=>{
            return(
              <Td style={{padding: ".625em",textAlign: "center"}}>
                <img src={item.Home_image} style={{height: "115px", width: "180px"}}/>
                <br/>
                <button style={{backgroundColor: 'green', color:'white'}} onClick={e=>ActivateButton(e, item.Home_id)}>Activate</button>
                <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                <button style={{backgroundColor: 'black', color:'white'}} onClick={e=>DeleteButton(e, item.Home_id)}>Delete</button>
              </Td>
          )
          })}
        </Tr>
        </Table>
        </div>
        </>):(<>
          <h4> No Deactivated Images </h4>
        </>)}
        
        <h3>Add Image</h3>
        <input type="file" ref={imgInputRef} name="file" accept='image/*' onChange={handleImage}/>
        <button onClick={onClickUpload} disabled={isUploadDisable}>Upload</button>
      </div>
      </>) : (<>
        <LoadingSpinner/>
        </>)
    }
    </>
    
  )
}
export default CMSHome;