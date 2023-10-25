import React from 'react'
import Header from './header';  
import Footer from './footer';
import SideImg from '../Media/health-Insurance.png';  
import face1 from '../Media/face1.jpg'
import face2 from '../Media/face2.jpg'
import face3 from '../Media/face3.jpg'
import face4 from '../Media/face4.jpg'
import face5 from '../Media/face5.jpg'
import face6 from '../Media/face6.avif'
import pic1 from '../Media/Affordable.svg';
import pic2 from '../Media/instant-decision.svg';
import pic3 from '../Media/no-medical.svg';
import {Link} from 'react-router-dom';


function AboutUs() {
  return (
    <div>
        <Header/>
        <section id='About'> 
        <h1>Meet Our Team</h1>
        <div id="dash1">
        <div id="first">
              <div className='card'>
              <img src={face1} alt="" />
              <h1>Reema Khan</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='card'>
            <img src={face2} alt="" />
              <h1>Robert Willams</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div></div>
            <div id="second">
            <div className='card'>
            <img src={face3} alt="" />
              <h1>Elena Watson</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='card'>
            <img src={face4} alt="" />
              <h1>Mona Glopis</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            </div>
            <div id="third">
            <div className='card'>
            <img src={face5} alt="" />
              <h1>Ronny Manison</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='card'>
            <img src={face6} alt="" />
              <h1>Kareena Khan</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            </div>
        </div>
        <div id="dash2">
          <div id="left">
            <h1>You don't buy life insurance because you are going to die, </h1>
            <p>but because those you love are going to live.</p>
            <Link to="/signlog">
            <button>Join-Us</button>
            </Link>
          </div>
          <div id="right">
            <img src={SideImg} alt="Family BBQ" />
          </div>
        </div>
        <div id="dash3">
            <h1>Why Lumico Protect Now Term?</h1>
            <p>A term life insurance policy is a type of insurance that covers you and your loved ones for a specific period of time. After the level term period ends, the coverage renews at higher rates which increase annually through age 95. </p>
            <p>Lumico Protect Now Term allows you to protect your loved ones from debt for specific life events in your absence like paying for a mortgage, replacing lost income, or sending your children to college. With Lumico Protect Now Term, you'll provide your family with the confidence and peace of mind they need to feel financially protected in the future.</p>
        </div>
        <div id="dash4">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
        </div>
        </section>
        <Footer/>
    </div>
  )
}

export default AboutUs