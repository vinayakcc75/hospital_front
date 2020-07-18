import React from 'react';
import './Navbar.css';
import home from './icons8-hospital-48.png';
import {Link} from "react-router-dom";
const Navbar =({onRouteChange})=>{
    return (
        <nav className="navbar">
            <div className="Home-button">
             <a className="aa" href="/"><img src={home} alt="home-icon" height='50' width='50'></img></a>
            </div>
            <div className="spacer"></div>
            <div className="right-links">
                <Link to='/aboutus'>
                    <button >About Us</button>
                </Link>
                <Link to='/facilities'>
                    <button >Facilities</button>
                </Link>
                <Link to='/bookslot'>
                    <button >Book Appointment</button>
                </Link>
                <Link to='/login'>
                    <button onClick={()=>onRouteChange('login')} >Login</button>
                </Link>
                <Link to='/register'>
                    <button onClick={()=>onRouteChange('register')}>Register</button>
                </Link>
            </div>
        </nav>
    );
}


export default Navbar;