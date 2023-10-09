import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTag, faTrashCan, faPencilSquare } from '@fortawesome/free-solid-svg-icons';


function InactiveProducts(props) {
  const inactiveProducts = props.inactiveProducts;
  const inactiveCategories = props.inactiveCategories;
  const inactiveTags = props.inactiveTags;

  const [currentListNumber, setCurrentListNumber] = useState(0);

  //console.log("inactiveProducts: ", inactiveProducts);

  return (
    inactiveProducts.slice(currentListNumber, currentListNumber+12).map((item, index)=>(
      <div 
          style={{borderRadius: "10px", backgroundColor: "#fff", 
                  padding: "0 10px", backgroundColor: "rgba(44, 39, 39, 0.125)"}}
      >
          <ul className='list-app-products'>
              <li className='list-products' style={{maxHeight: "400px", minHeight: "400px"}}>
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
                      <div className='product-tags-wrap'>
                          {item.Tag.length > 0 ? (item.Tag.slice(0,5).map((tagProd, index) =>(
                                  <>
                                      {inactiveTags.filter((tag, index) => tagProd === tag.id) ? (
                                          <>
                                              <div  style={{marginRight: "5px", marginTop: "-10px"}}>  
                                                  <h5 className='product-tags-item'>{(inactiveTags.filter((tag, index) => tagProd === tag.id)[0].text)}
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
                                onClick={e=>props.clickedInactivate(e, item.Product_id, "Active")}
                                ><FontAwesomeIcon icon={faPlayCircle}/></button>
                            <button className='btn-admin-status' 
                                //</div>onClick={e=>DeleteButton(e, item.Home_id)}
                                ><FontAwesomeIcon icon={faPencilSquare}/></button>
                            <button className='btn-admin-status' 
                                //</div>onClick={e=>DeleteButton(e, item.Home_id)}
                                ><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                      
                  </figure>
              </li>
          </ul>
      </div>

          
      ))
  )
}

export default InactiveProducts