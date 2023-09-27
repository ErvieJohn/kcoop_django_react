import {React, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faClose, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagsModal(props) {

    const [tags, setTags] = useState([]);
    var [suggestions, setSuggestions] = useState(props.tags ? (props.tags):([]));
    var [lenSuggestions, setLenSuggestions] = useState(15);

    var [errorMessage, setErrorMessage] = useState(" ");

    const handleDelete = i => {
        let addTag = tags.filter((tag, index) => index === i);
        //console.log("addTag: ", addTag);
        var tempTag = suggestions;
        tempTag.push(addTag[0]);
        suggestions = tempTag;
        setSuggestions(suggestions);

        setTags(tags.filter((tag, index) => index !== i));
        
      };
    
    const handleAddition = tag => {
        //console.log("tag: ", tag);
        if(suggestions.some(e => e.text == tag.text)) { // CHECKING IF THIS TAG EXIST
            setTags([...tags, tag]);
            let delTag = suggestions.filter(item=> item.text !== tag.text);
            setSuggestions(delTag);
            errorMessage = ""
            setErrorMessage(errorMessage);
        }
        else{
            errorMessage = "This tag is not in available list"
            setErrorMessage(errorMessage);
        }

    };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };

      var [toggleSeelAll, setToggleSeeAll] = useState(false);

      function clickedSeeAllTags(e){
        e.preventDefault();
        toggleSeelAll = !toggleSeelAll
        setToggleSeeAll(toggleSeelAll);

        if(toggleSeelAll){
            lenSuggestions = suggestions.length;
            setLenSuggestions(lenSuggestions);
        }
        else{
            lenSuggestions = 15;
            setLenSuggestions(lenSuggestions);
        }
            
      }

    function clickedSearchTag(){
        if(tags.length > 0){
            props.toggleSearchTag(tags);
            props.modalToggle();
        }
        else{
            errorMessage = "Please add atleast one tag";
            setErrorMessage(errorMessage);
        }
        
    }

  return (
    <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content" style={{marginTop:"20px"}}>
              <div className="Auth-form-modal"> {/*method="post"  onSubmit={submitForm} */}
                <h3 className="Auth-form-title-modal">Search by Tags</h3>
                <div className="Auth-form-content-modal" style={{overflowY: 'scroll', height: window.innerHeight - 200}}>
                    <div className="form-group-modal mt-3">
                        <center>
                            <label style={{color: "red"}}>{errorMessage}</label>
                        </center>
                        <label>Enter Tags:</label>
                        
                        <ReactTags
                            className="form-control-modal mt-1"
                            tags={tags}
                            suggestions={suggestions}
                            //delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            //inputFieldPosition="bottom"
                            inputFieldPosition="top"
                            autocomplete
                            placeholder='Please Enter a tag'
                            handleInputChange={text=>{
                                errorMessage = "";
                                setErrorMessage(errorMessage);}}
                            autofocus={true}
                            allowDeleteFromEmptyInput={false}
                            //labelField={'Tag_name'}
                        />

                        </div>

                        <div className="d-grid-modal gap-2 mt-3">
                            <button type="button" className="btn-modal-login"  style={{color: "black", marginBottom: "5px"}}
                                onClick={clickedSearchTag}
                            >
                                <FontAwesomeIcon icon={faSearch} color='black'/> Search
                            </button>
                        </div>

                        <div>
                            <label>Available Tags:</label>

                            {suggestions.length > 0 ? (
                                <ul className='parent-modal-categories'>
                                    {suggestions.slice(0,lenSuggestions).map((item, index)=>(
                                        <li className='child-modal-categories'>
                                            <div>
                                                <button className='category-btn' key={item.id} 
                                                onClick={(e)=>{handleAddition(item)}} 
                                                >
                                                    {item.text}
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                
                            ):(
                                <center>
                                    <label>No Available tags</label>
                                </center>
                            )}
                    
                            {suggestions ? (
                                suggestions.length > 15 ? (
                                    <center>
                                        <button style={{width: "150px", border: "none", backgroundColor: "transparent", 
                                            color: "black", marginTop: "10px"}}
                                            onClick={clickedSeeAllTags}>
                                                {!toggleSeelAll ? (
                                                    <>
                                                        <FontAwesomeIcon icon={faArrowDown}/> See More Tags
                                                    </>
                                                    
                                                    ):(
                                                        <>
                                                            <FontAwesomeIcon icon={faArrowUp}/> See Less Tags
                                                        </>
                                                        )}
                                        </button>
                                    </center>
                                    
                                ):(null)
                            ):(null)}
                            
                        
                        </div>
                    
                </div>
                
              </div>

              <button className="close-modal-login" onClick={props.modalToggle}>
                  <FontAwesomeIcon icon={faClose} size = '2x' />
              </button> 
          </div>
      </div>
  )
}

export default TagsModal