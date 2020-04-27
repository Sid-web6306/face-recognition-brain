import React from 'react';
import './ImageLinkForm.css';

const imagelinkform = ({onInputChange,Submit}) =>{
    return (
        <div>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try!!'}
            </p>
            <div className="Center"> 
                <div className="pa4 br2 Pattern Center shadow-3">
                    <input className="f6 pa2 w-70 Center" type="text" placeholder="Place your image link here" required onChange={onInputChange}/>
                    <button style={{outline:'none'}} className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple" onClick={Submit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default imagelinkform;;