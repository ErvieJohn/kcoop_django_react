import React, { useEffect, useState } from 'react';
import './MemberDashboard.css';
import { BASE_URL } from '../../../config';
import AddProductModal from '../Modal/AddProductModal';

const MemberDashboard = (props) => {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    const [memberAuthTokens, setMemberAuthTokens] = useState(()=> localStorage.getItem('memberAuthTokens') ? JSON.parse(localStorage.getItem('memberAuthTokens')) : null);
    
    const [modal, setModal] = useState(false);

    const toggleProductModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal-product')
    } else {
        document.body.classList.remove('active-modal-product')
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
        console.log(categories, products);
        props.logout();
    }

    useEffect(() =>{
        getMemberProducts();
        //console.log(categories, products);
    }, []);
     

  return (
    <>
        <div className='app-header'>
        <div style={{display: "flex"}}>
            <img src="/static/media/kcoop.png" width="45px" align="left" className="logo-cms" 
            style={{marginRight: "15px", marginTop: "3px"}}></img>
            <span className='kcooptitle-cms'>
                <b> KASAGANA-KA  </b> COOPERATIVE
            </span>

            <input className='search-product' placeholder='Search a Product'>
            </input>
        </div>
        
        <div>
            <button style={{marginRight: "50px"}}>Settings</button>
            <button onClick={toggleLogout}>LOGOUT</button>
        </div>
        
        </div>

        <div className='app-body'>
            <span><b> Categories </b></span>
            <button >
                    ALL
            </button>
            {categories ? (categories.map((item, index)=>(
                <button key={index}>
                    {item.Category_name}
                </button>
            ))
            ):(<></>)}
        </div>
        <div style={{margin: "0px 50px",display: "flex", justifyContent: "flex-end"}}>
            <button onClick={toggleProductModal}>
                    Add Product
            </button>
        </div>
            <center><span><b> Products </b></span></center>
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
    </>
  )
}

export default MemberDashboard;