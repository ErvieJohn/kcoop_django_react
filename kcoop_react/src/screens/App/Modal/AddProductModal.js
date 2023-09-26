import {React, useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import LoadingSpinner from '../../LoadingSpinner';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import './AddProductModal.css';
import axios from 'axios';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];

function AddProductModal(props) {

    const navigate = useNavigate();

    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    const categories = props.categories;

    const categoryValue = useRef(null);
    const [category, setCategory] = useState(null);
    const [title, setTitle] = useState(null);
    

    const [imageFile, setImageFile] = useState('');
    const [image, setImage] = useState('');
    const imgInputRef = useRef(null);

    const [fileName, setFileName] = useState("No selected file");
    const [showImage, setShowImage] = useState(null);

    const [hasImage, setHasImage] = useState(false);
    var [errorImage, setErrorImage] = useState("");

    function categoryOnChange(e){
        let selectedCategory = e.target.value;
        setCategory(selectedCategory);
    }

    function submitForm (e){
        e.preventDefault();
        if(hasImage && tags.length > 0){
            onClickAddProduct();
        }
        else if(!(tags.length > 0)){
            errorImage = "Please add atlease 1 tag";
            setErrorImage(errorImage);
        }
        else{
            errorImage = "Please add image";
            setErrorImage(errorImage);
        }
    }
    

    function handleImage(e){
        setImageFile(e.target.files);
        setImage(e.target.files[0]);
        let imageName = e.target.files[0];
        //console.log(imageName);
        setShowImage(URL.createObjectURL(e.target.files[0]))
        setFileName(e.target.files[0].name)   
        setHasImage(true);
        errorImage = "";
        setErrorImage(errorImage);
      }

    const onClickAddProduct = () =>{
        // console.log("image: ", image);
        // console.log("member: ", member.username);
        // console.log("title: ", title);
        // console.log("category: ", category);
        // console.log("categories: ", categories)
        if(image && member.username && title && category && tags.length>0){
            const formData = new FormData();
            formData.append('product_image', image);
            formData.append('username', member.username);
            formData.append('product_title', title);
            formData.append('category_name', category);
            formData.append('tags', JSON.stringify(tags));
            //console.log("tags: ", JSON.stringify(tags));

            axios.post(`${BASE_URL}/api/member/insertProduct/`, formData).then((response)=>{
                //console.log("DATA: ",response.data);
            })
            setFileName("No selected File")
            setShowImage(null)
            setImage(null)
            setTags([]);
            imgInputRef.current.value = null;
            props.modalToggle();
            props.getProduct();
            //props.getProducts();
            //window.location.reload();
        }
        else{
            errorImage = "there was a problem!";
            setErrorImage(errorImage);
            console.log("there was a problem!")
        }
        

    }

    const [tags, setTags] = useState([]);
    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };

    //   const handleTagClick = index => {
    //     console.log('The tag at index ' + index + ' was clicked');
    //   };

    useEffect(() => {
        if(tags.length > 0){
            errorImage = "";
            setErrorImage(errorImage);
        }
      }, [tags]);

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-product">
        </div>
        <div className="modal-login-content">
              <form className="Auth-form-modal" onSubmit={submitForm}>
                <h3 className="Auth-form-title-modal">Add Product</h3>
                    <div className="Auth-form-content-modal">
                        
                        <div className="form-group-modal mt-3">
                            <label>Product Title:</label>
                            <input
                            type="text"
                            className="form-control-modal mt-1"
                            placeholder="Enter Product Title"
                            color='black'
                            value={title}
                            onChange={text=>{setTitle(text.target.value);
                            }}
                            autoFocus={true}
                            required
                            />
                        </div>
                        <div className="form-group-modal mt-3">
                            <label >Category:</label>
                            <input className="form-control-modal mt-1" type="text" list="category" 
                            ref={categoryValue} 
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
                                tags={tags}
                                delimiters={delimiters}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                //inputFieldPosition="bottom"
                                inputFieldPosition="top"
                                //inline={false}
                                autocomplete
                                onChange={text=>{
                                    errorImage = "";
                                    setErrorImage(errorImage);}}
                                autofocus={false}
                                allowDeleteFromEmptyInput={false}
                            />

                        </div>
                        
                        
                        <center>
                            <label>Image</label>
                            {/*<input className='image-input-cms' type="file" ref={imgInputRef} name="file" accept='image/*' onChange={handleImage}/>*/}
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
                                }}
                                />
                                </span>
                            </div>
                            <br/>
                        </center>

                        <div className="d-grid-modal gap-2 mt-3">
                            <button type="submit" className="btn-modal-login"  >
                                <FontAwesomeIcon icon={faAdd}/> Add Product
                            </button>
                        </div>
                        
                        <div className="d-grid-modal gap-2 mt-3">
                            <span><b style={{color: "red", marginTop: "10px"}}>{errorImage}</b></span>
                        </div>
                       

                    </div>
              </form>

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button>

          </div>
      </div>
  )
}

export default AddProductModal