import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

const CMSVideos = () => {

  const slideTitle = "Videos";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  var [titleInput, setTitleInput] = useState("");
  var [dateInput, setDateInput] = useState("");
  var [ytInput, setYtInput] = useState("");

  const getTBL_Stories = (titlePage) => {
    var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`; 
      /* *****************ALWAYS CHECK THE API URL **************** */
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var DataBody = {Stories_name: titlePage};
      
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
            let data = response;
            setSliderData(data);
            console.log(data);
            refreshData(data);

        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  const updateSlider = (title,id, status) => {
    var InsertAPIURL = `${BASE_URL}/updateStoriesContent/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: title, Stories_id: id, Stories_status: status};
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
    let aSlider = [];
    let nSlider = [];
    {data.forEach(element => {
      if(element["Stories_status"] == "Active"){
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
    updateSlider(slideTitle,id,deactive);
    
  }

  const ActivateButton = (e, id) =>{
    let activate = "Active";
    updateSlider(slideTitle,id,activate);

  }

  const onClickUpload = () =>{
    const formData = new FormData();
    formData.append('Stories_name', slideTitle);
    formData.append('Stories_ytlink', ytInput);
    formData.append('Stories_title', titleInput);
    formData.append('Stories_date', dateInput);

    axios.post(`${BASE_URL}/uploadStoriesContent/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      refreshData(data);
    })

    setIsUploadDisable(true);

    setDateInput("");
    setTitleInput("");
    setYtInput("");

  }
 
  const deleteSlider = (title,id) => {
    var InsertAPIURL = `${BASE_URL}/deleteStoriesContent/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: title, Stories_id: id};
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
          if(element["Stories_status"] == "Active"){
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
    var answer = window.confirm("Are you sure do you want to delete this video?");
    if (answer) {
      deleteSlider(slideTitle,id);
    }
    //window.location.reload(); 
  }

  const titleOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    setTitleInput(output);
    
    if(ytInput.length > 0 && dateInput.length>0 && output.length > 0 ){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
  }

  const dateOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    
    setDateInput(output);

    if(ytInput.length > 0 && titleInput.length>0 && output.length > 0 ){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
  } 

  const ytOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    setYtInput(output);

    if(output.length > 0 && titleInput.length>0 && dateInput.length > 0 ){
        setIsUploadDisable(false);
    }
    else{
        setIsUploadDisable(true);
    }
  }

  useEffect(()=>{
    getTBL_Stories(slideTitle);
  },[])

  return (
    <>
    
    {sliderData ? (<>
      <div> 
        <center>
          <h1><b>{slideTitle}</b></h1>
        </center>
        
        <h3> Active Videos </h3>
        
        {activeSlider.length <= 0 ? (<>
            <h4> No Deactivated Videos </h4>
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
                    {/*<embed width="100%" height={90} src={item.Stories_ytlink} />*/}
                    <iframe width="100%" height={90} src={item.Stories_ytlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <br/>
                  <center>
                    <b>
                        {item.Stories_title}
                    </b>
                  </center>
                  <button className='btn-cms' 
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Stories_id)}
                  ><FontAwesomeIcon icon={faStop}/></button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button className='btn-cms'  style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Stories_id)}><FontAwesomeIcon icon={faTrash}/></button>
                </figure>
                </li>
              </>
            )}
        
            )}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </div>
        <h3> Deactivated Videos </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <ul className='list-cms'>
          {notActiveSlider.map((item)=>{
            return(
              <li style={{padding: ".625em",textAlign: "center"}}>
              <figure className='figure-cms'>
                {/*<embed width="100%" height={90} src={item.Stories_ytlink} />*/}
                <iframe width="100%" height={90} src={item.Stories_ytlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <center>
                  <b>
                      {item.Stories_title}
                  </b>
                </center>
                <br/>
                <button className='btn-cms'  style={{backgroundColor: 'green', color:'white'}} onClick={e=>ActivateButton(e, item.Stories_id)}><FontAwesomeIcon icon={faPlay}/></button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button className='btn-cms'  style={{backgroundColor: 'black', color:'white'}} onClick={e=>DeleteButton(e, item.Stories_id)}><FontAwesomeIcon icon={faTrash}/></button>
              </figure>
              </li>
          )
          })}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </>):(<>
          <h4> No Deactivated Videos </h4>
        </>)}
        
        <center>
          <h3>Add Video Story</h3>
          <b><label style={{fontSize: "16px", marginTop: "5px"}}>Title: </label>
            </b>
            <input className="inputSO" type="text" value={titleInput} onChange={titleOnChange}></input>
          <b><label style={{marginLeft: "10px", fontSize: "16px", marginTop: "5px"}}>Date: </label></b>
          <input className="inputSO" type="date" value={dateInput} onChange={dateOnChange}></input>
          <br/>
          <b><label style={{fontSize: "16px", marginTop: "5px"}}>Enter Video URL Link: </label></b>
            <input className="inputSO" type="text" value={ytInput} onChange={ytOnChange}></input>
          
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
export default CMSVideos;