import {React, useContext, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { AuthContext } from '../../../context/AuthContext';
import { BASE_URL } from '../../../config';
import LoadingSpinner from '../../LoadingSpinner';

function CMSHistory() {
  const {getWhoWeAreData, getWhoWeAre} = useContext(AuthContext);

  const titlePage = "HISTORY";

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
        <p>HISTORYYYYY</p>
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
        <button onClick={saveClicked} disabled={isEnable}>SAVE</button>
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