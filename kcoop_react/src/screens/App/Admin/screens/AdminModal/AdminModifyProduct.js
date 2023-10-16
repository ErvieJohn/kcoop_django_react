import {React, useState, useRef, useEffect} from 'react';
import axios from 'axios';
import { WithContext as ReactTags } from 'react-tag-input';
import jwt_decode from "jwt-decode";
import LoadingSpinner from '../../../../LoadingSpinner';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { BASE_URL } from '../../../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faClose, faEye, faEyeSlash, faPencilSquare, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './AdminModifyProduct.css';

function AdminModifyProduct(props) {
    //const isActiveTab= useState(sessionStorage.getItem("inActiveTab") ? JSON.parse(sessionStorage.getItem("inActiveTab")) : true);
    const isActiveTab = props.buttonActive;
    
    const product = props.item;
    
    const [title, setTitle] = useState(product.Product_title);

    const categories = isActiveTab ? props.categories : props.inactiveCategories;
    //console.log("isActiveTab: ", sessionStorage.getItem("inActiveTab"));
    const categoryValue = useRef(null);
    const [category, setCategory] = useState((categories.filter(item=> product.Category_id === item.Category_id))[0].Category_name);
    function categoryOnChange(e){
        let inputCategory = e.target.value;
        setCategory(inputCategory);
        
        setError(false);
        errorText = "";
        setErrorText(errorText);
    }

    const tags = isActiveTab ? props.tags : props.inactiveTags;

    const [tag, setTag] = useState(()=>{
        let tagValue = [];
        product.Tag.map((myTag)=>{
            tagValue.push(tags.filter(item=> myTag === item.id)[0])
        })
        //console.log("tagValue: ", tagValue);
        return tagValue;
    });  
   
    //console.log(categories);

    const [image, setImage] = useState(product.Product_image);
    const imgInputRef = useRef(null);
    const [showImage, setShowImage] = useState(product.Product_image);
    const [fileName, setFileName] = useState("No selected file");
    const [hasImage, setHasImage] = useState(true);
    const [changedImage, setChangedImage] = useState(false);

    const [error, setError] = useState(false);
    var [errorText, setErrorText] = useState("");

    var [errorImage, setErrorImage] = useState("");

    function handleImage(e){
        e.preventDefault();
        setImage(e.target.files[0]);
        setShowImage(URL.createObjectURL(e.target.files[0]));
        setChangedImage(true);
        // let imageName = e.target.files[0];
        //console.log(imageName);
        // setFileName(e.target.files[0].name);
        // errorImage = "";
        // setErrorImage(errorImage);
        setError(false);
        errorText = "";
        setErrorText(errorText);
      }

      const handleDelete = i => {
        setTag(tag.filter((tag, index) => index !== i));
      };
    
    const handleAddition = tagAdd => {
        if(!((tag.filter(myTag => myTag["text"] === tagAdd["text"])).length > 0)){
            setTag([...tag, tagAdd]);
        }
    };
    
    const handleDrag = (tags, currPos, newPos) => {
        const newTags = tag.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tags);

        // re-render
        setTag(newTags);
    };
    
    function submitForm(){
        if(!(title.length > 0)){
            setError(true);
            errorText = "Please Fill The Product Title Field";
            setErrorText(errorText);
        }
        else if(!(category.length > 0)){
            setError(true);
            errorText = "Please Fill The Category Field";
            setErrorText(errorText);
        }
        else if(!(tag.length > 0)){
            setError(true);
            errorText = "Please Fill The Tag Field";
            setErrorText(errorText);
        }
        else if(!(image != null)){
            setError(true);
            errorText = "Please Add Image";
            setErrorText(errorText);
        }
        else{
            setError(false);
            errorText = "";
            setErrorText(errorText);
            // console.log(image);
            props.modifyMemberProduct(product.Product_id,title, category, tag, image, changedImage);
        }
    }


  return (
    <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-product">
        </div>
        <div className="modal-login-content" style={{maxWidth: "840px", minWidth: "840px", top: "50%"}}>
              <form className="Auth-form-modal" style={{width: "840px"}}> 
              {/* onSubmit={submitForm}> */}
                <h3 className="Auth-form-title-modal">Edit Product</h3>
                    <div className="Auth-form-content-modal" style={{overflowY: 'scroll', height: window.innerHeight - 200}}>
                        <div id="icon-text-admin">
                            <div className='admin-edit-line'>
                                <div className="form-group-modal mt-3">
                                    <label>Product Title:</label>
                                    <input
                                    type="text"
                                    className="form-control-modal mt-1"
                                    placeholder="Enter Product Title"
                                    color='black'
                                    value={title}
                                    onChange={text=>{
                                        setTitle(text.target.value);
                                        setError(false);
                                        errorText = "";
                                        setErrorText(errorText);
                                    }}
                                    //autoFocus={true}
                                    required
                                    />
                                </div>

                                <div className="form-group-modal mt-3">
                                    <label >Category:</label>
                                    <input className="form-control-modal mt-1" type="text" list="category" 
                                    ref={categoryValue} 
                                    value={category}
                                    onChange={categoryOnChange}
                                    placeholder='Enter Category'
                                    required/>
                                    <datalist id="category">
                                        <option value="none" selected disabled hidden> </option>
                                        {categories ? (categories.map((item)=>(
                                            <option value={item.Category_name}>{item.Category_name}</option>
                                        ))):(null)}
                                    </datalist>
                                </div>

                                <div className="form-group-modal mt-3">
                                    <label>Tags:</label>
                                    <ReactTags
                                        className="form-control-modal mt-1"
                                        tags={tag}
                                        //suggestions={tags}
                                        //delimiters={delimiters}
                                        handleDelete={handleDelete}
                                        handleAddition={handleAddition}
                                        handleDrag={handleDrag}
                                        //inputFieldPosition="bottom"
                                        inputFieldPosition="top"
                                        //inline={false}
                                        autocomplete
                                        onChange={text=>{
                                            setError(false);
                                            errorText = "";
                                            setErrorText(errorText);
                                        }}
                                        autofocus={false}
                                        allowDeleteFromEmptyInput={false}
                                    />

                                </div>

                            </div>

                            <div className='admin-edit-image'>
                                <center>
                                    <label>Image</label>
                                    <form className='form-product'
                                    onClick={() => document.querySelector(".input-field").click()}
                                    >
                                        <input ref={imgInputRef} type="file" accept='image/*' className='input-field hidden-input-product' hidden 
                                        onChange={handleImage}
                                        required/>

                                        {showImage ?
                                        <img src={showImage} style={{width:"100%", height: "100%", objectFit:"cover", margin: "5px 5px 5px 5px"}} alt={fileName} />
                                        : 
                                        <>
                                        <MdCloudUpload color='#1475cf' size={60} />
                                        <p>Browse Files to upload</p>
                                        </>
                                    }

                                    </form>

                                    <div className='uploaded-row-product'>
                                        <AiFillFileImage color='#1475cf' />
                                        <span className='upload-content-product'>
                                        {fileName} - 
                                        <MdDelete
                                        style={{cursor: 'pointer'}}
                                        onClick={() => {
                                            setFileName("No selected File")
                                            setShowImage(null)
                                            setImage(null)
                                            imgInputRef.current.value = null;
                                            setHasImage(false);
                                            setChangedImage(false);
                                        }}
                                        />
                                        </span>
                                    </div>
                                    <br/>
                                </center>
                            </div>
                        </div>

                        <div class="w3-panel w3-pale-red w3-leftbar w3-border-red" style={{display: error ? ("block"):("none"), 
                            border: "1px solid", marginLeft: "50px", marginRight: "50px"}}>
                            <div style={{display: "flex", marginTop: "10px"}}>
                                <FontAwesomeIcon icon={faExclamationCircle}/>
                                <p style={{marginLeft: "10px"}}>Error: {errorText}</p>
                            </div>
                        </div>

                        <div className="d-grid-modal gap-2 mt-3">
                            <button type="button" className="btn-modal-login" onClick={submitForm} >
                                <FontAwesomeIcon icon={faPencilSquare}/> Edit Product
                            </button>
                        </div>

                        {/* 
                        
                        <div className="d-grid-modal gap-2 mt-3">
                            <span><b style={{color: "red", marginTop: "10px"}}>{errorImage}</b></span>
                        </div>  */}
                        

                    </div>
                    
              </form>

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button>

          </div>
      </div>
  )
}

export default AdminModifyProduct