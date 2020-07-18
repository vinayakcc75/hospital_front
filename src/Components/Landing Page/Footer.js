import React from 'react';
import  { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import fb from './footericons/icons8-facebook-48.png';
import insta from './footericons/icons8-instagram-48.png';
import twit from './footericons/icons8-twitter.svg';
import './footer.css'
class Footer extends Component {
    constructor(){
        super();
    }
    foot=()=>{
        return(
        <footer className="foot">
            <h3>CONTACT US</h3>
            <p style={{ 'fontWeight': "bold"}} className="contactus">
                        Telephone : +21 2289373, +21 2341245<br/>
                        Email : hospital@gmail.com<br/>
                        Address : Delhi, India<br/>
            </p>
            <div className="icons">
            <img alt="fb-icon" src={fb} width="30px" height="30px" />
            <img alt="insta-icon" src={insta} width="30" height="30" />
            <img alt="twit-icon" src={twit} width="30" height="30" />
            </div>
        </footer>)
    }
    render() {
        return (
        <Fragment>
            {this.foot}
        </Fragment>
        )
    }
}

export default withRouter(Footer);
