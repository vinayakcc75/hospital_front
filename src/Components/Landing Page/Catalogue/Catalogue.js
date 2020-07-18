import React from 'react';
import Slider from 'infinite-react-carousel';
import './Catalogue.css';
import fb from '../footericons/icons8-facebook-48.png';
import insta from '../footericons/icons8-instagram-48.png';
import twit from '../footericons/icons8-twitter.svg';
import '../footer.css'
const Catalogue=()=>{
    return(
        <div className="carousel">
        <Slider className="toggling-pics" dots  autoplay autoplayScroll={1}
            autoplaySpeed={2000} arrows={false}> 
            <img src='https://www.healthleadersmedia.com/sites/hlmp/files/medical-mask-shutterstock_268385390.jpg' alt="1"/>
            <img src="https://study.com/cimages/videopreview/videopreview-full/gowbyydu58.jpg" alt="2"/>
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="3"/>
        </Slider>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <footer  className="foot">
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
        </footer>
        </div>
    );
}

export default Catalogue;