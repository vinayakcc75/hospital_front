import React from 'react';
import './AboutUs.css';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import doc from './OQ6UTW0.jpg';
import fb from './footericons/icons8-facebook-48.png';
import insta from './footericons/icons8-instagram-48.png';
import twit from './footericons/icons8-twitter.svg';
import './footer.css'
const arr=[1,2,3,4,5,6,7,8,9,10];

function Doctor(props){
  return (
    <div className="card swiper-slide">
      <img src={doc} width="80" height="80" alt="Doctor's pic" /><br/>
      {/* <a href="#">{props.name}</a> */}
      <h4>{props.name}</h4>
      <h4>{props.designation}</h4>
    </div>
  );
}
  
class  People extends React.Component{

  componentDidMount(){
    this.swiper=new Swiper('.s1',
      {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    );
  }
  render(){
    return(
      <div>
        <h1>Our Crew</h1>
        <div className=" s1 swiper-container">
          <div className="swiper-wrapper">
            {arr.map(()=>{return <Doctor name="Doctor's Name" designation="Designation"/>})}
          </div> 
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
         </div>
        </div>
      );
    }  
}
  
function Achievement(props){
  return (
    <div className="card swiper-slide">
      <img src={doc} width="80" height="80" alt="Conent" />
      <h4>{props.heading}</h4>
      <h4>{props.link}</h4>
      {/* <a href="#">{props.link}</a> */}
    </div>
  );
}
  
class AchievementSection extends React.Component{

  componentDidMount(){
    this.swiper=new Swiper('.s2',
      {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    );
  }
  render(){
    return(
      <div>
        <h1>Achievements</h1>
        <div className="s2 swiper-container">
          <div className="swiper-wrapper">
            {
              arr.map(()=>{return (<Achievement heading="Main Heading" link="Read Full Article"/>)})
            }
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    );
  }
}
  
function History(){
  return (
    <div >
      <h1>ABOUT US</h1>
      <h3>
        A hospital is a place where a person goes to be healed when he or she is sick or injured. Doctors and nurses work at                  hospitals. Doctors  make use of advanced  medical technology to heal patients. The hospital may charge money for                      treatments checkups or the treatment may be free or the money will be paid by the government on behalf of the patient.
      </h3>
    </div>
  );
}
  


class AboutUs extends React.Component{

  render(){
    return(
      <div className="aboutus">
        <History/>
        <People/>
        <AchievementSection/>
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
        </footer>
      </div>
    );
  }
}
   
export default AboutUs;
 
