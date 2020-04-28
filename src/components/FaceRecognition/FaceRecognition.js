import React from 'react';
import './FaceRecognition.css';

const facerecognition=({ImageUrl,box})=>{
    return(
        <div className="Center  ma">
            <div className=" absolute mt2 mb2">
            <img id="inputImage" src={ImageUrl} alt="" width='500px' height='auto'/>
            <div className="Bounding-box" style={{top: box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
            </div>
           
        </div>
    );
}

export default facerecognition;