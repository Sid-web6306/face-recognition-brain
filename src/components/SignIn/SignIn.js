import React from 'react';
const signin =({onRouteChange})=>{
    return(
        <div className="Center">
            <main className="pa4 black-80 br2 shadow-5">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">UserName/Email</label>
                            <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b br1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" value="Sign in" 
                        onClick={()=>onRouteChange('home')}/>
                     </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db" onClick={()=>onRouteChange('signup')}>Sign Up</a>
                    </div>
                </form>
            </main>
        </div>
    );
}
export default signin;