import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BASE_URL } from '../../../../config';
import axios from 'axios';
import { AuthContext } from "../../../../context/AuthContext";
import LoadingSpinner from "../../../LoadingSpinner";

import Error404 from "../../../Error404";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHotkeys } from 'react-hotkeys-hook'

// for passing props with outlet
import { useOutletContext } from "react-router-dom";

export const EditAnnouncements =  () => {
  const [User] = useOutletContext();
  // const user = JSON.parse(User);

  const user = User;
  
  const [staff, setStaff] = useState(false);

  const {getAnnouncementDataID, 
    selectedData, announcementsStatus} = useContext(AuthContext);
  
    const getCmsStaff = (user) =>{
      var InsertAPIURL = `${BASE_URL}/getCmsStaff/`;
  
      var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        var DataBody = {username: user}; 
        //console.log("DataBody: ", DataBody);
        fetch(InsertAPIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(DataBody)
        })
        .then(response => response.json())
        .then(response => {
          let res = response;
  
          if(res.Staff){
              setStaff(true);
          }
          else{
              setStaff(false);
          }
          //console.log(res);
          //console.log(data);
  
        }).catch(error => {
            console.log(`getting data error from api url ${error}`)});
    }
  

  const param = useParams();
  const paramID = param.id;
  //console.log(param);
  //console.log(location.state);
  //const [data, setData] = useState(null);
  var data = null
 

  const pageTitle = "Announcements";

  var edit = "";
  var edited = "";

  var title = "";

  var date = "";

  const [isEnable, setIsEnable] = useState(true);

  const [text, setText] = useState("");
  const [executed, setExecuted] = useState(false);
  const [oldText, setOldText] = useState("");
  const [firstOldText, setFirstOldText] = useState("");

  const [id, setId] = useState("");


  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');
  const imgInputRef = useRef(null);
  const [oldImage, setOldImage] = useState();
  const [showImage, setShowImage] = useState();
 
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  var [titleInput, setTitleInput] = useState("");
  var [oldTitle, setOldTitle] = useState("");
  const titleOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    setTitleInput(output);
    //console.log(output);
    //console.log("title ", output, oldTitle);
    
    if(output == oldTitle){
      setIsEnable(true);
    }
    else{
      setIsEnable(false);
      
    }
  }
  
  var [dateInput, setDateInput] = useState("");
  var [oldDate, setOldDate] = useState("");
  const dateOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    //console.log("date ", output, oldDate);
    setDateInput(output);
    //console.log(output);
    
    if(output == oldDate){
      setIsEnable(true);
    }
    else{
      setIsEnable(false);
      
    }
  }

  useHotkeys('alt+s', (e) => {
    if(!isEnable){
      saveClicked();
    }
  }, [isEnable])
  
  const saveClicked = () =>{
    //console.log(edited);
    //console.log(dateInput);
    //console.log(image);
    alert("Saved!");

    saveEdited(pageTitle, id, titleInput, dateInput, image, edited);

    setOldTitle(titleInput);
    setOldDate(dateInput);
    setText(edited);
    setOldText(edited);
    setOldImage(image);
    
      // if(image != showImage){
      //   setShowImage(URL.createObjectURL(image));
      // }
    if (typeof image === 'string' || image instanceof String){
      setShowImage(image);
    }
    else{
      setShowImage(URL.createObjectURL(image));
    }
    //console.log(image, showImage)
    setIsEnable(true);
    setIsEnableUndo(true);

    imgInputRef.current.value = null;
  }
  
  const [exeOne, setExeOne] = useState(true);

  const saveEdited = (pageTitle, id, editedTitle, editedDate, editedImage, editedContent) => {

    const formData = new FormData();
    formData.append('Publications_id', id);
    formData.append('Publications_name', pageTitle);
    formData.append('Publications_image', editedImage);
    formData.append('Publications_pubDate', editedDate);
    formData.append('Publications_title', editedTitle);
    formData.append('Publications_content', editedContent);
    formData.append('Publications_image', editedImage);
    formData.append('username', user.username);

    axios.post(`${BASE_URL}/updatePubContent/`, formData).catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  const [isEnableUndo, setIsEnableUndo] = useState(true);

  function handleImage(e){
    setImageFile(e.target.files);
    setImage(e.target.files[0]);
    //console.log(e.target.result);
    setShowImage(URL.createObjectURL(e.target.files[0]));
    let imageName = e.target.files[0];
    //console.log(imageName);
    
    if(imageName){
      setIsEnable(false);
      setIsEnableUndo(false);
    }
    else{
      setIsEnable(true);
      setIsEnableUndo(true);
    }
    
  }

  function onUndoClicked  (){
    //console.log("oldImage",oldImage);
    //console.log(typeof oldImage === 'string')
    if (typeof oldImage === 'string' || oldImage instanceof String){
      setShowImage(oldImage);
    }
    else{
      setShowImage(URL.createObjectURL(oldImage));
    }
    
    
    setIsEnableUndo(true);
    setIsEnable(true);

    imgInputRef.current.value = null;
  }

  useEffect(() => {
    getCmsStaff(user.username);
    getAnnouncementDataID(paramID);
  }, [paramID]);

  data = selectedData;
  edit = data["Publications_content"];
  edited = edit;

  //console.log(data);
  if(exeOne && data.Publications_id){
    setExeOne(false);
    //console.log("Readme")
    //data = selectedData;
    //console.log("selectedData: ", selectedData);
    let ID = data.Publications_id;
    setId(ID);

    let title1 = data.Publications_title;
    setTitleInput(title1);
    
    let date1 = formatDate(data.Publications_pubDate);
    setDateInput(date1);

    setOldTitle(title1);
    setOldDate(date1);
    setFirstOldText(edited);

    let oldImages = data.Publications_image;
    setOldImage(oldImages);
    setImage(oldImages);
    setShowImage(oldImages);
  }
  

  return(
    <>
    {
      announcementsStatus ? (<>
        {
        announcementsStatus === 200 ? (<>
        {
          data ? (<>
            <center>
              <h1>Edit {pageTitle}</h1>
            </center>
            <br/>
            <center style={{paddingRight: "100px"}}>
              <div id="icon-text-cms" style={{width: "100%"}}>
                <b>
                <label style={{fontSize: "16px", marginRight: "10px"}}>Title:  </label>
                </b>
                <input className="inputSO" type="text" value={titleInput} onChange={titleOnChange}></input>
                <b><label style={{fontSize: "16px", marginLeft: "20px", marginRight: "10px"}}>Date:  </label></b>
                <input className="inputSO" type="date" value={dateInput} onChange={dateOnChange}></input>
              </div>
              <br/>
              
              <div id="icon-text-cms">
                
                <div>
                  <br/>
                  <div style={{width:"375px", maxWidth:"375px", height: "375px", maxHeight: "375px", display: "flex", 
                      position: "relative"}}>
                    <div style={{position: "absolute", top: "50%", transform: "translate(0, -50%)",
                      borderStyle: "dashed", borderColor: 'skyblue', padding: "10px 10px 10px 10px"}}>
                      <img src={showImage} style={{maxWidth: "100%", height: "auto"}} />
                    </div>
                  </div>

                  <br/>
                  <br/>
                  <div id="icon-text-cms">
                    <label style={{fontSize: "16px", marginRight: "20px"}}>Change Image: </label>
                    <input type="file" ref={imgInputRef} name="image" accept='image/*' onChange={handleImage}/>
                  </div>
                    <button className="btn-cms" style={{width:'100px', backgroundColor: !isEnableUndo ? 'rgb(199, 37, 78)': 'rgb(102, 110, 110)', 
                    color: !isEnableUndo ? 'black': 'white'}} 
                    onClick={onUndoClicked} disabled={isEnableUndo}><FontAwesomeIcon icon={faUndo}/> Undo</button>
                </div>
                
                <div id="desc-cms" style={{width: "500px", marginLeft: "50px"}}>
                  <label style={{fontSize: "16px"}}>Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data = {edit}

                    onChange={(event, editor) => {
                      
                      const dataEditor = editor.getData();
                      edited = dataEditor;
                      //console.log("dataEditor", dataEditor);
                      //console.log("oldText", edited, oldText);
                      //console.log("text", edited, text);
                      
                      if(edited==text){
                        //disabled
                        setIsEnable(true);
                      }
                      else if(edited == oldText){
                        //disabled
                        setIsEnable(true);
                      }
                      else{
                        //enabled
                        setIsEnable(false);
                      }
                    
                      if (!executed) {
                          setExecuted(true);
                          // do something
                          //disabled
                          setIsEnable(true);
                          //console.log("Executed");
                          setOldText(edited);
                      }
                      
                    }}
                  />
                </div>
              </div>
              <center id="icon-text-cms">
                <button className='btn-cms' onClick={saveClicked} style={{backgroundColor: !isEnable ? 'rgb(0, 254, 254)' : 
                'rgb(102, 110, 110)', color: !isEnable ? 'black':'white', width: "200px", marginTop: "15px"}} disabled={isEnable}>
                  <FontAwesomeIcon icon={faSave}/> SAVE</button>
                <div style={{marginLeft: "10px", marginTop: "10px"}}>
                  <h4>OR <code style={{color: !isEnable ? '#c7254e' :'rgb(102, 110, 110)'}}>ALT + S</code></h4>
                </div>
              </center>
              

            </center>
          </>) : (<>
          <LoadingSpinner/>
          </>)
        }
        
        </>) : (<>
          <Navigate replace to="/cms/announcements" />
        </>)
      }
      </>) : (<>
        <LoadingSpinner/>
      </>)
    }
    
    </>
  );
  

};