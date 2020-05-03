import React from 'react';


const rank =({name,entries})=>{
    return(
        <div>
            <div className="white f3"> 
                <p>{`${name},Your your current entry count is...`}</p>
            </div>
            <div className="white f1">
            <p>
                {entries}
            </p>
            </div>
        
        </div>
    );
}

export default rank;