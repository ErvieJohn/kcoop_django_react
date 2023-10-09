import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPencilSquare, faPlayCircle, faStopCircle, faTag, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './AdminStatusProducts.css';

function ActiveProducts(props) {
  const activeProducts = props.activeProducts;
  const activeCategories = props.activeCategories;
  const activeTags = props.activeTags;

  const [adminAuthToken, setMemberAuthToken] = useState(()=> localStorage.getItem('adminAuthToken') ? JSON.parse(localStorage.getItem('adminAuthToken')) : null);

  const [currentListNumber, setCurrentListNumber] = useState(0);

  return (
      activeProducts.slice(currentListNumber, currentListNumber+12).map((item, index)=>(
        <div 
            style={{borderRadius: "10px", backgroundColor: "#fff", 
                    padding: "0 10px", backgroundColor: "rgba(44, 39, 39, 0.125)"}}
        >
            <ul className='list-app-products'>
                <li className='list-products'  style={{maxHeight: "400px", minHeight: "400px"}}>
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
                        <label className='product-tags'> <FontAwesomeIcon icon={faTag} style={{marginRight: "2px", marginTop: "3px"}}/> Tags: </label>
                        <div className='product-tags-wrap' style={{height: "65px"}}>
                            {item.Tag.length > 0 ? (item.Tag.slice(0,5).map((tagProd, index) =>(
                                    <>
                                        {activeTags.filter((tag, index) => tagProd === tag.id) ? (
                                            <>
                                                <div  style={{marginRight: "5px", marginTop: "-10px"}}>  
                                                    <h5 className='product-tags-item'>{(activeTags.filter((tag, index) => tagProd === tag.id)[0].text)}
                                                    </h5> 
                                                </div>
                                                
                                                
                                            </>
                                            
                                            
                                        ):(null)}
                                    </>
                                ))
                            ):(<h5>No Tags</h5>)
                            }
                            
                            {item.Tag.length > 5 ? (<h5>...</h5>):(null)}
                            
                        </div>

                        <div style={{margin: "5px 0 0 10px", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                            <button className='btn-admin-status' 
                              onClick={e=>props.clickedInactivate(e, item.Product_id, "Inactive")}
                              ><FontAwesomeIcon icon={faStopCircle}/></button>
                            <button className='btn-admin-status' 
                              //onClick={e=>clickedDelete(e, item.Product_id)}
                              ><FontAwesomeIcon icon={faPencilSquare}/></button>
                            <button className='btn-admin-status' 
                              onClick={e=>props.clickedDelete(e, item.Product_id)}
                              ><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                        
                    </figure>
                </li>
            </ul>
        </div>

            
        ))
    
  )
}

export default ActiveProducts