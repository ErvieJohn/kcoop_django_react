import React, { useEffect, useState } from 'react';
import './MemberDashboard.css';
import { BASE_URL } from '../../../config';
import AddProductModal from '../Modal/AddProductModal';
import MemberSettingModal from '../Modal/MemberSettingModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faFileCircleXmark, faGear, faSearch, faSearchMinus, faSignOut, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MdSettings } from 'react-icons/md';
import ViewAllCategories from '../Modal/ViewAllCategories';

const MemberDashboard = (props) => {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    
    const [modal, setModal] = useState(false);

    const [modalSetting, setModalSetting] = useState(false);

    const [categoriesModal, setCategoriesModal] = useState(false);

    var [selectedCategory, setSelectedCategory] = useState([]);
    var [selectedAllCategory, setSelectedAllCategory] = useState(true);

    const [inputProduct, setInputProduct] = useState("");

    var [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] =  useState(1);
    const [currentListNumber, setCurrentListNumber] = useState(0);

    const toggleSettingModal = () => {
        setModalSetting(!modalSetting);
    };

    const toggleProductModal = () => {
        setModal(!modal);
    };

    const toggleCategoriesModal = () =>{
        setCategoriesModal(!categoriesModal);
    }

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

    if(categoriesModal) {
        document.body.classList.add('active-modal-setting')
    } else {
        document.body.classList.remove('active-modal-setting')
    }

    const defaultPages= () =>{
        setCurrentPage(1);
        setCurrentListNumber(0);
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
              //updatePageNumber(data);
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

    const clickedCategoryBtn = (e, id,itemCategory) => {
        e.preventDefault();
        defaultPages();

        if(selectedCategory.includes(id)){ // REMOVE IN ARRAY
            //console.log("categories: ", categories);

            selectedCategory = selectedCategory.filter(item=> id !== item);
            setSelectedCategory(selectedCategory);
            //console.log("length: ", selectedCategory.length);
            let categ = categories.filter(item=> item.Category_id !== id); // SET THE SELECTED ID TO BOTTOM
            categ.push(itemCategory);
            //console.log("categ: ", categ);
            setCategories(categ);

            if(selectedCategory.length === 0 ){
                selectedAllCategory = true;
                setSelectedAllCategory(selectedAllCategory);

                if(inputProduct.length > 0){
                    searchMemberProduct();
                }
                else{
                    getMemberProducts();
                }
               
            }
            else{
                searchMemberProduct();
            }
            
        }
        else{ // APPEND ID
            let categ = categories.filter(item=> item.Category_id !== id);  // SET THE SELECTED ID TO BOTTOM
            categ.unshift(itemCategory);
            //console.log("categ: ", categ);
            setCategories(categ);


            selectedCategory.push(id);
            setSelectedCategory(selectedCategory);
            //setSelectedCategory(state=>[...state, id], () => {});
            //console.log(selectedCategory);
            selectedAllCategory = false;
            setSelectedAllCategory(selectedAllCategory);
            searchMemberProduct();
            
        }
        

         // display searched member's products
    }

    const clickedAllCategory = (e) =>{
        e.preventDefault();
        defaultPages();
        selectedCategory = [];
        setSelectedCategory(selectedCategory);
        selectedAllCategory = true;
        setSelectedAllCategory(selectedAllCategory);
        
        
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
        defaultPages();
        searchMemberProduct(true);

        //console.log("products: ", products, "category: ", categories);
    }

    // FOR CLEARING THE SEARCHES AND FILTERING CATEGORIES
    function clickedClear(e){
        e.preventDefault();
        //console.log("selectedCategory: ", inputProduct, "categories: ", selectedCategory);
        setInputProduct("");
        defaultPages();

        selectedCategory = [];
        setSelectedCategory(selectedCategory);
        getMemberProducts();
    }


    const searchMemberProduct = async(clickBySearch) => {
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

              //return data;
              if(clickBySearch){
                setCategories(data.categories);
              }
              
              //updatePageNumber(data);
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
                        onClick={(e)=>{clickedCategoryBtn(e, item.Category_id, item)}} >
                            {item.Category_name}
                        </button>
                    </div>

                    
                ))
                ):(<></>)}
                {categories ? (categories.length > 5 ? (
                    <div>
                        <button style={{width: "60px", border: "none", backgroundColor: "transparent", color: "blue", display: products ? ("block"):("none")}}
                            onClick={toggleCategoriesModal}>
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
            {/* {pageNumbers} */}

            {products ? (
                <div className="page-buttons-wrapper" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
                    {(() => {
                        const pagesnum = [];
                        
                        let maxPages = parseInt(products.length / 12)
                        if(products.length / 12 > maxPages){
                            maxPages += 1;
                        }
                        //console.log(maxPages);

                        pagesnum.push(
                        <>
                            <div>
                                <button disabled={currentPage === 1 ? (true) : (false)}
                                onClick={()=>{setCurrentPage(1);
                                                setCurrentListNumber(0);
                                                //console.log("cur button: ", currentPage);
                                                //console.log("products length: ", products.length);
                                            }}>
                                    Forward to First
                                </button>
                            </div>

                            <div>
                                <button disabled={currentPage > 1 ? (false) : (true)}
                                onClick={()=>{setCurrentPage(currentPage-1);
                                                setCurrentListNumber(currentListNumber-12);
                                                //console.log("cur button: ", currentPage);
                                                //console.log("products length: ", products.length);
                                            }}>
                                    Prev
                                </button>
                            </div>
                        </>
                        )

                        //for(let i=0;i < maxPages; i++){ // limit to 12 products per page
                        for(let i=(currentPage-2); i < currentPage+1; i++){
                            if(i<=-1 || i>=maxPages){
                                pagesnum.push(
                                    <button style={{marginRight: "10px", border: "none", backgroundColor: "transparent", }}
                                    disabled={true}>{" "}</button>
                                )
                            }
                            else{
                                pagesnum.push(
                                    <button style={{marginRight: "10px"}}
                                        key={i}
                                        onClick={(event)=>{
                                            event.target.disabled = true;
                                            setCurrentPage(i+1);
                                            setCurrentListNumber(((i+1)*12)-12);
                                            //console.log("index button: ", i+1, currentPage, currentListNumber);
                                            }}
                                        disabled={i+1 === currentPage ? (true):(false)}
                                        >
                                                
                                            {i+1}
                                    </button>)
                            }
                            
                        }

                        pagesnum.push(
                        <>
                            <div>
                                <button disabled={maxPages === currentPage ? (true) : (false)}
                                onClick={()=>{setCurrentPage(currentPage+1);
                                                setCurrentListNumber(currentListNumber+12);
                                                //console.log("cur button: ", currentPage);
                                                //console.log("products length: ", products.length);
                                            }}>
                                    Next
                                </button>
                            </div>
                            <div>
                                
                                <button disabled={currentPage === maxPages ? (true) : (false)}
                                onClick={()=>{setCurrentPage(maxPages);
                                                setCurrentListNumber((maxPages)*12 - 12);
                                                //console.log("cur button: ", currentPage);
                                                //console.log("products length: ", products.length);
                                            }}>
                                    Forward to Last
                                </button>
                            </div>
                        </>
                        )

                        return pagesnum;

                    })()}
                </div>
                
            ): (
                null
            )}
           
        </center>
        
            <div>
                {products ? (products.slice(currentListNumber, currentListNumber+12).map((item, index)=>(
                    <div>
                        
                        <ul className='list-cms'>
                            <li style={{padding: ".625em",textAlign: "center"}}>
                                <figure className='figure-cms'>
                                    <center>
                                        <div style={{height: "200px", width: "200px", justifyContent: "center", justifyItems: "center", alignItems: "center"}}>
                                            <img src={item.Product_image} style={{height: "100%", width: "100%", marginBottom: "2%", objectFit:"cover"}}/>
                                        </div>
                                        <div>
                                            {item.Product_title.length > 25 ? 
                                                (<b>{item.Product_title.substring(0,25) + "..."}</b>):
                                                (<b>{item.Product_title}</b>)}
                                        </div>
                                        
                                    </center>
                                    
                                </figure>
                            </li>
                        </ul>
                    </div>

                        
                    ))
                    ):(<center> 
                        <FontAwesomeIcon icon={faSearchMinus}/>
                        <b> No Product Found </b>
                        {inputProduct.length > 0 ? (
                            <button type="button" className="app-header-buttons" style={{marginLeft: "10px"}} onClick={clickedClear}>
                                <FontAwesomeIcon icon={faFileCircleXmark}/> Clear Searches ?
                            </button>) : (
                                null
                            )

                        }
                        
                        </center>)}
            </div>

    {modal && (
        <AddProductModal modalToggle={toggleProductModal} categories={categories}/>
    )}
    {modalSetting && (
        <MemberSettingModal modalToggle={toggleSettingModal}/>
    )}

    {categoriesModal && (
        <ViewAllCategories modalToggle={toggleCategoriesModal} categories={categories} 
        selectedCategory={selectedCategory} clickedCategoryBtn={clickedCategoryBtn}/>
    )}
    </>
  )
}

export default MemberDashboard;