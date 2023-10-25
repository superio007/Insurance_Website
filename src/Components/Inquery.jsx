import React from 'react'
import Header from './header';
import Footer from './footer';
import SideImg from '../Media/health-Insurance.png';
import {Link} from 'react-router-dom'

function Inquery() {
  
  return (
    <div>
        <Header/>
        <div id='Inquery'>
            <section id="questions">
  <div id="question">
    <div id="head">
      <h1>Frequently Asked Questions</h1>
    </div>
    <div>
      <ul id="que-ul">
        <li>
          <h3 id="que1">
          What is insurance?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans1">
          Insurance is a contractual agreement in which an individual or entity pays premiums to an insurance company in exchange for financial protection and coverage in the event of specific risks or losses.
          </div>
        </li>
        <li>
          <h3 id="que2">
          Why do I need insurance?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans2">
          Insurance provides financial security by covering unexpected expenses and losses, such as medical bills, property damage, or liability claims, which can help you avoid significant financial hardship.
          </div>
        </li>
        <li>
          <h3 id="que3">
          What types of insurance are available?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans3">
          There are various types of insurance, including auto insurance, home insurance, health insurance, life insurance, disability insurance, renters insurance, and business insurance, among others, each designed to address specific needs.
          </div>
        </li>
        <li>
          <h3 id="que4">
          How do insurance premiums work?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans4">
          Insurance premiums are regular payments you make to your insurance company in exchange for coverage. The amount you pay is determined by factors such as coverage limits, deductibles, your risk profile, and the type of insurance.
          </div>
        </li>
        <li>
          <h3 id="que5">
          What is a coverage limit?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans5">
          A coverage limit is the maximum amount an insurance policy will pay out for a covered loss. It is important to choose coverage limits that adequately protect your assets and financial interests.
          </div>
        </li>
        <li>
          <h3 id="que6">
          What is a policy term?
            <i
              className="fa-solid fa-plus fa-2xl"
              style={{ color: "black" }}
            />
          </h3>
          <div id="ans6">
          The policy term is the duration for which an insurance policy is in effect. Most policies are annual, but some may have shorter or longer terms. You must renew or reevaluate your policy at the end of each term.
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
        <div id="dash2">
        <div id="first">
            <div className="card">
                <h1>Health Insurance</h1>
                <p>49$/Month</p>
                <button>View More</button>
            </div>
            <div className="card">
                <h1>Car Insurance</h1>
                <p>29$/Month</p>
                <button>View More</button>
            </div>
            </div>
            <div id="second">
            <div className="card">
                <h1>Bike Insurance</h1>
                <p>39$/Month</p>
                <button>View More</button>
            </div>
            <div className="card">
                <h1>Home Insurance</h1>
                <p>59$/Month</p>
                <button>View More</button>
            </div>
            </div>
            <div id="third">
            <div className="card">
                <h1>Term Insurance</h1>
                <p>19$/Month</p>
                <button>View More</button>
            </div>
            <div className="card">
                <h1>Renatal Insurance</h1>
                <p>29$/Month</p>
                <button>View More</button>
            </div>
            </div>
        </div>
        <div id="dash3">
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
        </div>
        <Footer/>
    </div>
  )
}

export default Inquery