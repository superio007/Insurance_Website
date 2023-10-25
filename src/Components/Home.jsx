import React from 'react';
import Header from './header';  
import Footer from './footer';
import SideImg from '../Media/Hero - family bbq.svg';
import face1 from '../Media/face1.jpg'
import face2 from '../Media/face2.jpg'
import face3 from '../Media/face3.jpg'
import face4 from '../Media/face4.jpg'
import face5 from '../Media/face5.jpg'
import face6 from '../Media/face6.avif'
import {Link} from 'react-router-dom'
 
function Home() {
  return (
    <div>
      <Header /> 
      <section id="home">
        <div id="dash1">
          <div id="left">
            <h1> Life is embracing those little moments.</h1>
            <p>insurance is protecting them</p>
            <Link to="/Inquery">
            <button type='button'>Inquery</button>
            </Link>
          </div>
          <div id="right">
            <img src={SideImg} alt="Family BBQ" />
          </div>
        </div>
        <div id="dash2">
            <div id="first">
            <div className="card">
                <h1>Health Insurance</h1>
                <p>49$/Month</p>
                <button type='button'>View More</button>
            </div>
            <div className="card">
                <h1>Car Insurance</h1>
                <p>29$/Month</p>
                <button type='button'>View More</button>
            </div>
            </div>
            <div id="second">
            <div className="card">
                <h1>Bike Insurance</h1>
                <p>39$/Month</p>
                <button type='button'>View More</button>
            </div>
            <div className="card">
                <h1>Home Insurance</h1>
                <p>59$/Month</p>
                <button type='button'>View More</button>
            </div>
            </div>
            <div id="third">
            <div className="card">
                <h1>Term Insurance</h1>
                <p>19$/Month</p>
                <button type='button'>View More</button>
            </div>
            <div className="card">
                <h1>Renatal Insurance</h1>
                <p>29$/Month</p>
                <button type='button'>View More</button>
            </div>
            </div>
        </div>
        <div id="dash3">
            <h1>Request a Call Back</h1>
            <div id="input">
                <input type="email" name="" id="mail" placeholder="Enter your Mail" />
                <br />
                <input type="text" name="mobileNumber" placeholder="Enter your Mb-No" />
            </div>
            <button type='button'>Submit</button>
        </div>
        <div id="dash4">
            <div id="first">
              <div className='card'>
              <img src={face1} alt="" />
              <h1>Reema Khan</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div>
            <div className='card'>
            <img src={face2} alt="" />
              <h1>Robert Willams</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div></div>
            <div id="second">
            <div className='card'>
            <img src={face3} alt="" />
              <h1>Elena Watson</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div>
            <div className='card'>
            <img src={face4} alt="" />
              <h1>Mona Glopis</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div>
            </div>
            <div id="third">
            <div className='card'>
            <img src={face5} alt="" />
              <h1>Ronny Manison</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div>
            <div className='card'>
            <img src={face6} alt="" />
              <h1>Kareena Khan</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ut.</p>
            </div>
            </div>
        </div>
      </section>
      <Footer /> 
    </div>
  );
}

export default Home;
