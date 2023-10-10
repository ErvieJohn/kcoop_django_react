import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext } from "react-router-dom";
import { BASE_URL } from '../../../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGear, faSignOut, faUser, faXmark, faExclamationCircle, faSearch, faPlayCircle, faStopCircle, faFileCircleCheck, faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";
import LoadingSpinner from '../../../../LoadingSpinner';
import './AdminEditMember.css';
import ActiveProducts from './AdminStatusProducts/ActiveProducts';
import InactiveProducts from './AdminStatusProducts/InactiveProducts';
import AdminNavHeader from '../../AdminNavHeader/AdminNavHeader';
import AdminModifyProduct from '../AdminModal/AdminModifyProduct';
import axios from 'axios';

function AdminEditMember() {
    const [adminAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);
    const [admin, setAdmin] = useState(()=> localStorage.getItem('adminAuthToken') ? jwt_decode(localStorage.getItem('adminAuthToken')) : null);

    const param = useParams();
    const [toggleLogout] = useOutletContext();

    const userParam = param.username ? (param.username) : null;
    //console.log("username: ", userParam);

    const [member, setMember] = useState(null);
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [tags, setTags] = useState(null);

    const [inactiveProducts, setInactiveProducts] = useState(null);
    const [inactiveCategories, setInactiveCategories] = useState(null);
    const [inactiveTags, setInactiveTags] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const getMemberProduct = async() => {
        var InsertAPIURL = `${BASE_URL}/api/admin/getMemberProduct/`;
        var DataBody = {username: userParam}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(adminAuthToken.access)
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json();
          //console.log("response.statusText: ", response.statusText);
          if(response.status === 200){
           //console.log("data.data: ", data.data);
            setMember(data.userData);

            // Active Products
            setProducts(data.productsDataActive.products);
            setCategories(data.productsDataActive.categories);
            setTags(data.productsDataActive.tags);

            // Inactive Products
            setInactiveProducts(data.productsDataInactive.products);
            setInactiveCategories(data.productsDataInactive.categories);
            setInactiveTags(data.productsDataInactive.tags);

            setIsLoading(false);
            
          }else if(response.statusText === 'Unauthorized'){
            toggleLogout();
          }
    }

    // FOR USER DROPDOWN
    const [dropdown, setDropdown] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState(false);
    
    function clickedDropdown(){
        setDropdown(!dropdown);
    }

    var [inputSearch, setInputSearch] = useState("");
    const [searchLoading, setSearchLoading] = useState(true);

    function handleOnChangeSearch(text){
        inputSearch = text.target.value;
        setInputSearch(inputSearch);
        //setSearchLoading(false);
        //searchProduct();
    }

    const [buttonActive, setButtonActive] = useState(sessionStorage.getItem("inActiveTab") ? JSON.parse(sessionStorage.getItem("inActiveTab")) : true);

    function clickedActive(e){
        e.preventDefault();
        setButtonActive(true);
        sessionStorage.setItem("inActiveTab", true);
    }

    function clickedInactive(e){
        e.preventDefault();
        setButtonActive(false);
        sessionStorage.setItem("inActiveTab", false);
    }

    // API FOR UPDATING THE STATUS OF THE MEMBERS PRODUCT
    const updateStatus = async(id, status) => {
        var InsertAPIURL = `${BASE_URL}/api/admin/updateMemberProduct/`;
        var DataBody = {username: userParam, product_id: id, status: status}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(adminAuthToken.access)
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json();
          //console.log("response.statusText: ", response.statusText);
          if(response.status === 200){
            getMemberProduct();
            
          }else if(response.statusText === 'Unauthorized'){
            toggleLogout();
          }
    }

    function clickedInactivate(e, id, status){
        e.preventDefault();
        setIsLoading(true);
        updateStatus(id, status);
    }

    // API FOR DELETING THE MEMBER'S PRODUCT
    const deleteMemberProduct = async(id, status) => {
        var InsertAPIURL = `${BASE_URL}/api/admin/deleteMemberProduct/`;
        var DataBody = {username: userParam, product_id: id}
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(adminAuthToken.access)
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json();
          //console.log("response.statusText: ", response.statusText);
          if(response.status === 200){
            getMemberProduct();
            
          }else if(response.statusText === 'Unauthorized'){
            toggleLogout();
          }
    }

    function clickedDelete(e, id){
        e.preventDefault();
        var answer = window.confirm("Are you sure do you want to delete this product?");
        if (answer) {
            setIsLoading(true);
            deleteMemberProduct(id);
        }
            
    }

    const [modalEdit, setModalEdit] = useState(false);
    const [editProductValue, setEditProductValue] = useState(null);

    function clickedEdit(e, item){
        e.preventDefault();
        setModalEdit(!modalEdit);
        if(!editProductValue){
            setEditProductValue(item);
        }
        else{
            setEditProductValue(null);
        }
    }

    const modifyMemberProduct = async(productID, productTitle, productCategory, productTag, productImage, changedImage) => {
        let config = {
            headers:{
                'Authorization':'Bearer ' + String(adminAuthToken.access)
            }
        };
        const formData = new FormData();
        formData.append('username', userParam);
        formData.append('product_id', productID);
        formData.append('product_title', productTitle);
        formData.append('category_name', productCategory);
        formData.append('tags', JSON.stringify(productTag));
        formData.append('product_image', productImage);
        formData.append('changedImage', changedImage)
        
        

        let response = await axios.post(`${BASE_URL}/api/admin/modifyMemberProduct/`, formData, config);

        //let data = await response.json();
        //console.log("response.statusText: ", response.statusText);
        if(response.status === 200){
            setIsLoading(true);
            getMemberProduct();
            setModalEdit(false); // to close the toggle
            setEditProductValue(null);
        
        }else if(response.statusText === 'Unauthorized'){
            toggleLogout();
        }
    }


    useEffect(() =>{
        if(isLoading){
            getMemberProduct();
        }
        
        
    }, []); 


  return (
    <>
        {/* <header className='header-background'>
            <div className='app-header'>
                <div style={{display: "flex"}}>
                    <a href='/app' style={{color: "black"}}>
                        <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                        style={{marginRight: "15px", marginTop: "3px"}}></img>
                        <span className='kcooptitle-cms'>
                            <b> KASAGANA-KA  </b> COOPERATIVE
                        </span>
                    </a>
                    
                </div>

                <div>
                    <span>
                        <b> Administrator </b>
                    </span>
                </div>

                <div className='dropdown-profile-wrapper'>
                    <button className='dropdown-btn-setting' type="button" 
                        style={{border: "none", backgroundColor: "transparent", padding: "10px"}} 
                        onClick={clickedDropdown}
                        onMouseOver={(e) => {
                            e.preventDefault();
                            setHoverDropdown(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            if(!dropdown){
                                setHoverDropdown(false);
                            }
                            
                        }}
                    > 
                        <FontAwesomeIcon icon={faUser} style={{marginRight:"10px"}}/> 
                        {"Hi, " + admin.username + "!"} 
                        {dropdown ? (<FontAwesomeIcon icon={faXmark} style={{marginLeft:"10px"}}/>): 
                        (<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"10px"}}/>)}
                    </button>
                    
                    <div class="dropdown-profile" style={{display: hoverDropdown ? ("flex"):("none")}}
                        onMouseOver={(e) => {
                            e.preventDefault();
                            setHoverDropdown(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            if(!dropdown){
                                setHoverDropdown(false);
                            }
                            
                        }}
                    >
                        <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} 
                        // onClick={toggleSettingModal}
                        > <FontAwesomeIcon icon={faGear}/> My Profile</button>
                        <button className="dropdown-profile-btn" style={{borderRadius: "0 0 8px 8px"}} onClick={toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
                    </div> 
                </div>
                
            </div>
        </header> */}
        <AdminNavHeader toggleLogout={toggleLogout}/>
        <div>
            {isLoading ? (
                <LoadingSpinner/>
                ):(
                <>
                    {member ? (
                        <>
                            <div style={{margin: "0 50px 0 50px"}}>
                                <div className='content-header'>
                                    <label for="search-product" style={{marginRight: "10px"}}>Search Member's Product:</label> 
                                    <input className='app-input-search' type="text" placeholder={'Search product...'}
                                        style={{backgroundImage: <FontAwesomeIcon icon={faSearch}/>, marginRight: "20px"}}
                                        value={inputSearch}
                                        onChange={(text)=>{
                                            handleOnChangeSearch(text);
                                            
                                        }}
                                    />

                                    <br/>
                                    
                                    <div className='admin-tab-wrapper' style={{marginTop: "10px"}}>
                                        <button className='admin-tab-button' 
                                            style={{marginRight: "2px", backgroundColor: buttonActive ? ("white"):("#000"),
                                                        color: buttonActive ? "black" : "white"}} //, borderBottom: buttonActive ? "none":"1px solid transparent"
                                            onClick={clickedActive}
                                        >
                                            <FontAwesomeIcon icon={faPlayCircle} color={buttonActive ? "black" : "white"}/> Active Products
                                        </button>

                                        <button className='admin-tab-button' 
                                            style={{backgroundColor: !buttonActive ? ("white"):("#000"),
                                                    color: !buttonActive ? "black" : "white"}} //, borderBottom: !buttonActive ? "none":"1px solid transparent"
                                            onClick={clickedInactive}>
                                            <FontAwesomeIcon icon={faStopCircle} color={!buttonActive ? "black" : "white"}/> Inactive Products
                                        </button>
                                        <br/>
                                    </div>
                                </div>
                                <div style={{width: "100%", borderTop: "1px solid", marginTop: "3px"}}></div>
                            </div>
                            
                            
                            <div style={{marginTop: "20px"}}>
                                {buttonActive ? (<>
                                    {products.length > 0 ? (
                                        
                                        <ActiveProducts activeProducts={products} activeCategories={categories} 
                                            activeTags={tags} clickedInactivate={clickedInactivate} clickedDelete={clickedDelete}
                                            clickedEdit={clickedEdit}/>
                                        
                                    ):(
                                        <div>
                                            <center style={{marginTop: "30px"}}>
                                                <FontAwesomeIcon icon={faFileCircleXmark} size='5x'/>
                                                <br/>
                                                <b>No Active Products Found!</b>
                                            </center>
                                        </div>
                                    )}
                                    
                                </>):(<>
                                    {inactiveProducts.length > 0 ? (
                                        
                                        <InactiveProducts inactiveProducts={inactiveProducts} inactiveCategories={inactiveCategories} 
                                            inactiveTags={inactiveTags} clickedInactivate={clickedInactivate} clickedDelete={clickedDelete}/>
                                        
                                    ):(
                                        <div>
                                            <center style={{marginTop: "30px"}}>
                                                <FontAwesomeIcon icon={faFileCircleXmark} size='5x'/>
                                                <br/>
                                                <b style={{marginTop: "10px"}}>No Inactive Products Found!</b>
                                            </center>
                                        </div>
                                    )}
                                    
                                </>)   
                                
                                }
                            </div>
                        </>

                    ):(
                        <div class="w3-panel w3-pale-red w3-leftbar w3-border-red" style={{display: "block"}}>
                            <div style={{display: "flex", marginTop: "10px"}}>
                                <FontAwesomeIcon icon={faExclamationCircle}/>
                                <p style={{marginLeft: "10px"}}>Error: Member Not Found</p>
                            </div>
                        </div>
                    )}
                    
                </>
            )}
        </div>

        {modalEdit && (
            <AdminModifyProduct modalToggle={clickedEdit} item={editProductValue} 
                categories={categories} tags={tags} modifyMemberProduct={modifyMemberProduct}/>
        )}
    </>
    
  )
}

export default AdminEditMember