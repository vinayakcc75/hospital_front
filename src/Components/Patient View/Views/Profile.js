import React from 'react';
import './Profile.css'
import dp from './dp.jfif'
import ProfileValidation from './ProfileValidation'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    this.saveAndToggle = this.saveAndToggle.bind(this);
    this.state = {
      open: false,
        fname: "NA",
        lname: "",
        age: 0,
        gender: "NA",
        dob: "dd-mm-yyyy",
        email: "NA",
        patId: "0",
        address: "NA",
      }
  }
 componentDidMount(){
   fetch(`/api/profile`,{
    method: 'get',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response=>response.json())
    .then(ret=>{
      console.log(ret)
      if(ret.status===true){
        this.setState({patId:this.props.user.user_id});
        this.setState({fname:ret.message[0].firstname});
        this.setState({lname:ret.message[0].lastname});
        this.setState({age:ret.message[0].age});
        this.setState({gender:ret.message[0].gender});
        this.setState({phone:ret.message[0].phone});
        this.setState({email:ret.message[0].email});
        this.setState({age:ret.message[0].age});
        this.setState({address:ret.message[0].address});

      }
    }
    )
 }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  saveAndToggle = (newdata) => {
    this.toggle();
    this.setState({ data: newdata });
  };

render(){
    return(
<div>
            {this.state.open === true && (
          <ProfileValidation
            values={this.state}
            toggle={this.saveAndToggle}
          />
        )}
        <div className="pat-profile">

        {this.state.open === false && (
            <table>   
                <tr>           
                <img src={dp} alt="Profile pic" /> 
                </tr>  
               
                <br/><br/>
                <tr>
                <td> <h3>NAME : </h3> </td>
        <td> <h4>{this.state.fname} {this.state.lname}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>USER ID : </h3> </td>
                    <td> <h4>{this.state.patId}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>EMAIL ID : </h3> </td>
                    <td> <h4>{this.state.email}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>PHONE : </h3> </td>
        <td> <h4>{this.state.phone}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>GENDER : </h3> </td>
                    <td> <h4>{this.state.gender}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>AGE : </h3> </td>
                    <td> <h4>{this.state.age}</h4> </td>
                </tr>
                <tr>
                    <td><h3>ADDRESS : </h3></td>
                    <td><h4>{this.state.address}</h4></td>
                </tr>
                <br/><br/>
                <tr>
                    <button onClick={this.toggle}>Edit Details</button>
                </tr>
            </table>)}
        </div>
        </div>
    );}
}

export default Profile; 
 

