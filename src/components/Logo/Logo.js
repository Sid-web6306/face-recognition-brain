import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from '../../assets/Images/brain.png';


const logo = () =>{
    return(
        <div className="ma4 nt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }}>
            <div className="Tilt-inner pa2">
                <img style={{paddingTop:'4px'}} src={Brain} alt="Logo"/>
            </div>
            </Tilt>
        </div>
    )

}

export default logo;