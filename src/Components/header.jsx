import React, { useEffect } from 'react'
import About from './AboutUs'
import {Link} from 'react-router-dom'
 
function header() {

  return (
    <div id='header'>
      <div id="left">
        <h1>We Care</h1>
        <p>We insure your safety</p>
      </div>
      <div id="right">
        <ul>
          <li>
            <Link to="/">
            <a>Home</a>
            </Link>
            </li>
          <li>
            <Link to="/about">
            <a>About US</a>
            </Link>
            </li>
          <li>
            <Link to="/faq">
            <a>FAQ</a>
          </Link></li>
          <Link to="/signlog">
          <button type='button'>Sign-Up</button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default header