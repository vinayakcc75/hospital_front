import React from 'react';
import {Link} from "react-router-dom";
import './Sidebar.css';
import x from './icons8-x-50.png'
import logout from './4115235-exit-logout-sign-out_114030.svg'
class Sidebar extends React.Component{
    constructor(){
        super();
    }
    logout=()=>{
        fetch(`/api/logout`,{
            method:'get',
            headers: {'Content-Type': 'application/json'}
        }).then(response=>response.json())
        .then(ret=>{
            console.log('Logged Out !');
        })
    }
    render(){
        
        const {openBar} =this.props;
        return(
            <div className="patient-sidebar">
            <div className="button-side-bar">
            <div className="hamburger">
            <button  onClick={openBar}>
                MENU
            </button>
            </div>

            <a className="homepic" onClick={this.logout} href="/">
                <img src={logout} alt="home-icon" height='40' width='40'></img>
            </a>
            {(this.props.baropen===true)?(
            <nav className="sidebar">
            <a className="cross"  onClick={openBar}><img src={x} width='25' height='22'/></a>
            <div className="side-links">
                <Link to='/profile'>
                    <button >Profile</button>
                </Link>
                <Link to='/patient/:id'>
                    <button >Current Appointments</button>
                </Link>
                <Link to='/records'>
                    <button >See Records</button>
                </Link>

            </div>
            </nav>):(<div></div>)}
            </div>
            <div className="normal-side-bar">
            <nav className="sidebar">
            <div className="side-links">
                
                <Link to='/profile'>
                    <button >Profile</button>
                </Link>
                <Link to='/patient/:id'>
                    <button >Current Appointments</button>
                </Link>
                <Link to='/records'>
                    <button >See Records</button>
                </Link>
            </div>
            </nav>
            </div>
            </div>
        )
    }
}

export default Sidebar;