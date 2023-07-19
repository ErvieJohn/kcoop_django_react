import {React, useContext, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { AuthContext } from '../../../context/AuthContext';
import { BASE_URL } from '../../../config';
import LoadingSpinner from '../../LoadingSpinner';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useHotkeys } from 'react-hotkeys-hook';

function CMSHistory() {
  const {getWhoWeAreData, getWhoWeAre} = useContext(AuthContext);

  const titlePage = "HISTORY";

  var edit = "";
  var edited = "";

  const [isEnable, setIsEnable] = useState(true);

  const [text, setText] = useState("");
  const [executed, setExecuted] = useState(false);
  const [oldText, setOldText] = useState("");
  const [count, setCount] = useState(0);

  // useHotkeys('ctrl+s', () => {saveClicked()
  //   setCount(prevCount =>
  //     prevCount + 1)})
  // console.log(count);
  
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
      var DataBody = {WhoWeAre_title: titlePage, edited: editedText}; // for kwentong -  k
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

  

  function saveClicked (){
    saveTextEdited(edited);
    setText(edited);
    setOldText(edited);
   
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
        <div>
          <CKEditor
            editor={ClassicEditor}
            data = {edit}

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
            }}
          />
        </div>
        <center id="icon-text-cms">
          <button className='btn-cms' onClick={saveClicked} style={{backgroundColor: !isEnable ? 'rgb(0, 254, 254)' : 'rgb(102, 110, 110)', color: !isEnable ? 'black':'white', width: "200px", marginTop: "15px"}} disabled={isEnable}><FontAwesomeIcon icon={faSave}/> SAVE</button>
           <div style={{marginLeft: "10px", marginTop: "10px"}}>
            <h4>OR <code style={{color: !isEnable ? '#c7254e' :'rgb(102, 110, 110)'}}>CTRL + S</code></h4>
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

export default CMSHistory