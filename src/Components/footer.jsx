import React from 'react'

function footer() {
  return (
    <div id="footer">
        <div id="first">
            <h1>We Care</h1>
            <p>We insure your safety</p>
            <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div id="second">
            <ul>
                <li className="head">PRODUCTS</li>
                <li><a href="#">Health insurance</a></li>
                <li><a href="#">Life Insurance</a></li>
                <li><a href="#">Term Life Insurance</a></li>
                <li><a href="#">Whole life insurance</a></li>
                <li><a href="#">General insurance</a></li>
            </ul>
        </div>
        <div id="third">
            <ul>
                <li className="head">ABOUT US</li>
                <li><a href="#">About We Care</a></li>
                <li><a href="#">Meet Our Team</a></li>
                <li><a href="#">Our Companies</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">We Care News</a></li>
            </ul>
        </div>
        <div id="forth">
            <ul>
                <li className="head">SUPPORT</li>
                <li><a href="#">Claims</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
        </div>
        <div id="fifth">
            <ul>
                <li className="head">MY ACCOUNT</li>
                <li><a href="#">Life Insurance</a></li>
                <li><a href="#">Health Insurance</a></li>
                <li><a href="#">Aru you an agent?</a></li>
            </ul>
        </div>
    </div>
  )
}

export default footer