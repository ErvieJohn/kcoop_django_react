import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { useNavigate, Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlay, faStop, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

// for passing props with outlet
import { useOutletContext } from "react-router-dom";

const CMSK_Bahagi = () => {
  const [User] = useOutletContext();
  // const user = JSON.parse(User);

  const user = User;
  
  const [staff, setStaff] = useState(false);

  //window.location.reload();
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const slideTitle = "K - Bahagi";

  const edit = "";
  const [edited, setEdited] = useState("");

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  const [fileName, setFileName] = useState("No selected file");
  const [showImage, setShowImage] = useState(null);
  const imgInputRef = useRef(null);

  const [selectedData, setSelectedData] = useState('');

  var [titleInput, setTitleInput] = useState("");
  var [dateInput, setDateInput] = useState("");

  const navigate = useNavigate();

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

  const getTBL_Stories = (titlePage) => {
    var InsertAPIURL = `${BASE_URL}/getTBL_Stories/`; 
      /* *****************ALWAYS CHECK THE API URL **************** */
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: titlePage};
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
    var InsertAPIURL = `${BASE_URL}/updateStoriesStatus/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: title, Stories_id: id, Stories_status: status, username: user.username, staff: staff};
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
    //console.log(id);
    updateSlider(slideTitle,id,deactive);
    
    //window.location.reload(); 
  }

  const ActivateButton = (e, id) =>{
    //console.log(id);
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
    setShowImage(URL.createObjectURL(e.target.files[0]))
    setFileName(e.target.files[0].name)
    if(imageName && dateInput.length>0 && titleInput.length > 0 ){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
    
  }

  const onClickUpload = () =>{
    const formData = new FormData();
    formData.append('image', image);
    formData.append('Stories_name', slideTitle);
    formData.append('Stories_content', edited);
    formData.append('Stories_title', titleInput);
    formData.append('Stories_date', dateInput);
    formData.append('username', user.username);
    formData.append('staff', staff);

    axios.post(`${BASE_URL}/uploadStoriesContent/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      refreshData(data);
    })
    setFileName("No selected File")
    setShowImage(null)
    setImage(null)

    setIsUploadDisable(true);

    setDateInput("");
    setTitleInput("")
    const domEditableElement = document.querySelector('.ck-editor__editable');
    // Get the editor instance from the editable element.
    const editorInstance = domEditableElement.ckeditorInstance;
    // Use the editor instance API.
    editorInstance.setData('');
    imgInputRef.current.value = null;
    
  }
 
  const deleteSlider = (title,id) => {
    var InsertAPIURL = `${BASE_URL}/deleteStoriesContent/`;
  
    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: title, Stories_id: id, username: user.username, staff: staff};
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
    var answer = window.confirm("Are you sure do you want to delete this image?");
    if (answer) {
      deleteSlider(slideTitle,id);
    }
    //window.location.reload(); 
  }

  const EditButton = (e, data)=>{
    setSelectedData(data);
    /*
    navigate("edit", {
        state: {
          data: data,
        },
      });
    */
    //navigate("edit/" + data);
    window.open("k_bahagi/edit/" + data, '_blank', 'noopener,noreferrer');
    
  }

  const titleOnChange = (e) =>{
    e.preventDefault();
    let output = e.target.value;
    setTitleInput(output);
    
    if(image && dateInput.length>0 && output.length > 0 ){
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

    if(image && output.length>0 && output.length > 0 ){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
  } 

  useEffect(()=>{
    getCmsStaff(user.username);
    getTBL_Stories(slideTitle);
  },[])

  return (
    <>
    
    {sliderData ? (<>
      <div> 
        <center>
            <h1><b>{slideTitle}</b></h1>
        </center> 
        <h3> Active Stories </h3>
        
        {activeSlider.length <= 0 ? (<>
            <h4> No Deactivated Stories </h4>
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
                  <img src={item.Stories_image} style={{height: "90px", width: "180px"}}/>
                  <br/>
                  <center>
                    <div className='cms-content-titles'>
                        {item.Stories_title.length > 25 ? 
                            (<b>{item.Stories_title.substring(0,25) + "..."}</b>):
                            (<b>{item.Stories_title}</b>)}
                    </div>
                  </center>
                  <button className='btn-cms'
                  style={{width:'50px',backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Stories_id)}
                  ><FontAwesomeIcon icon={faStop}/></button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button className='btn-cms' style={{width:'50px',backgroundColor: 'blue', color:'white'}} 
                  onClick={e=>EditButton(e, item.Stories_id)}><FontAwesomeIcon icon={faEdit}/></button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button className='btn-cms' style={{width:'50px',backgroundColor: 'black', color:'white'}} 
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
        <h3> Deactivated Stories </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <ul className='list-cms'>
          {notActiveSlider.map((item)=>{
            return(
              <li style={{padding: ".625em",textAlign: "center"}}>
              <figure className='figure-cms'>
                <img src={item.Stories_image} style={{height: "90px", width: "180px"}}/>
                <br/>
                <center>
                    <div className='cms-content-titles'>
                        
                        { item.Stories_title ?  (item.Stories_title.length > 25 ? 
                            (<b>{item.Stories_title.substring(0,25) + "..."}</b>):
                            (<b>{item.Stories_title}</b>)):null}
                    </div>
                </center>
                
                <button className='btn-cms' style={{width:'50px', backgroundColor: 'green', color:'white'}} 
                onClick={e=>ActivateButton(e, item.Stories_id)}><FontAwesomeIcon icon={faPlay}/></button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button className='btn-cms' style={{width:'50px', backgroundColor: 'blue', color:'white'}} 
                onClick={e=>EditButton(e, item.Stories_id)}><FontAwesomeIcon icon={faEdit}/></button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button className='btn-cms' style={{width:'50px', backgroundColor: 'black', color:'white'}} 
                onClick={e=>DeleteButton(e, item.Stories_id)}><FontAwesomeIcon icon={faTrash}/></button>
              </figure>
              </li>
          )
          })}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </>):(<>
          <h4> No Deactivated Stories </h4>
        </>)}
        
        <center>
          <h3>Add K - Bahagi Story</h3>
          <div id="combine-cms">
            <div style={{marginRight: "20px", marginTop: "20px"}}>
              <div id="icon-text-cms">
                <b><label style={{marginRight: "10px", fontSize: "16px", marginTop: "5px"}}>Title: </label>
                </b>
                <input className="inputSO" type="text" value={titleInput} onChange={titleOnChange}></input>
              </div>
              
              <div id="icon-text-cms">
                <b><label style={{marginRight: "10px", fontSize: "16px", marginTop: "5px"}}>Date: </label></b>
                <input className="inputSO" type="date" value={dateInput} onChange={dateOnChange}></input>
              </div>
                <br/>

                <div>
                  <label style={{marginRight: "10px", fontSize: "16px", marginTop: "5px"}}>Select Image</label>
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
                </div>
            </div>
            
            <div id="desc-cms">
              <label style={{fontSize: "16px"}}>Description</label>
              <div className='cms-text-content'>
                <CKEditor
                      editor={ClassicEditor}
                      data = {edit}
                      
                      onChange={(event, editor) => {
                        
                        const dataEditor = editor.getData();
                        
                        setEdited(dataEditor);
                      }}
                    />
              </div>
            </div>
          </div>
          
          
          
          
            <button className='btn-cms' style={{backgroundColor: !isUploadDisable ? 'rgb(0, 254, 254)' : 'rgb(102, 110, 110)', 
            color: !isUploadDisable ? 'black': 'white', width: "100px", marginTop: "10px"}} 
            onClick={onClickUpload} disabled={isUploadDisable}><FontAwesomeIcon icon={faUpload}/> Upload</button>
          
          
        </center>
      </div>
      </>) : (<>
        <LoadingSpinner/>
        </>)
    }



    </>
    
  )
}
export default CMSK_Bahagi;