import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function AnnualReports() {
  const titlePage = "Annual Reports";
  var [Data, setData] = useState([]);
  var [files, setFiles] = useState([]);
  var [images, setImages] = useState([]);
  var [filesImage, setFilesImage] = useState([]);
  const getData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Publications/`; 
      /* *****************ALWAYS CHECK THE API URL **************** */
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Publications_name: titlePage};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          Data = response[0];
          setData(Data);
          
          var fileString = Data.Publications_file;
          //console.log("fileString: ", Data.Publications_file);
          var fileArray = fileString.split(",");
          
          files = fileArray;
          setFiles(files);

          var imageString = Data.Publications_image;
          //console.log("fileString: ", Data.Publications_image);
          var imgaeArray = imageString.split(",");
          
          images = imgaeArray;
          setImages(images);
          var tempVar = [];
          for(let i=0;i<files.length;i++){
            tempVar.push({"file":files[i],"image":images[i]});
          }
          filesImage = tempVar;
          setFilesImage(filesImage);

          console.log("filesImage", filesImage);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  useEffect(() => {
    getData();
    
  }, []);


  return (
    <div className="content-wrapper" style={{minHeight: '427px'}}>
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12">
                  <h2><b>
                    <FontAwesomeIcon icon={faNewspaper}/>
                
                     &nbsp;{titlePage}</b></h2>
                  <br />
                  <div className="box box-warning " style={{marginTop: '-1.5%'}}> 
                  </div>
                  {filesImage.map((content)=>(
                    <>
                      <div className="col-md-2" style={{marginLeft: '0px', marginBottom: '10px'}}><span><a href={"/static/media/" + content.file} target="_blank"><img src={"/static/media/" + content.image} width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></a></span></div>
                      
                    </>
                  ))}

                  
                  {/* /. box */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}
