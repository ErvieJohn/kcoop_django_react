import {React, useState, useEffect, useRef} from 'react';
import { BASE_URL } from '../../../../config';
import {Row, Col, Container} from 'react-bootstrap';
import LoadingSpinner from '../../../LoadingSpinner';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const CMSAuditedFinancialStatements = () => {
    
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const [file, setFile] = useState('');

  const slideTitle = "Audited Financial Statements";

  const [sliderData, setSliderData] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const [notActiveSlider, setNotActiveSlider] = useState([]);

  const [isUploadDisable, setIsUploadDisable] = useState(true);

  const [pdfFileName, setPdfFileName] = useState("No selected PDF file");
  const [fileName, setFileName] = useState("No selected Image file");
  const [showImage, setShowImage] = useState(null);
  const [showFile, setShowFile] = useState(null);
  const imgInputRef = useRef(null);
  const fileInputRef = useRef(null);

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
    if(imageName && file){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
    
  }

  function handlefile(e){
    setFile(e.target.files[0]);
    let fileName = e.target.files[0];
    //console.log(fileName);
    setShowFile(URL.createObjectURL(e.target.files[0]))
    setPdfFileName(e.target.files[0].name)
    if(fileName && image){
      setIsUploadDisable(false);
    }
    else{
      setIsUploadDisable(true);
    }
    
  }

  const onClickUpload = () =>{
    const formData = new FormData();
    formData.append('image', image);
    formData.append('file', file);
    formData.append('Publications_name', slideTitle);

    axios.post(`${BASE_URL}/uploadPubContent/`, formData).then((response)=>{
      //console.log(res);
      let data = response.data;
      setSliderData(data);
      //console.log("DATA Slider: ", data);

      refreshData(data);
    })

    setFileName("No selected Image File")
    setPdfFileName("No selected PDF File")
    setShowImage(null)
    setShowFile(null)
    setImage(null)
    setFile(null)
    setIsUploadDisable(true);
    imgInputRef.current.value = null;
    fileInputRef.current.value = null;

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

  useEffect(()=>{
    getTBL_Publications(slideTitle);
  },[])

  return (
    <>
    
    {sliderData ? (<>
      <div> 
        <center>
            <h1><b>{slideTitle}</b></h1>
        </center> 
        <h3> Active Files </h3>
        
        {activeSlider.length <= 0 ? (<>
            <h4> No Deactivated Files </h4>
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
                  <img src={item.Publications_image} style={{height: "200px", width: "180px"}}/>
                  <br/>
                  <center>
                    <b>
                        {item.Publications_title}
                    </b>
                  </center>
                  <button className='btn-cms'
                  style={{backgroundColor: 'red', color:'white'}} 
                  onClick={e=>DeactivateButton(e, item.Publications_id)}
                  ><FontAwesomeIcon icon={faStop}/></button>
                  <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                  <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                  onClick={e=>DeleteButton(e, item.Publications_id)}><FontAwesomeIcon icon={faTrash}/></button>
              </figure>
              </li>
              </>
            )}
        
            )}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </div>
        <h3> Deactivated Files </h3>
        {notActiveSlider.length > 0 ? (<>
        <div>
        <ul className='list-cms'>
          {notActiveSlider.map((item)=>{
            return(
              <li style={{padding: ".625em",textAlign: "center"}}>
              <figure className='figure-cms'>
                <img src={item.Publications_image} style={{height: "200px", width: "180px"}}/>
                <br/>
                <center>
                    <b>
                        {item.Publications_title}
                    </b>
                  </center>
                <button className='btn-cms' style={{backgroundColor: 'green', color:'white'}} 
                onClick={e=>ActivateButton(e, item.Publications_id)}><FontAwesomeIcon icon={faPlay}/></button>
                <div style={{width:'20px',height:'auto',display:'inline-block'}}/>
                <button className='btn-cms' style={{backgroundColor: 'black', color:'white'}} 
                onClick={e=>DeleteButton(e, item.Publications_id)}><FontAwesomeIcon icon={faTrash}/></button>
              </figure>
              </li>
          )
          })}
        </ul>
        <br style={{clear:"both"}}/>
        </div>
        </>):(<>
          <h4> No Deactivated Files </h4>
        </>)}
        
        <center>
          <h3>Add File</h3>
          <div id="combine-cms">
              {/*<input className='image-input-cms' type="file" ref={imgInputRef} name="file" accept='image/*' onChange={handleImage}/>*/}
            <div style={{marginRight: "20px"}}>
              <lable>
                Select Image
              </lable>

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
                <p>Browse Files to upload Image File</p>
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
                    setFileName("No selected Image File")
                    setShowImage(null)
                    setImage(null)
                    setIsUploadDisable(true);
                    imgInputRef.current.value = null;
                  }}
                  />
                </span>
              </div>
            </div>
            
            <div>
              <lable>
                Select File
              </lable>
              <form className='form-cms'
              onClick={() => document.querySelector(".input-field-file").click()}
              >
                <input ref={fileInputRef} type="file" name="file" accept='.pdf' className='input-field-file hidden-input' hidden 
                onChange={handlefile}
                />

                {showFile ?
                <embed src={showFile} width="300px" height="400px" alt={pdfFileName} />
                : 
                <>
                <MdCloudUpload color='#1475cf' size={60} />
                <p>Browse Files to upload PDF File</p>
                </>
              }

              </form>

              <div className='uploaded-row'>
                <AiFillFileImage color='#1475cf' />
                <span className='upload-content'>
                  {pdfFileName} - 
                  <MdDelete
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    setPdfFileName("No selected PDF File")
                    setShowFile(null)
                    setFile(null)
                    setIsUploadDisable(true);
                    fileInputRef.current.value = null;
                  }}
                  />
                </span>
              </div>
            </div>
            

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
export default CMSAuditedFinancialStatements;