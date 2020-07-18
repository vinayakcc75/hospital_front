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
        department:"NA",
        qualification:"NA",
        specialization:"NA",
        experience:0
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
        this.setState({address:ret.message[0].address});
        this.setState({department:ret.message2.department_name});
        this.setState({experience:ret.message2.experience});
        this.setState({qualification:ret.message2.qualification});
        this.setState({specialization:ret.message2.specialization});
        this.props.docDetails(ret.message[0].firstname,ret.message[0].lastname,ret.message2.department_name);
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
          user={this.props.user}
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
                    <td><h3>DEPARTMENT : </h3></td>
        <td><h4>{this.state.department}</h4></td>
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
                    <td><h3>SPECIALIZATION : </h3></td>
        <td><h4>{this.state.specialization}</h4></td>
                </tr>
                <tr>
                    <td><h3>EXPERIENCE : </h3></td>
        <td><h4>{this.state.experience}</h4></td>
                </tr>
                <tr>
                    <td><h3>QUALIFICATION : </h3></td>
        <td><h4>{this.state.qualification}</h4></td>
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
 

