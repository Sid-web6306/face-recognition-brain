import React from 'react';

const navigation = ({signoutHandler , isSignedin}) =>{
    if(isSignedin){ console.log(isSignedin);
        return(
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={()=>signoutHandler('signin')}>Sign Out</p>
        </div>
    )}
    else{console.log(isSignedin);
        return(
        
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={()=>signoutHandler('signin')}>Sign In</p>
            <p className="f3 link dim black underline pa3 pointer" onClick={()=>signoutHandler('signup')}>Register</p>
        </div>
    )}
    
    
    

}

export default navigation;