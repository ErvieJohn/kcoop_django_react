import React, { useEffect, useState } from 'react';
import './MemberDashboard.css';
import { BASE_URL } from '../../../config';
import AddProductModal from '../Modal/AddProductModal';
import MemberSettingModal from '../Modal/MemberSettingModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faGear, faSearch, faSignOut, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MdSettings } from 'react-icons/md';

const MemberDashboard = (props) => {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    
    const [modal, setModal] = useState(false);

    const [modalSetting, setModalSetting] = useState(false);

    var [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedAllCategory, setSelectedAllCategory] = useState(true);

    const [inputProduct, setInputProduct] = useState("");

    var [pageNumbers, setPageNumbers] = useState([]);

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

    const updatePageNumber = (data) =>{
        pageNumbers = [];
        let pages = parseInt(data.products.length / 12) + 1;
        for(let i=0; i<pages; i++){
        pageNumbers.push(
        <button style={{marginRight: "10px"}}>
            {i+1}
        </button>)
        }
        setPageNumbers(pageNumbers);
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
              

              // FOR PAGE NUMBERS
              updatePageNumber(data);
              //console.log(pageNumbers)
              
            }      
            
          }else if(response.statusText === 'Unauthorized'){
            props.logout();
          }
    }

    function toggleLogout(){
        //console.log(categories, products);
        props.logout();
    }

    const clickedCategoryBtn = (e, id) => {
        e.preventDefault();
        if(selectedCategory.includes(id)){ // REMOVE IN ARRAY
            selectedCategory = selectedCategory.filter(item=> id !== item);
            setSelectedCategory(selectedCategory);
            //console.log("length: ", selectedCategory.length);
            if(selectedCategory.length === 0 ){
                setSelectedAllCategory(true);
                getMemberProducts();
            }
            else{
                searchMemberProduct();
            }
            
        }
        else{ // APPEND ID
            selectedCategory.push(id);
            setSelectedCategory(selectedCategory);
            //setSelectedCategory(state=>[...state, id], () => {});
            //console.log(selectedCategory);
            setSelectedAllCategory(false);
            searchMemberProduct();
        }
        

         // display searched member's products
    }

    const clickedAllCategory = (e) =>{
        e.preventDefault();
        setSelectedCategory([]);
        setSelectedAllCategory(true);
        
        
        if(inputProduct.length > 0){
            searchMemberProduct(); // display searched products
        }
        else{
            getMemberProducts(); // display all member's products
        }
    }



    // FOR SEARCHING THE PRODUCT
    function clickedSearch(e){
        e.preventDefault();
        //console.log("selectedCategory: ", inputProduct, "categories: ", selectedCategory);
        searchMemberProduct();
        //console.log("products: ", products, "category: ", categories);
    }

    // FOR CLEARING THE SEARCHES AND FILTERING CATEGORIES
    function clickedClear(e){
        e.preventDefault();
        //console.log("selectedCategory: ", inputProduct, "categories: ", selectedCategory);
        setInputProduct("");
        setSelectedCategory([]);
        getMemberProducts();
    }


    const searchMemberProduct = async() => {
        var InsertAPIURL = `${BASE_URL}/api/member/searchMemberProduct/`;
        var DataBody = {input_search: inputProduct, categories: selectedCategory};
        console.log("DataBody: ", DataBody);
        let response = await fetch(InsertAPIURL, {
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Bearer ' + String(memberAuthTokens.access)
              },
              body:JSON.stringify(DataBody)
          })
          let data = await response.json()
    
          if(response.status === 200){
            console.log("data: ",data);
            // console.log("products: ", data.products);
            // console.log("categories: ", data.categories);
            if(data.products.length > 0){
              setProducts(data.products);
              //setCategories(data.categories);

              updatePageNumber(data);
            }     
            else{
              setProducts(null);
              //setCategories(null);
            } 
            
          }else if(response.statusText === 'Unauthorized'){
            props.logout();
          }
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
            
            <form onSubmit={clickedSearch}>
                <input className='app-input-search' type="text" placeholder='Search a Product...'
                value={inputProduct}
                onChange={(text)=>{setInputProduct(text.target.value)}}
                />

                <button type="submit" className="app-header-buttons" style={{marginLeft: "5px"}}>
                    <FontAwesomeIcon icon={faSearch}/> Search
                </button>
            </form>
            <button type="button" className="app-header-buttons" style={{marginLeft: "10px"}} onClick={clickedClear}>
                <FontAwesomeIcon icon={faXmark}/> Clear
            </button>
            
        </div>
        
            <div>
                <button className='app-header-buttons' style={{marginRight: "10px"}} onClick={toggleSettingModal}> <FontAwesomeIcon icon={faGear}/> Settings</button>
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
                        <button className='category-btn' key={item.Category_id} style={{ display: products ? ("block"):("none"), backgroundColor: selectedCategory.includes(item.Category_id) ? ('lightblue'):('transparent')}}
                        onClick={(e)=>{clickedCategoryBtn(e, item.Category_id)}} >
                            {item.Category_name}
                        </button>
                    </div>

                    
                ))
                ):(<></>)}
                {categories ? (categories.length > 5 ? (
                    <div>
                        <button style={{width: "60px", border: "none", backgroundColor: "transparent", color: "blue", display: products ? ("block"):("none")}}>
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
        <center>
            {pageNumbers}
        </center>
        
        <div>
            {products ? (products.map((item, index)=>(
                <div>
                    
                    <ul className='list-cms'>
                        <li style={{padding: ".625em",textAlign: "center"}}>
                            <figure className='figure-cms'>
                                <center>
                                    <div style={{height: "200px", width: "200px", justifyContent: "center", justifyItems: "center", alignItems: "center"}}>
                                        <img src={item.Product_image} style={{height: "100%", width: "100%", marginBottom: "2%", objectFit:"cover"}}/>
                                    </div>
                                    <b>{item.Product_title}</b>
                                </center>
                                
                            </figure>
                        </li>
                    </ul>
                </div>

                    
                ))
                ):(<center> No Product Found </center>)}
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