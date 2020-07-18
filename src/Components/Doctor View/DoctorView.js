import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PatientHistory from './Views/PatientHistory';
import Profile from './Views/Profile';
import NewEntry from './Views/NewEntry';
import TimeOff from './Views/TimeOff';
import './DoctorView.css';
import ViewAppointments from './Views/ViewAppointments';
class DoctorView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            baropen:false,
            patientId:"",
            patientName:"",
            docname:"",
            department:""
        }
    }
    openBar=()=>{
        this.setState({baropen:!this.state.baropen})
    }
    setpid=(a,b,c)=>{
        this.setState({patientId:a});
        this.setState({patientName:b+' '+c});
    }
    docDetails=(a,b,c)=>{
        this.setState({docname:a+' '+b})
        this.setState({department:c})
    }
    render(){
        return(
            <div>
                <Router>
                <Sidebar openBar={this.openBar} baropen={this.state.baropen}/>
                <Switch>
                    <Route  path='/doctor/:id' render={()=><ViewAppointments 
                    setpid={this.setpid} 
                    user={this.props.user}/>}></Route>
                    <Route  path='/docprofile' render={()=><Profile                     docDetails={this.docDetails}
                    docDetails={this.docDetails}
                    user={this.props.user}/>}></Route>
                    <Route  path='/timeoff' component={TimeOff}></Route>
                    <Route  path='/newentry' render={()=><NewEntry patientId={this.state.patientId} 
                     patientName={this.state.patientName}
                     docname={this.state.docname}
                     department={this.state.department}
                     user={this.props.user}/>}></Route>
                    <Route  path='/patienthistory' component={PatientHistory}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default DoctorView;