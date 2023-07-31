import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BASE_URL } from '../../../config';
import axios from 'axios';
import { AuthContext } from "../../../context/AuthContext";
import LoadingSpinner from "../../LoadingSpinner";

import Error404 from "../../Error404";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHotkeys } from 'react-hotkeys-hook'

export const EditKwentong_K =  () => {
    const {dataStories,
        getStoriesDataID,
        storiesStatus,
    } = useContext(AuthContext);

  const param = useParams();
  const paramID = param.id;
  //console.log(param);
  //console.log(location.state);
  //const [data, setData] = useState(null);
  var data = null
 

  const pageTitle = "Kwentong - K";

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
    //console.log(titleInput);
    const domEditableElement = document.querySelector('.ck-editor__editable');
    // Get the editor instance from the editable element.
    const editorInstance = domEditableElement.ckeditorInstance;
    // Use the editor instance API.
    edited = editorInstance.getData();

    saveEdited(pageTitle, id, titleInput, dateInput, image, edited);

    setOldTitle(titleInput);
    setOldDate(dateInput);
    setText(edited);
    setOldText(edited);
    setOldImage(image);
    //console.log(image, showImage)
    if (typeof image === 'string' || image instanceof String){
      setShowImage(image);
    }
    else{
      setShowImage(URL.createObjectURL(image));
    }
    
    setIsEnable(true);
    setIsEnableUndo(true);

    imgInputRef.current.value = null;

    alert("Saved!");
  }
  
  const [exeOne, setExeOne] = useState(true);

  const saveEdited = (pageTitle, id, editedTitle, editedDate, editedImage, editedContent) => {

    const formData = new FormData();
    formData.append('Stories_id', id);
    formData.append('Stories_name', pageTitle);
    formData.append('Stories_image', editedImage);
    formData.append('Stories_date', editedDate);
    formData.append('Stories_title', editedTitle);
    formData.append('Stories_content', editedContent);
    formData.append('Stories_image', editedImage);

    axios.post(`${BASE_URL}/updateStoriesContent/`, formData).catch(error => {
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
    if (typeof oldImage === 'string' || oldImage instanceof String){
      setShowImage(oldImage);
    }
    else{
      setShowImage(URL.createObjectURL(oldImage));
    }
    setImage(oldImage);
    setIsEnableUndo(true);
    //setIsEnable(true);
    checkChanges();

    imgInputRef.current.value = null;
  }

  useEffect(() => {
    getStoriesDataID(paramID);
  }, [paramID]);

  data = dataStories;
  edit = data["Stories_content"];
  edited = edit;

  //console.log(data);
  if(exeOne && data.Stories_id){
    setExeOne(false);
    //console.log("Readme")
    //data = selectedData;
    //console.log("selectedData: ", selectedData);
    let ID = data.Stories_id;
    setId(ID);

    let title1 = data.Stories_title;
    setTitleInput(title1);
    
    let date1 = formatDate(data.Stories_date);
    setDateInput(date1);

    setOldTitle(title1);
    setOldDate(date1);
    setFirstOldText(edited);

    let oldImages = data.Stories_image;
    setOldImage(oldImages);
    setImage(oldImages);
    setShowImage(oldImages);
  }
  

  function checkChanges(){
    const domEditableElement = document.querySelector('.ck-editor__editable');
    // Get the editor instance from the editable element.
    const editorInstance = domEditableElement.ckeditorInstance;
    if(editorInstance.getData()==text){
      //disabled
      setIsEnable(true);
    }
    else if(editorInstance.getData() == oldText){
      //disabled
      setIsEnable(true);
    }
    else if(image!=oldImage){
      setIsEnable(false);
    }
    else{
      //enabled
      setIsEnable(false);
    }
  }

  return(
    <>
    {
      storiesStatus ? (<>
        {
        storiesStatus === 200 ? (<>
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
                      
                      checkChanges();
                    
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
          <Navigate replace to="/cms/kwentong_k" />
        </>)
      }
      </>) : (<>
        <LoadingSpinner/>
      </>)
    }
    
    </>
  );
  

};