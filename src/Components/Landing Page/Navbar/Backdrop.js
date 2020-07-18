import React from 'react';
import './Backdrop.css';
import {Link} from "react-router-dom";

const Backdrop =({onRouteChange})=>{
    return(
        <Link to="/">
        <div className="login-page" onClick={()=>onRouteChange('none')}> </div>
        </Link>
    )
}
export default Backdrop;