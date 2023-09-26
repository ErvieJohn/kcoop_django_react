import {React, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];

function TagsModal(props) {
    const [tags, setTags] = useState([]);
    var [suggestions, setSuggestions] = useState([]);
    var [lenSuggestions, setLenSuggestions] = useState(15);

    var [errorMessage, setErrorMessage] = useState(" ");

    const getTags = () => {
        // var allTags = props.tags;
        // console.log("allTags: ", allTags);
          
        // allTags.forEach((element,index) => {
        //     allTags[index]["id"] = allTags[index]["Tag_id"] ;
        //     delete allTags[index]["Tag_id"];

        //     allTags[index]["text"] = allTags[index]["Tag_name"];
        //     delete allTags[index]["Tag_name"];

        // });
        
        
        suggestions = props.tags;
        // for(let i=0; i<suggestions.length; i++){
        //     suggestions[i]["id"] = suggestions[i]["Tag_id"] ;
        //     delete suggestions[i]["Tag_id"];

        //     suggestions[i]["text"] = suggestions[i]["Tag_name"];
        //     delete suggestions[i]["Tag_name"];
        // }

        // suggestions.forEach((element,index) => {
        //     suggestions[index]["id"] = suggestions[index]["Tag_id"] ;
        //     delete suggestions[index]["Tag_id"];

        //     suggestions[index]["text"] = suggestions[index]["Tag_name"];
        //     delete suggestions[index]["Tag_name"];

        // });
        console.log("suggestions: ", props.tags);

        setSuggestions(suggestions);
    
        //console.log("allTags: ", allTags);
    }
    

    //console.log("TAGS MODAL: ", props.tags);

    // props.tags.forEach((element,index) => {
        
    // });

    const handleDelete = i => {
        let addTag = tags.filter((tag, index) => index === i);
        console.log("addTag: ", addTag);
        var tempTag = suggestions;
        tempTag.push(addTag[0]);
        suggestions = tempTag;
        setSuggestions(suggestions);

        setTags(tags.filter((tag, index) => index !== i));
        
      };
    
    const handleAddition = tag => {
        console.log("tag: ", tag);
        if(suggestions.some(e => e.text == tag.text)) { // CHECKING IF THIS TAG EXIST
            setTags([...tags, tag]);
            let delTag = suggestions.filter(item=> item.text !== tag.text);
            setSuggestions(delTag);
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
    
    //   const handleTagClick = index => {
    //     console.log('The tag at index ' + index + ' was clicked');
    //   };

      const [toggleSeelAll, setToggleSeeAll] = useState(false);

      function clickedSeeAllTags(e){
        e.preventDefault();
        setToggleSeeAll(!toggleSeelAll);

        if(toggleSeelAll){
            lenSuggestions = suggestions.length;
            setLenSuggestions(lenSuggestions);
        }
        else{
            lenSuggestions = 15;
            setLenSuggestions(lenSuggestions);
        }
            
      }

    useEffect (() =>{
        //console.log("allTags: ", props.tags);
        getTags();
        //console.log("zzzzzzzzzzzzzzzz")
    }, [])

  return (
    <div className="modal-login">
        <div onClick={props.modalToggle} className="overlay-modal-setting">
        </div>
        <div className="modal-login-content">
              <div className="Auth-form-modal"> {/*method="post"  onSubmit={submitForm} */}
                <h3 className="Auth-form-title-modal">Search by Tags</h3>
                <div className="Auth-form-content-modal">
                    <div className="form-group-modal mt-3">
                        <center>
                            <label style={{color: "red"}}>{errorMessage}</label>
                        </center>
                        <label>Enter Tags:</label>
                        
                        <ReactTags
                            className="form-control-modal mt-1"
                            tags={tags}
                            //suggestions={suggestions}
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
                            <button type="button" className="btn-modal-login"  style={{color: "black", marginBottom: "5px"}}>
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
                                        <button style={{width: "100px", border: "none", backgroundColor: "transparent", color: "blue"}}
                                            onClick={clickedSeeAllTags}>
                                                {!toggleSeelAll ? ("See All Tags"):("Less Tags")}
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