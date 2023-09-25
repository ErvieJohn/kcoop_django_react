import React, { useEffect, useState } from 'react';
import './MemberDashboard.css';
import { BASE_URL } from '../../../config';
import AddProductModal from '../Modal/AddProductModal';
import MemberSettingModal from '../Modal/MemberSettingModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faAngleDoubleLeft, faAngleDoubleRight, faAngleDown, faAngleLeft, faAngleRight, faBackward, faBackwardFast, faFileCircleXmark, faForward, faForwardFast, faGear, faLessThan, faSearch, faSearchMinus, faSignOut, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MdSettings } from 'react-icons/md';
import ViewAllCategories from '../Modal/ViewAllCategories';
import jwt_decode from "jwt-decode";

const MemberDashboard = (props) => {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    const [member, setMember] = useState(()=> localStorage.getItem('memberAuthTokens') ? jwt_decode(localStorage.getItem('memberAuthTokens')) : null);

    const [modal, setModal] = useState(false);

    const [modalSetting, setModalSetting] = useState(false);

    const [categoriesModal, setCategoriesModal] = useState(false);

    var [selectedCategory, setSelectedCategory] = useState([]);
    var [selectedAllCategory, setSelectedAllCategory] = useState(true);

    const [searched, setSearched] = useState(false);

    const [inputProduct, setInputProduct] = useState("");

    var [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] =  useState(1);
    const [currentListNumber, setCurrentListNumber] = useState(0);

    const [dropdown, setDropdown] = useState(false);
    const [hoverDropdown, setHoverDropdown] = useState(false);

    const maxCategories = window.innerHeight < 600 ? 2: 5;

    function clickedDropdown(){
        setDropdown(!dropdown);
    }

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

        if(inputProduct.length > 0){
            setSearched(true);
        }
        else{
            setSearched(false);
        }
        
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

        setSearched(!searched);
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
                    style={{backgroundImage: <FontAwesomeIcon icon={faSearch}/>}}
                    value={inputProduct}
                    onChange={(text)=>{setInputProduct(text.target.value)}}
                    />
                    {searched ? (
                        <button type="button" style={{marginLeft: "-40px", border: "none", backgroundColor: "transparent",
                                            position: "absolute", top: "24px"}} onClick={(e)=>{clickedClear(e)}}>
                            <FontAwesomeIcon icon={faXmark}size='2x' color='black'/>
                        </button>
                    ):(
                        <button type="submit" style={{marginLeft: "-40px", border: "none", backgroundColor: "transparent",
                                            position: "absolute", top: "24px"}}>
                        <FontAwesomeIcon icon={faSearch} size='2x' color='black'/> 
                        </button>
                    )}
                    
                </form>
                
                
            </div>

            <div className='dropdown-profile-wrapper'>
                <button className='dropdown-btn-setting' type="button" 
                    style={{border: "none", backgroundColor: "transparent", padding: "10px"}} onClick={clickedDropdown}
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
                    {"Hi, " + member.username + "!"} 
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
                    <button className="dropdown-profile-btn" style={{borderRadius: "8px 8px 0 0"}} onClick={toggleSettingModal}> <FontAwesomeIcon icon={faGear}/> My Profile</button>
                    <button className="dropdown-profile-btn" style={{borderRadius: "0 0 8px 8px"}} onClick={toggleLogout}> <FontAwesomeIcon icon={faSignOut}/> Logout</button>
                </div> 
            </div>
            
        </div>
    </header>
    {searched ? (
        <center><span><b style={{fontFamily: "ITCAvantGardeStd-Bk,Arial,sans-serif", fontSize: "26px"}}> Search Result </b></span></center>
    ):(null)}
    

        <div className='app-body-categories' style={{marginTop: "30px"}}>
            <div className='body-categories'>   
                <span><b style={{marginRight: "10px"}}> Categories: </b></span>
                <div>
                    <button className='category-btn' onClick={(e)=>clickedAllCategory(e)} style={{backgroundColor: selectedAllCategory ? ('lightblue'):'transparent'}}>
                            ALL
                    </button>
                </div>
               
                {categories ? (categories.slice(0, maxCategories).map((item, index)=>(
                    <div>
                        <button className='category-btn' key={item.Category_id} style={{ display: products ? ("block"):("none"), backgroundColor: selectedCategory.includes(item.Category_id) ? ('lightblue'):('transparent')}}
                        onClick={(e)=>{clickedCategoryBtn(e, item.Category_id, item)}} >
                            {item.Category_name}
                        </button>
                    </div>

                    
                ))
                ):(<></>)}
                {categories ? (categories.length > maxCategories ? (
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

        <div style={{marginTop: "30px 50px 50px 0"}}>
            {products ? (products.slice(currentListNumber, currentListNumber+12).map((item, index)=>(
                <div 
                    style={{borderRadius: "10px", backgroundColor: "#fff", 
                            padding: "0 10px", backgroundColor: "rgba(44, 39, 39, 0.125)"}}
                >
                    <ul className='list-app-products'>
                        <li className='list-products'>
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
                    <FontAwesomeIcon icon={faSearchMinus} size='5x'/>
                    <br/>
                    <b> No Product Found </b>
                    {inputProduct.length > 0 ? (
                        <>
                            <br/>
                            <button type="button" className="app-header-buttons" style={{marginLeft: "10px"}} onClick={(e)=>{clickedClear(e)}}>
                                <FontAwesomeIcon icon={faFileCircleXmark}/> Clear Searches ?
                            </button>
                        </>
                        ) : (
                            null
                        )

                    }
                    
                    </center>)}
        </div>
        <br style={{clear:"both"}}/>
        <div style={{marginTop: "30px"}}>
            <center>
                {/* {pageNumbers} */}

                {products ? (
                    <div className="page-buttons-wrapper" style={{display: "flex", flexWrap: "wrap", 
                    flexDirection: "row", justifyContent: "center", alignItems: "center"
                }}>
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
                                    style={{marginRight:"10px", border: "none", backgroundColor: "transparent", color: currentPage === 1 ? ("gray"):("black")}}
                                    onClick={()=>{setCurrentPage(1);
                                                    setCurrentListNumber(0);
                                                    //console.log("cur button: ", currentPage);
                                                    //console.log("products length: ", products.length);
                                                }}>
                                        <FontAwesomeIcon icon={faAngleDoubleLeft} size='2x'/>
                                    </button>
                                </div>

                                <div>
                                    <button disabled={currentPage > 1 ? (false) : (true)}
                                    style={{marginRight:"10px", border: "none", backgroundColor: "transparent", color: !(currentPage > 1) ? ("gray"):("black")}}
                                    onClick={()=>{setCurrentPage(currentPage-1);
                                                    setCurrentListNumber(currentListNumber-12);
                                                    //console.log("cur button: ", currentPage);
                                                    //console.log("products length: ", products.length);
                                                }}>
                                        <FontAwesomeIcon icon={faAngleLeft} size='2x'/>
                                    </button>
                                </div>
                            </>
                            )

                            //for(let i=0;i < maxPages; i++){ // limit to 12 products per page
                            for(let i=(currentPage-2); i < currentPage+1; i++){
                                if(i<=-1 || i>=maxPages){
                                    pagesnum.push(
                                        <button style={{marginRight: "10px", border: "none", backgroundColor: "transparent", 
                                        borderRadius: "50%", width: "50px", height: "50px"}}
                                        disabled={true}>{"  "}</button>
                                    )
                                }
                                else{
                                    pagesnum.push(
                                        <button style={{marginRight: "10px", borderRadius: "50%", width: "50px", 
                                            height: "50px", border: i+1 === currentPage ? ("0px solid black"):("5px solid black")}}
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
                                    style={{marginLeft:"10px", border: "none", backgroundColor: "transparent", color: maxPages === currentPage ? ("gray"):("black")}}
                                    onClick={()=>{setCurrentPage(currentPage+1);
                                                    setCurrentListNumber(currentListNumber+12);
                                                    //console.log("cur button: ", currentPage);
                                                    //console.log("products length: ", products.length);
                                                }}>
                                        <FontAwesomeIcon icon={faAngleRight} size='2x'/>
                                    </button>
                                </div>
                                <div>
                                    
                                    <button disabled={currentPage === maxPages ? (true) : (false)}
                                    style={{marginLeft:"10px", border: "none", backgroundColor: "transparent", color: currentPage === maxPages ? ("gray"):("black")}}
                                    onClick={()=>{setCurrentPage(maxPages);
                                                    setCurrentListNumber((maxPages)*12 - 12);
                                                    //console.log("cur button: ", currentPage);
                                                    //console.log("products length: ", products.length);
                                                }}>
                                        <FontAwesomeIcon icon={faAngleDoubleRight} size='2x'/>
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