import React from 'react'
// import iphone11ProImage from './assets/images/iphone/iphone-11-pro.jpg'
import "./Iphone11Pro.css";

export default function Iphone11Pro() {
  return (
    <>
      <section className="second-page">
        <div className="first-div">
          <div className="product product-name" id="pro-name2">
            iPhone 11 Pro
          </div>
          <div className="product pro-desc2">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="product small-detail">
            From $24.95/mo. or $599 with trade‑in.
          </div>
          <div className="options">
            <ul>
              <li>
                <a href="#">Learn More &gt;</a>
              </li>
              <li>
                <a href="#">Buy &gt;</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="iphone-pro">
          {/* { //<img src="Image/home/iphone11-pro-bg.jpg" alt="iPhone 11 Pro's picture"> } */}
        </div>
      </section>
    </>
  );
}
