import React from 'react';

class signup extends React.Component{
    constructor(props){
        super(props)
        this.state=
        {
            email:'',
            username:'',
            password:''
        }
    }
    onEmailChangeHandler = (event) =>{
        this.setState({email: event.target.value})
    }
    onPassswordChangeHandler = (event) =>{
        this.setState({password: event.target.value})
    }
    onUsernameChangeHandler = (event) =>{
        this.setState({username: event.target.value})
    }

    onSubmitRegisterHandler = (event) =>{
        event.preventDefault();
        fetch('http://localhost:300/register',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                username:this.state.username
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
                console.log(user);
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }



    render(){
        return (
            <div className="Center">
            <main className="pa4 br2 shadow-5 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">UserName</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="username" 
                            id="name" 
                            onChange = {this.onUsernameChangeHandler} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            onChange = {this.onEmailChangeHandler} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={this.onPassswordChangeHandler} />
                    </div>
                </fieldset>
                <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" value="Sign Up" 
                        onClick={this.onSubmitRegisterHandler}
                       />
                 </div>
            </form>
        </main>
            </div>
    
        );
    }
}
export default signup;