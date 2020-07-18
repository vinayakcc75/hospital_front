import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Profile from './Views/Profile';
import Records from './Views/Records';
import './PatientView.css';
import ViewAppointments from './Views/ViewAppointments';
class PatientView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            baropen:false
        }
    }
    openBar=()=>{
        this.setState({baropen:!this.state.baropen})
    }

    render(){
        return(
            <div>
                <Router>
                <Sidebar openBar={this.openBar} baropen={this.state.baropen}/>
                <Switch>
                    <Route  path='/patient/:id' render={()=><ViewAppointments setpid={this.setpid} user={this.props.user}/>}></Route>
                    <Route  path='/profile' render={()=><Profile user={this.props.user}/>}></Route>
                    <Route  path='/records' render={()=><Records user={this.props.user}/>}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default PatientView;