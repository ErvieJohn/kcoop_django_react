import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BASE_URL } from '../../../config';
import axios from 'axios';
import { AuthContext } from "../../../context/AuthContext";
import LoadingSpinner from "../../LoadingSpinner";

import Error404 from "../../Error404";

export const EditK_Ganapan =  () => {
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
 

  const pageTitle = "K - Ganapan";

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
  
  const saveClicked = () =>{
    //console.log(edited);
    //console.log(dateInput);
    //console.log(titleInput);
    
    saveEdited(pageTitle, id, titleInput, dateInput, image, edited);

    setOldTitle(titleInput);
    setOldDate(dateInput);
    setText(edited);
    setOldText(edited);
    setOldImage(image);
    //console.log(image, showImage)
    if(image != showImage){
      setShowImage(URL.createObjectURL(image));
    }
    
    setIsEnable(true);
    setIsEnableUndo(true);

    imgInputRef.current.value = null;
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
    setShowImage(oldImage);
    setIsEnableUndo(true);
    setIsEnable(true);

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
  

  return(
    <>
    {
      storiesStatus ? (<>
        {
        storiesStatus === 200 ? (<>
        {
          data ? (<>
            <h1>Edit K - Ganapan</h1>
            <center>
              <b>
                  <label>Title: </label>
                  </b>
                  <input type="text" value={titleInput} onChange={titleOnChange}></input>
              <b><label>Date: </label></b>
                <input type="date" value={dateInput} onChange={dateOnChange}></input>
              <br /><br />
              
              <div className="box box-warning " />

                <img src={showImage} width="50%" height="50%"/>
                <br/>
                <label>Change Image: </label>
                <input type="file" ref={imgInputRef} name="image" accept='image/*' onChange={handleImage}/>
                <button onClick={onUndoClicked} disabled={isEnableUndo}>UNDO</button>
                <CKEditor
                editor={ClassicEditor}
                data = {edit}

                onChange={(event, editor) => {
                  
                  const dataEditor = editor.getData();
                  edited = dataEditor;

                  //console.log(firstOldText);
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
                
                  if (!executed) {//&& firstOldText.length>0) {
                      setExecuted(true);
                      // do something
                      //disabled
                      setIsEnable(true);
                      //console.log("Executed");
                      setOldText(edited);
                  }
                  
                }}
              />
              <br/>
              <button onClick={saveClicked} disabled={isEnable}>SAVE</button>
            </center>
          </>) : (<>
          <LoadingSpinner/>
          </>)
        }
        
        </>) : (<>
          <Navigate replace to="/cms/k_ganapan" />
        </>)
      }
      </>) : (<>
        <LoadingSpinner/>
      </>)
    }
    
    </>
  );
  

};