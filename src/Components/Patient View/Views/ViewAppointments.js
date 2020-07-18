import React from 'react';
import './ViewAppointments.css';
import moment from 'moment'
class ViewAppointments extends React.Component{
    constructor(){
        super();
        this.state={
            a:"",
            curr:new Date()
        }
    }
    somethings=(a,b)=>{
        this.props.setpid(a,b);
    }
    cancelApp=(k,l)=>{
        this.setState({curr:Date.now()});
        fetch(`/api/apppointments/cancel`,{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                date:k,
                time:l
            })
        })
        .then(response=>response.json())
        .then(ret=>{
            if(ret.status===true)
            alert('Cancelled Appointment')
        })
    }
    appointments=(a)=>{
        let k=(a.date);
        k=moment(k).format("YYYY-MM-DD")
        return(
            <div className="individual-appoint">
                <div className="details">
                <div>{a.department_name}</div>
                <div>{a.firstname} {a.lastname}</div>
                <div>{a.time}</div>
                <div>{k}</div>
                <div>
                    <button type="button" onClick={()=>this.cancelApp(k,a.time)}>Cancel</button>
                </div>
                </div>
            </div>
        )
    }
    componentDidMount=async (d)=>{
        await this.setState({date:d})
        fetch(`/api/patient`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
              patient_id:this.props.user.user_id,
            })
        })
        .then(response => response.json())
        .then(async ret => {
            console.log(ret);

            if(ret.status===true){
            await this.setState({a:ret.message});
            await this.setState({dateSelected:true})
        }
        })
        console.log('exit')
    }
    render(){
        return(
            <div className="box">
                 <h1 style={{"margin-left":"10%"}} className="dates">
                     Appointments
                     </h1>
                    <br/><br/>
                <div style={{"fontWeight":"bold"}} className="fir-details">
                <div>Department</div>
                <div>Doctor Name</div>
                <div>Appointment Time</div>
                <div>Date</div>
                <div>Cancel</div>
                </div>
                <br/>
                {(this.state.a.length>0)?
                (this.state.a.map((a)=>this.appointments(a)))
                :(<h4 style={{"marginLeft":"15%"}}>No appointments</h4>)}
            </div>
        )
    }
}
export default ViewAppointments;