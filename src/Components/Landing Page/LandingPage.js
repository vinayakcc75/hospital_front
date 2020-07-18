import React,{Component} from 'react';
import Catalogue from './Catalogue/Catalogue';
import LoginPopup from './Navbar/LoginPopup';
import RegisterPopup from './Navbar/RegisterPopup';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AboutUs from './AboutUs';
import Facilities from './Facilities';
import BookSlot from './BookSlot';
import PatientView from '../Patient View/PatientView';
import DoctorView from '../Doctor View/DoctorView';
import NavBar from './Navbar/Navbar';
import Footer from './Footer';
import Forgot from './Forgot'
class LandingPage extends Component{
    constructor(){
        super();
        this.state={
            register:false,
            login:false,
            access:false,
            user:{
                username:"",
                phone:"",
                email:"",
                user_type:"",
                user_id:"",
                dept_id:""
            }
        }
    }
    giveAccess=()=>{
        this.setState({access:true});
    }
    loadUser=(data)=>{
        this.setState(Object.assign(this.state.user,{
            username:data.firstname,
            phone:data.phone,
            email:data.email,
            user_type:data.user_type,
            user_id:data.user_id,
            dept_id:data.dept_id
        }))
    }
    Foot=()=>{
        return(
                <div className="foot">
                    <p>CONTACT US</p>
                    <p className="contactus">
                        Telephone : +21 2289373, +21 2341245<br/>
                        Email : hospital@gmail.com<br/>
                        Address : Delhi, India<br/>
                    </p>
                </div>
        );
    }
    onRouteChange=(route)=>{
        if(route==='login'){
            this.setState((prevState)=>{
                return({login:!prevState.login});
            })
        }
          else if(route==='register'){
            this.setState({register:!this.state.register})
          }
          else{
            this.setState({login:false});
            this.setState({register:false});
          }
    }
    Login=(props)=>{
        return(
            <div>
            {
                (this.state.login===true)?
                <div>
                    <Catalogue/>
                    <LoginPopup {...props} loadUser={this.loadUser} access={this.state.access}
                     giveAccess={this.giveAccess} onRouteChange={this.onRouteChange}/>
                </div>
                : <div><Catalogue/></div>
            }
            </div>
        );
    }
    Register=()=>{
        return(
            <div>
            {
                (this.state.register===true)?
                <div>
                    <Catalogue/>
                    <RegisterPopup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>  
                </div>
                : <div><Catalogue/></div>
            }
            </div>
        );
    }
    render(){
    return(
        <div className="landing">
        <Router >
        <NavBar onRouteChange={this.onRouteChange}/>
        <Switch>
                <Route path="/" exact component={Catalogue} />
                <Route  path="/login"  render={(routeProps) => <this.Login {...routeProps}/>}/>
                <Route path="/register" component={this.Register}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route path="/forgot"  component={Forgot} />
                <Route path='/facilities' component={Facilities}/>
                <Route path='/bookslot' render={(routeProps) => <BookSlot user={this.state.user} {...routeProps}/>}/>
                {this.state.access===true&&
                <Route path='/patient/:id' render={(routeProps) => <PatientView user={this.state.user} {...routeProps}/>}/>}
                {this.state.access===true&&
                <Route path='/doctor/:id' render={(routeProps) => <DoctorView user={this.state.user} {...routeProps}/>}/>}
        </Switch>
        <Footer/>
        </Router>
        </div>
    );
    }
}

export default LandingPage;
