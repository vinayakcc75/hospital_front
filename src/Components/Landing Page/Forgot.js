import React from 'react'
import './Forgot.css'
class Forgot extends React.Component{
    constructor(){
        super()
        this.state={
            pass:"",
            email:''
        }
    }
    reset=()=>{
        fetch(`/api/forgot_password`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                new_pass:this.state.pass,
                username:this.state.email
            })
        })
        .then(response=>response.json())
        .then(ret=>{
            console.log(this.state,ret);
            if(ret.status===true){
                alert('Password changed successfully now Login !')
                window.location.reload();
            }
            else{
                alert('Enter valid email address !');
            }
        })
    }
    emailChange=(event)=>{
        this.setState({email:event.target.value})
    }
    passChange=(event)=>{
        this.setState({pass:event.target.value})
    }
    render(){
    return(
        <div class="forgot">
            <form>
                <h1>Reset Password</h1>
                <label name="email">Email</label>
                <input type="text" name="email" onChange={this.emailChange} placeholder="Enter Email"></input>
                <br/><br/><label name="pass">New Password</label>
                <input type="text" name="pass" onChange={this.passChange} placeholder="Enter New Password"></input>
                <br/><br/> <button type="button" onClick={this.reset}>Reset</button>
            </form>
        </div>
    )
}}
export default Forgot;