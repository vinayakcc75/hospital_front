import React from 'react';
import './ViewAppointments.css';
import {Link} from 'react-router-dom';
import ModernDatepicker from 'react-modern-datepicker';


class ViewAppointments extends React.Component{
    constructor(){
        super();
        this.state={
            date:"",
            a:[],
            dateSelected:false
        }
    }
    somethings=(a,b,c)=>{
        this.props.setpid(a,b,c);
    }
    appointments=(a)=>{
        return(
            <div className="individual-appoint">
                <div className="app-details">
                <div>{a.patient_id} </div>
                <div>{a.firstname} {a.lastname}</div>
                <div>{a.time}</div>
                <div>
                    <Link to='/newentry'>
                       <button onClick={()=>{this.somethings(a.patient_id,a.firstname,a.lastname)}}>New</button>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
    onChange=async (d)=>{
        await this.setState({date:d})
        fetch(`/api/doctor`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
              user_id:this.props.user.user_id,
              date:this.state.date
            })
        })
        .then(response => response.json())
        .then(async ret => {
            console.log(ret)

            if(ret.status===true){
            await this.setState({a:ret.message})
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
                     <div className="cal">
                        <label >Date : </label> 
                        <ModernDatepicker
                        className="color"
                        date={this.state.date}
                        format={'YYYY-MM-DD'}
                        showBorder
                        onChange={date => this.onChange(date)}
                        placeholder={'Select a date'}
                        />
                        </div>
                        <br/><br/>
                <div style={{"fontWeight":"bold"}} className="app-first">
                <div>Patient ID</div>
                <div>Patient Name</div>
                <div>Appointment Time</div>
                <div>
                    Add Prescription
                </div>
                </div>
                <br/>
                {(this.state.dateSelected)?(
                (this.state.a.length>0)?
                (this.state.a.map((a)=>this.appointments(a)))
                :(<h4 style={{"marginLeft":"15%"}}>No appointments</h4>))
                :<h4 style={{"marginLeft":"15%"}} >Select a date</h4>}
            </div>
        )
    }
}
export default ViewAppointments;