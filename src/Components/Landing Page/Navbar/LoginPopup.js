import React from "react";
import "./LoginPopup.css";
import Backdrop from "./Backdrop";
import google from "./google-plus.svg";
import person from "./icons8-person-64.png";
import {Link} from 'react-router-dom'
class LoginPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            captcha:false,
            choice:"",
            choice_name:"",
            user:{
                password:"",
                email:"",
                firstname:"",
                user_id:"",
                phone:"",
                user_type:"",
                dob:new Date(),
                gender:"",
                address:"",
                forgot:false
        }
    }
}
showForgot=()=>{
  this.setState({forgot:true});
}
  passChange = (event) => {
    this.setState(
      Object.assign(this.state.user, { password: event.target.value })
    );
  };
  emailChange = (event) => {
    this.setState({ choice_name: event.target.value });
    var str = event.target.value;
    var flag = false;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "@") {
        flag = true;
      }
    }
    if (flag === true) {
      this.setState({ choice: "email" });
      this.setState(
        Object.assign(this.state.user, { email: event.target.value })
      );
    } else {
      this.setState({ choice: "phone" });
      this.setState(
        Object.assign(this.state.user, { phone: event.target.value })
      );
    }
  }
    
     verify=()=>{
    console.log('entered');
    fetch(`/api/authenticate`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        choice:this.state.choice,
        username:this.state.choice_name,
        password:this.state.user.password
      })
    })
    .then(response => response.json())
    .then(ret => {
      console.log(ret);
        if(ret.status===true){
            this.setState(Object.assign(this.state.user,{firstname:ret.results[0].firstname}));
            // if(ret.results[0].user_type===0)
            this.setState(Object.assign(this.state.user,{user_id:ret.results[0].user_id}));
            // else{
            //   this.setState(Object.assign(this.state.user,{user_id:ret.resultsd[0].doctor_id}));
            // }
            this.setState(Object.assign(this.state.user,{phone:ret.results[0].phone}));
            this.setState(Object.assign(this.state.user,{user_type:ret.results[0].user_type}));
            this.props.loadUser(this.state.user);
            this.props.giveAccess();
            if(ret.results[0].user_type===0)
                this.props.history.push(`/patient/${this.state.user_id}`);
            else
                this.props.history.push(`/doctor/${this.state.user_id}`);
            console.log('Successfully Login');
        } 
        else{
          window.alert('Incorrect Username or Password !')
        }   
    })
    console.log('exit')
    }
    render(){
    const {onRouteChange}=this.props;
     return(
        <div>
        <Backdrop onRouteChange={onRouteChange}/>
        <div className="login-container">
          <img src={person} alt="google" height="40" width="40" />
          <br></br>

          <h1 className="heading">LOGIN </h1>
          <form method="PUT">
            <input
              type="email"
              placeholder="Enter Phone No./Email"
              onChange={this.emailChange}
            ></input>
            <br />
            <br />

            <input
              type="password"
              placeholder="Enter Password"
              onChange={this.passChange}
            ></input>
            <Link to='/forgot'>
              <a href="/forgot" onClick={this.showForgot}>
                <p>Forgot password?</p>
              </a>
              </Link>
            <button type="button" onClick={this.verify}>
              Login
            </button>
            <hr />
            <p>or</p>
            <p>Sign up with</p>
            <img src={google} alt="google" height="20" width="20" />
          </form>
        </div>
      </div>
    );
  }
}
export default LoginPopup;
