import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { useNavigate, Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CMSKwentong_K = () => {
  //window.location.reload();
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const slideTitle = "Kwentong - K";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  const imgInputRef = useRef(null);

  const [selectedData, setSelectedData] = useState('');

  var [titleInput, setTitleInput] = useState("");
  var [dateInput, setDateInput] = useState("");

  const navigate = useNavigate();

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

    axios.post(`${BASE_URL}/uploadStoriesContent/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      refreshData(data);
    })

    setIsUploadDisable(true);

    setDateInput("");
    setTitleInput("")
    edited = "";
    imgInputRef.current.value = null;
    
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
    window.open("kwentong_k/edit/" + data, '_blank', 'noopener,noreferrer');
    
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

  var edit = "";
  var edited = "";

  useEffect(()=>{
    getTBL_Stories(slideTitle);
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
                  <img src={item.Stories_image} style={{height: "90px", width: "180px"}}/>
                  <br/>
                  <center>
                    <b>
                        {item.Stories_title}
                    </b>
                  </center>
                  <button
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Stories_id)}
                  >Deactivate</button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button style={{backgroundColor: 'blue', color:'white'}} onClick={e=>EditButton(e, item.Stories_id)}>Edit</button>
                  <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                  <button style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Stories_id)}>Delete</button>
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
                <img src={item.Stories_image} style={{height: "90px", width: "180px"}}/>
                <br/>
                <button style={{backgroundColor: 'green', color:'white'}} onClick={e=>ActivateButton(e, item.Stories_id)}>Activate</button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button style={{backgroundColor: 'blue', color:'white'}} onClick={e=>EditButton(e, item.Stories_id)}>Edit</button>
                <div style={{width:'10px',height:'auto',display:'inline-block'}}/>
                <button style={{backgroundColor: 'black', color:'white'}} onClick={e=>DeleteButton(e, item.Stories_id)}>Delete</button>
              </Td>
          )
          })}
        </Tr>
        </Table>
        </div>
        </>):(<>
          <h4> No Deactivated Files </h4>
        </>)}
        
        <h3>Add Kwentong - K Story</h3>
        <b><label>Title: </label>
          </b>
          <input type="text" value={titleInput} onChange={titleOnChange}></input>
        <b><label>Date: </label></b>
        <input type="date" value={dateInput} onChange={dateOnChange}></input>
        <br/>
        <label>Select Image</label>
        <input type="file" ref={imgInputRef} name="image" accept='image/*' onChange={handleImage}/>
        
        <CKEditor
                editor={ClassicEditor}
                data = {edit}

                onChange={(event, editor) => {
                  
                  const dataEditor = editor.getData();
                  edited = dataEditor;
                }}
              />

        <button onClick={onClickUpload} disabled={isUploadDisable}>Upload</button>
      </div>
      </>) : (<>
        <LoadingSpinner/>
        </>)
    }



    </>
    
  )
}
export default CMSKwentong_K;