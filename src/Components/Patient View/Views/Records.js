import React from 'react';
import './Records.css'
class Records extends React.Component{
   constructor(props){
       super(props);
       this.state={
           a:""
       }
   }
   componentDidMount(){
       fetch(`/api/medical_records`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
              user_id:this.props.user.user_id
          })
        })
        .then(response => response.json())
        .then(async ret => {
            if(ret.status===true&&ret.message.length>0){
            this.setState({a:ret.message})}
        console.log(ret,this.props.user.user_id)        
    })
  }
  some=(a)=>{
      return(
    <div className="rec">
    <div className="rec-individual">
    <div>{a.medical_record_id} </div>
    <div>{a.doctor}</div>
      <div>{a.department_name}</div>
    <div>{a.symptoms}</div>
    <div>{a.medication_prescribed}</div>
    </div>
</div>)
  }
   render(){
       return(
        <div>
            <h1 style={{"marginLeft":"10%"}}>Previous Records</h1>
             <div style={{"fontWeight":"bold"}} className="heads">
                <div>Record ID</div>
                <div>Doctor</div>
                <div>Department</div>
                <div>Diagnosis</div>
                <div>Prescription</div>
                </div>
                <br/>
                {
                    (this.state.a.length>0)?(
                        this.state.a.map((a)=>this.some(a))
                    ):<h3 style={{"marginLeft":"10%"}}>No Records</h3>
                }
        </div>
       )
   }
}
 export default Records;