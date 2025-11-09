import React from 'react'
import './Footer.css'
import UsFlag from './assets/images/icons/16.png'

export default function Footer() {
  return (
    <footer className="sixth-page">
        <div>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. Full terms apply.</div>

        <br/>
        <hr/>
        <br/>

    <section className="end">
        <div>
            <ul>
                <li>Shop and Learn</li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">Ipad</a></li>
                <li><a href="#">Iphone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">HomePod</a></li>
                <li><a href="#">iPod touch</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Services</li>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple News+</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Card</a></li>
                <li><a href="#">iCloud</a></li>
            </ul>

            <ul>
                <li>Account</li>
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
            </ul>
        </div>

        <div>
            <ul>
                <li>Apple Store</li>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
                <li><a href="#">Refurbished and Clearance</a></li>
                <li><a href="#">Financing</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Shopping Help</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>For Business</li>
                <li><a href="#">Apple and Business</a></li>
                <li><a href="#">Shop for Business</a></li>
            </ul>
            <ul>
                <li>For Education</li>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for College</a></li>
            </ul>

            <ul>
                <li>For Healthcare</li>
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
            </ul>

            <ul>
                <li>For Government</li>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for College</a></li>
            </ul>
        </div>

        <div>
            <ul>
                <li>Apple Values</li>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
            </ul>

            <ul>
                <li>About Apple</li>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
            </ul>
        </div>
    </section>
    <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>

    <br/>
    
        <section className="footer">
        <div className="footer-left">
            <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
        </div>

        <div className="footer-center">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Sales and Refunds</a>
            <span>|</span>
            <a href="#">Legal</a>
            <span>|</span>
            <a href="#">Site Map</a>
        </div>

        <div className="footer-right">
            <img src={UsFlag} alt="US Flag" className="flag"/>
            <span>United States</span>
        </div>
        </section>

</footer>
  )
}
