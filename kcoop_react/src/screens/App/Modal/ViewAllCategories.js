import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../../config';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './ViewAllCategories.css';

function ViewAllCategories(props) {

  return (
      <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content">
              <div className="Auth-form-modal"> {/*method="post"  onSubmit={submitForm} */}
                <h3 className="Auth-form-title-modal">Categories</h3>
                <div className="Auth-form-content-modal">
                    <ul className='parent-modal-categories'>
                        
                            {props.categories ? (props.categories.map((item, index)=>(
                            <li className='child-modal-categories'>
                                <div>
                                
                                    <button className='category-btn' key={item.Category_id} 
                                    style={{ backgroundColor: props.selectedCategory.includes(item.Category_id) ? ('lightblue'):('transparent')}}
                                    onClick={(e)=>{props.clickedCategoryBtn(e, item.Category_id, item)}} 
                                    >
                                        {item.Category_name}
                                    </button>
                                
                                
                                </div>
                            </li>
                                
                            ))
                            ):(null)}
                        
                    </ul>
                    
                </div>
                
              </div>

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button> 
          </div>
      </div>
  )
}

export default ViewAllCategories