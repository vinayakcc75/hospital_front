import React from 'react';
import './RegisterPopup.css';
import Backdrop from './Backdrop';
import person from './icons8-person-64.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
let a=[];
class RegisterPopup extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            operator:"patient",
            arr:"",
            placeholder:"Select Department",
            user:{
              username:'',
              phone:"",
              password:"",
              email:"",
              type:"0",
              department_id:"",
              age:"",
              gender:"",
              address:"",
              specialization:"Cardio",
              qualification:"MBBS",
              experience:"2"
            }
        }
    }
    componentDidMount(){
        fetch(`/api/register/department`, {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(ret => {
          if (ret.status===true&&ret.message.length>0) {
            this.setState({arr: ret.message});
            a=[];
            this.state.arr.map((arr)=>{a.push(arr.department_name)})
          }
        })
    }
    getDeptID=(a)=>{
        this.setState({placeholder:a.value});
        this.state.arr.map(arr=>{
          if(arr.department_name===a.value){
            this.setState(Object.assign(this.state.user,{department_id:arr.department_id}),()=>console.log(this.state.user.department_id));
          }
      })
    }
    ageChange=(event)=>{
      this.setState(Object.assign(this.state.user,{age:event.target.value}));
  }
    firstnameChange=(event)=>{
        this.setState(Object.assign(this.state.user,{firstname:event.target.value}));
    }
    lastnameChange=(event)=>{
      this.setState(Object.assign(this.state.user,{lastname:event.target.value}));
  }
    passChange=(event)=>{
        this.setState(Object.assign(this.state.user,{password:event.target.value}));
    }
    emailChange=(event)=>{
        this.setState(Object.assign(this.state.user,{email:event.target.value}));
    }
    telChange=(event)=>{
        this.setState(Object.assign(this.state.user,{phone:event.target.value}));
    }
    addressChange=(event)=>{
      this.setState(Object.assign(this.state.user,{address:event.target.value}));
   }
   dobChange=(event)=>{
    this.setState(Object.assign(this.state.user,{dob:event.target.value}));
 }
    operatorChange=(text)=>{
        if(text==='patient'){
        this.setState({operator:"patient"});
        this.setState(Object.assign(this.state.user,{type:'0'}));
        }
        else{
        this.setState({operator:"doctor"})
        this.setState(Object.assign(this.state.user,{type:'1'}));
        }
    }
    genderChange=(text)=>{
      if(text==='male'){
      this.setState(Object.assign(this.state.user,{gender:'M'}),()=>console.log(this.state.gender));
      }
      else if(text==='female'){
      this.setState(Object.assign(this.state.user,{gender:'F'}),()=>console.log(this.state.gender));
      }
      else{
        this.setState(Object.assign(this.state.user,{gender:'O'}),()=>console.log(this.state.gender));
      }
  }
    
  submitF=()=>{
      console.log('entered');
    fetch(`/api/register`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        department_id:this.state.user.department_id,  
        firstname:this.state.user.firstname,
        lastname:this.state.user.lastname,
        phone:this.state.user.phone,
        password:this.state.user.password,
        email:this.state.user.email,
        type:this.state.user.type,
        age:this.state.user.age,
        gender:this.state.user.gender,
        address:this.state.user.address,
        specialization:this.state.user.specialization,
        qualification:this.state.user.qualification,
        experience:this.state.user.experience
      })
    })
    .then(response => response.json())
    .then(ret => {
      if (ret.status===true) {
        alert('Registered Successfully! Now Login');
        window.location.reload();
        this.props.onRouteChange('none');
      }
      else{
        console.log(ret.message);

      }
    })
    console.log('exit');
  }
    render(){
        const {onRouteChange} = this.props;
    return(
        <div>
        <Backdrop onRouteChange={onRouteChange}/>
        <div className="register-container" >
        <img src={person} alt="google" height='40' width='40'/>
        <br/>
            <h1 className="heading">REGISTER </h1><br/>
            <form method='PUT'>
                <div className="user-selection">
                <label htmlFor="doctor">Doctor</label>
                <input onClick={()=>this.operatorChange('doctor')}
                type="radio" name="user" value="doctor" />
                <label htmlFor="patient">Patient</label>
                <input type="radio" onClick={()=>this.operatorChange('patient')}
                 name="user" value="patient" />
                </div>
                <br/>
                { (this.state.operator==='patient')?(
                    <div>
                    <input type="text" placeholder="Enter First Name"
                    onChange={this.firstnameChange}></input><br/><br/>
                    <input type="text" placeholder="Enter Last Name"
                    onChange={this.lastnameChange}></input><br/><br/>
                    <input type="email" placeholder="Enter Email"
                    onChange={this.emailChange}></input><br/><br/>
                    <input type="password" placeholder="Enter Password"
                    onChange={this.passChange}></input><br/><br/>
                    <input type="tel" placeholder="Enter Contact No"
                    onChange={this.telChange}></input><br/><br/>
                    <input type="date" placeholder="Enter Date of Birth"
                    onChange={this.dobChange}></input><br/><br/>
                    <div className="user-selection">
                    <label htmlFor="Male">Male</label>
                    <input onClick={()=>this.genderChange('male')}
                    type="radio" name="Gender" value="Male" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" onClick={()=>this.genderChange('female')}
                    name="Gender" value="female" />
                    <label htmlFor="others">Others</label>
                    <input type="radio" onClick={()=>this.genderChange('other')}
                    name="Gender" value="others" />
                    </div>
                    <br/>
                    <input type="text" placeholder="Enter Address"
                    onChange={this.addressChange}></input><br/><br/>
                    <input type="number" placeholder="Enter Age"
                    onChange={this.ageChange}></input><br/><br/>
                    <button type="button" onClick={this.submitF} >Register as Patient</button>
                    </div>
                ):
                (
                    <div>
                    <input type="text" placeholder="Enter First Name"
                    onChange={this.firstnameChange}></input><br/><br/>
                    <input type="text" placeholder="Enter Last Name"
                    onChange={this.lastnameChange}></input><br/><br/>
                    <input type="email" placeholder="Enter Email"
                    onChange={this.emailChange}></input><br/><br/>
                    <input type="password" placeholder="Enter Password"
                    onChange={this.passChange}></input><br/><br/>
                    <input type="tel" placeholder="Enter Contact No"
                    onChange={this.telChange}></input><br/><br/>
                    <input type="date" placeholder="Enter Date of Birth"
                    onChange={this.nameChange}></input><br/><br/>
                    <div className="user-selection">
                    <label htmlFor="Male">Male</label>
                    <input onClick={()=>this.genderChange('male')}
                    type="radio" name="Gender" value="Male" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" onClick={()=>this.genderChange('female')}
                    name="Gender" value="female" />
                     <label htmlFor="others">Others</label>
                    <input type="radio" onClick={()=>this.genderChange('other')}
                    name="Gender" value="others" />
                    </div>
                    <br/>
                    <input type="text" placeholder="Enter Address"
                    onChange={this.nameChange}></input><br/><br/>
                     <input type="number" placeholder="Enter Age"
                    onChange={this.ageChange}></input><br/><br/>
                    <Dropdown 
                    onChange={this.getDeptID}
                    options={a} 
                    className="myClassName"
                    placeholder={`${this.state.placeholder}`} />
                    <br/>
                    <button type="button" onClick={this.submitF} >Register as Doctor</button>
                    </div>
                )
                }
            </form>
        </div>
        </div>
    )
    }
}
export default RegisterPopup;