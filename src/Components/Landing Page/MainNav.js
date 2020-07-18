import Navbar from './Navbar/Navbar';
import React from 'react';
import  { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class MainNav extends Component {
    render() {
        const {onRouteChange} = this.props;
        return (
        <Fragment>
            {(this.props.location.pathname === '/'||
            this.props.location.pathname === '/aboutus'||
            this.props.location.pathname === '/facilities'||
            this.props.location.pathname === '/bookslot'||
            this.props.location.pathname === '/login'||
            this.props.location.pathname === '/register')
            && <Navbar onRouteChange={onRouteChange}/>}
            {/* <main>{this.props.children}</main> */}
        </Fragment>
        )
    }
}

export default withRouter(MainNav)
