import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { useNavigate, Link } from 'react-router-dom';

const CMSAnnouncements = () => {
  //window.location.reload();
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const slideTitle = "Announcements";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  const imgInputRef = useRef(null);

  const [selectedData, setSelectedData] = useState('');

  const navigate = useNavigate();

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
            setSliderData(data);
            //console.log(data);
            refreshData(data);

        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  const updateSlider = (title,id, status) => {
    var InsertAPIURL = `${BASE_URL}/updatePubContent/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Publications_name: title, Publications_id: id, Publications_status: status};
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
        
        refreshData(data);

      })
      .catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const refreshData = (data) =>{
    //console.log("DATA Slider: ", data);

    let aSlider = [];
    let nSlider = [];
    {data.forEach(element => {
      if(element["Publications_status"] == "Active"){
        aSlider.push(element);
      }
      else{
        nSlider.push(element);
      }
    })}
   
    setActiveSlider(aSlider);
    setNotActiveSlider(nSlider);
  }

  const DeactivateButton = (e, id) =>{
    let deactive = "Deactivated";
    //console.log(id);
    let titleStatus = "updateStatus";
    updateSlider(titleStatus,id,deactive);
    
    //window.location.reload(); 
  }

  const ActivateButton = (e, id) =>{
    //console.log(id);
    let activate = "Active";
    let titleStatus = "updateStatus";
    updateSlider(titleStatus,id,activate);
    
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
    formData.append('Publications_name', slideTitle);

    axios.post(`${BASE_URL}/uploadPubContent/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      refreshData(data);
    })

    setIsUploadDisable(true);
    imgInputRef.current.value = null;
  }
 
  const deleteSlider = (title,id) => {
    var InsertAPIURL = `${BASE_URL}/deletePubContent/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Publications_name: title, Publications_id: id};
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
          if(element["Publications_status"] == "Active"){
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
      deleteSlider(slideTitle,id);
    }
    //window.location.reload(); 
  }

  const EditButton = (e, data)=>{
    setSelectedData(data);
    
    navigate("edit", {
        state: {
          data: data,
        },
      });
      
      
     
  //window.open("#", '_blank', 'noopener,noreferrer');
    
  }

  useEffect(()=>{
    getTBL_Publications(slideTitle);
  },[])

  return (
    <>
    
    {sliderData ? (<>
      <div> <p>Annual Reports</p>
        <h1>Files </h1>
        <h3> Active Files </h3>
        
        {activeSlider.length <= 0 ? (<>
            <h4> No Deactivated Files </h4>
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
                  <img src={item.Publications_image} style={{height: "200px", width: "180px"}}/>
                  <br/>
                  <center>
                    <b>
                        {item.Publications_title}
                    </b>
                  </center>
                  <button
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Publications_id)}
                  >Deactivate</button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button style={{backgroundColor: 'blue', color:'white'}} onClick={e=>EditButton(e, item)}>Edit</button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Publications_id)}>Delete</button>
                </Td>
              </>
            )}
        
            )}
        </Tr>
        </Table>
        </div>
        </div>
        <h3> Deactivated Files </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <Table style={{tableLayout: "fixed", width: "auto !important"}}>
        <Tr style={{padding: ".35em"}}>
          {notActiveSlider.map((item)=>{
            return(
              <Td style={{padding: ".625em",textAlign: "center"}}>
                <img src={item.Publications_image} style={{height: "200px", width: "180px"}}/>
                <br/>
                <button style={{backgroundColor: 'green', color:'white'}} onClick={e=>ActivateButton(e, item.Publications_id)}>Activate</button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button style={{backgroundColor: 'blue', color:'white'}} onClick={e=>EditButton(e, item.Publications_id)}>Edit</button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button style={{backgroundColor: 'black', color:'white'}} onClick={e=>DeleteButton(e, item.Publications_id)}>Delete</button>
              </Td>
          )
          })}
        </Tr>
        </Table>
        </div>
        </>):(<>
          <h4> No Deactivated Files </h4>
        </>)}
        
        <h3>Add File</h3>
        <label>Select Image</label>
        <input type="file" ref={imgInputRef} name="image" accept='image/*' onChange={handleImage}/>
        <button onClick={onClickUpload} disabled={isUploadDisable}>Upload</button>
      </div>
      </>) : (<>
        <LoadingSpinner/>
        </>)
    }



    </>
    
  )
}
export default CMSAnnouncements;