import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTag, faTrashCan, faPencilSquare, faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function InactiveProducts(props) {
  const inactiveProducts = props.inactiveProducts;
  const inactiveCategories = props.inactiveCategories;
  const inactiveTags = props.inactiveTags;

  const [currentListNumber, setCurrentListNumber] = useState(0);
  const [currentPage, setCurrentPage] =  useState(1);
  //console.log("inactiveProducts: ", inactiveProducts);

  return (
    <>
    {inactiveProducts.slice(currentListNumber, currentListNumber+12).map((item, index)=>(
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
                                onClick={e=>props.clickedEdit(e, item)}
                                ><FontAwesomeIcon icon={faPencilSquare}/></button>
                            <button className='btn-admin-status' 
                                onClick={e=>props.clickedDelete(e, item.Product_id)}
                                ><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                      
                  </figure>
              </li>
          </ul>
      </div>

          
      ))}

      <br style={{clear:"both"}}/>
        <div style={{marginTop: "30px"}}>
            <center>
                {/* {pageNumbers} */}

                {inactiveProducts ? (
                    <div className="page-buttons-wrapper" style={{display: "flex", flexWrap: "wrap", 
                    flexDirection: "row", justifyContent: "center", alignItems: "center"
                }}>
                        {(() => {
                            const pagesnum = [];
                            
                            let maxPages = parseInt(inactiveProducts.length / 12)
                            if(inactiveProducts.length / 12 > maxPages){
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
    </>
  )
}

export default InactiveProducts