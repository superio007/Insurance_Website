import React from 'react'
import Header from './header';  
import Footer from './footer';
import Back1 from '../Media/back1.png';
function HealthInsurance() {
  return (
    <>
        <Header/>
        <div id='Health'>
            <img src={Back1} alt="" />
        </div>
        <Footer/>
    </>
    
  )
}

export default HealthInsurance