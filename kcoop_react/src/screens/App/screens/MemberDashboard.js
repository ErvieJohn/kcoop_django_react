import React, { useEffect, useState } from 'react';
import './MemberDashboard.css';
import { BASE_URL } from '../../../config';
import AddProductModal from '../Modal/AddProductModal';
import MemberSettingModal from '../Modal/MemberSettingModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { MdSettings } from 'react-icons/md';

const MemberDashboard = (props) => {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    
    const [modal, setModal] = useState(false);

    const [modalSetting, setModalSetting] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedAllCategory, setSelectedAllCategory] = useState(true);

    const toggleSettingModal = () => {
        setModalSetting(!modalSetting);
    };

    const toggleProductModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal-product')
    } else {
        document.body.classList.remove('active-modal-product')
    }

    if(modalSetting) {
        document.body.classList.add('active-modal-setting')
    } else {
        document.body.classList.remove('active-modal-setting')
    }

    const getMemberProducts = async() => {
        var InsertAPIURL = `${BASE_URL}/api/member/showProducts/`;
        let response = await fetch(InsertAPIURL, {
              method:'GET',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(memberAuthTokens.access)
              }
          })
          let data = await response.json()
    
          if(response.status === 200){
            // console.log("data: ",data);
            // console.log("products: ", data.products);
            // console.log("categories: ", data.categories);
            if(data.products.length > 0){
              setProducts(data.products);
              setCategories(data.categories);
            }      
            
          }else if(response.statusText === 'Unauthorized'){
            props.logout();
          }
      }

    function toggleLogout(){
        //console.log(categories, products);
        props.logout();
    }

    function clickedCategoryBtn(e, id){
        e.preventDefault();
        if(selectedCategory.includes(id)){ // REMOVE IN ARRAY
            setSelectedCategory(selectedCategory.filter(item=> id !== item));
            if(selectedCategory.length === 0 ){
                setSelectedAllCategory(true);
            }
        }
        else{ // APPEND ID
            setSelectedCategory(state=>[...state, id]);
            //console.log(selectedCategory);
            setSelectedAllCategory(false);
        }
    }

    function clickedAllCategory(e){
        e.preventDefault();
        setSelectedCategory([]);
        setSelectedAllCategory(true);
    }



    useEffect(() =>{
        getMemberProducts();
        //console.log(categories, products);
    }, []);
     

  return (
    <>
    <header className='header-background'>
        <div className='app-header'>
        <div style={{display: "flex"}}>
            <a href='/app' style={{color: "black"}}>
                <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
                style={{marginRight: "15px", marginTop: "3px"}}></img>
                <span className='kcooptitle-cms'>
                    <b> KASAGANA-KA  </b> COOPERATIVE
                </span>
            </a>
            

            <input className='app-input-search' type="text" placeholder='Search a Product...'>
            </input>
        </div>
        
            <div>
                <button className='app-header-buttons' style={{marginRight: "50px"}} onClick={toggleSettingModal}> <FontAwesomeIcon icon={faGear}/> Settings</button>
                <button className='app-header-buttons' onClick={toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
            </div>
        </div>
    </header>

    <center><span><b style={{fontFamily: "ITCAvantGardeStd-Bk,Arial,sans-serif", fontSize: "15px"}}> Products </b></span></center>

        <div className='app-body-categories'>
            <div className='body-categories'>   
                <span><b style={{marginRight: "10px"}}> Categories: </b></span>
                <div>
                    <button className='category-btn' onClick={(e)=>clickedAllCategory(e)} style={{backgroundColor: selectedAllCategory ? ('lightblue'):'transparent'}}>
                            ALL
                    </button>
                </div>
               
                {categories ? (categories.slice(0, 5).map((item, index)=>(
                    <div>
                        <button className='category-btn' key={item.Category_id} style={{backgroundColor: selectedCategory.includes(item.Category_id) ? ('lightblue'):('transparent')}}
                        onClick={(e)=>{clickedCategoryBtn(e, item.Category_id)}}>
                            {item.Category_name}
                        </button>
                    </div>

                    
                ))
                ):(<></>)}
                {categories ? (categories.length > 5 ? (
                    <div>
                        <button style={{border: "none", backgroundColor: "transparent", color: "blue"}}>
                                View All
                        </button>
                    </div>
                ):(null)):(null)}
                
            </div>
            

            <div>
                <button className='app-header-buttons' onClick={toggleProductModal}>
                 <FontAwesomeIcon icon={faAdd}/> Add Product
                </button>
            </div>
        </div>
        
        
        <div>
            {products ? (products.map((item, index)=>(
                <div>
                    
                    <ul className='list-cms'>
                        <li style={{padding: ".625em",textAlign: "center"}}>
                            <figure className='figure-cms'>
                                <img src={item.Product_image} style={{height: "115px", width: "auto", marginBottom: "2%"}}/>
                                <center>
                                    <b>{item.Product_title}</b>
                                </center>
                                
                            </figure>
                        </li>
                    </ul>

                    
                    
                </div>

                    
                ))
                ):(<center> No Product Shown </center>)}
        </div>

        {modal && (
        <AddProductModal modalToggle={toggleProductModal} categories={categories}/>
    )}
    {modalSetting && (
        <MemberSettingModal modalToggle={toggleSettingModal}/>
    )}
    </>
  )
}

export default MemberDashboard;