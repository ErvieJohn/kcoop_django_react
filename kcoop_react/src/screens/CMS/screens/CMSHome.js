import {React, useState} from 'react';


const CMSHome = () => {
  const [image, setImage] = useState('');
  
  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0]);
    
  }

  return (
    <div> <p>HOMEEEEEEEEEEEEE</p>
      <h1>Image Slider </h1><input type="file" name="file" accept='image/*' onChange={handleImage}/>
    </div>
  )
}
export default CMSHome;