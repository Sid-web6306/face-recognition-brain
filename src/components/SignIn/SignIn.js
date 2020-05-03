import React from 'react';
class signin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            signinEmail:'',
            signinPassword:''
        }
    }


    onEmailChangeHandler=(event)=>{
        this.setState({signinEmail: event.target.value});
    }
    onPasswordChangeHandler=(event)=>{
        this.setState({signinPassword:event.target.value});
    }
    onSubmitSigninHandler=(event)=>{
            event.preventDefault();
            
            fetch('http://localhost:300/signin' , {
            
            method : 'post',
            
            headers : { 'Content-Type' : 'application/json'},
            
            body : JSON.stringify({
            
            email : this.state.signInEmail ,
            
            password : this.state.signInPassword
            
            })
            
              })
            
            .then(response => response.json())
            
            .then(data => {
            
            if (data==='sucess')
            
            {
            
            this.props.onRouteChange('home');
            
            }
            
            })
        }

    render(){
        const { onRouteChange }= this.props;
        return(
            <div className="Center">
                <main className="pa4 black-80 br2 shadow-5">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">UserName/Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChangeHandler}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChangeHandler}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b br1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" value="Sign in" 
                            onClick={this.onSubmitSigninHandler}/>
                         </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f6 link dim black db" onClick={()=>onRouteChange('signup')}>Sign Up</a>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}
export default signin;