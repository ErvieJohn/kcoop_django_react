import {React, useContext, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { AuthContext } from '../../../../context/AuthContext';
import { BASE_URL } from '../../../../config';
import LoadingSpinner from '../../../LoadingSpinner';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHotkeys } from 'react-hotkeys-hook'

// for passing props with outlet
import { useOutletContext } from "react-router-dom";

function CMSCP() {
  const [User] = useOutletContext();
  const user = JSON.parse(User);

  const {getWhoWeAreData, getWhoWeAre} = useContext(AuthContext);

  const titlePage = "COOPERATIVE PRINCIPLES";

  var edit = "";
  var edited = "";

  const [isEnable, setIsEnable] = useState(true);

  const [text, setText] = useState("");
  const [executed, setExecuted] = useState(false);
  const [oldText, setOldText] = useState("");

  useEffect(()=>{
    getWhoWeAre(titlePage);
  },[])
  

  const saveTextEdited = (editedText) => {
    var InsertAPIURL = `${BASE_URL}/updateWhoweare/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {WhoWeAre_title: titlePage, edited: editedText, username: user[0].username, staff: user[0].Staff}; // for kwentong -  k
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
          
  }

  if(getWhoWeAreData.length>0){
    edit = getWhoWeAreData[0]["WhoWeAre_content"]
    edited = edit;
  
    //setText(edited);
    //console.log("1");
  }

  useHotkeys('alt+s', (e) => {
    if(!isEnable){
      saveClicked();
    }
  }, [isEnable])
  

  function saveClicked (){
    alert("Saved!");
    //console.log(edited);
    saveTextEdited(edited);
    /*localStorage.setItem('oldText', edited);
    let oldTxt = localStorage.getItem('oldText');
    let oldText;
    if(oldTxt){
      oldText = oldTxt;
    }*/
    setText(edited);
    setOldText(edited);
    
    //console.log(oldText.length);
    setIsEnable(true);
  }

  return (
    <>
    {getWhoWeAreData ? (<>
      <div style={{margin: "20px"}}> 
        <center>
          <h1>
            <b>{titlePage}</b>
          </h1>
        </center>
        <CKEditor
          editor={ClassicEditor}
          //data="<p>Hello from CKEditor 5!</p><h2>Try the inspector below</h2><ul><li>Check the Model</li><li>See the View</li><li>Check available commands</li></ul>"
          data = {edit}
          /*onReady={(editor) => {
            console.log('CKEditor React Component is ready to use!', editor);
            CKEditorInspector.attach(editor);
          }}*/

          onChange={(event, editor) => {
            
            const data = editor.getData();
            edited = data;
            if(edited==text){
              //disabled
              setIsEnable(true);
            }
            else if(edited == oldText){
              //disabled
              setIsEnable(true);
            }
            else{
              //enabled
              setIsEnable(false);
            }
            
            
            if (!executed) {
                setExecuted(true);
                // do something
                //disabled
                setIsEnable(true);
                console.log("Executed");
                setOldText(edited);
            }
           
          
            //edit = text;
            /*
            let oldTxt = localStorage.getItem('oldText');
            
            let oldText;
            if(oldTxt){
              oldText = oldTxt;
            }
            */
            
            //console.log(edited.length, text.length);
            
            
            
          }}
        />
        <center id="icon-text-cms">
          <button className='btn-cms' onClick={saveClicked} style={{backgroundColor: !isEnable ? 'rgb(0, 254, 254)' : 'rgb(102, 110, 110)', color: !isEnable ? 'black':'white', width: "200px", marginTop: "15px"}} disabled={isEnable}><FontAwesomeIcon icon={faSave}/> SAVE</button>
           <div style={{marginLeft: "10px", marginTop: "10px"}}>
            <h4>OR <code style={{color: !isEnable ? '#c7254e' :'rgb(102, 110, 110)'}}>ALT + S</code></h4>
          </div> 
        </center>
      </div>
      </>) :
      (<>
        <LoadingSpinner/>
      </>)

    }
    </>
  )
}

export default CMSCP