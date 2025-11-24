import React from 'react'
import "./MacBookProAndIpad.css";
import ipadLogo from './assets/images/icons/new-ipad-logo.png'


export default function MacBookProAndIpad() {
  return (
    <>
         <section className="page">
        <div className="box">
            <div className="mac-laptop-pro">
                <div className="product-desc">16-inch model</div>
                <div className="product product-name">MacBook</div>
                <div className="product-desc">The best for the brightest.</div>
                <div className="options">
                    <ul>
                        <li><a href="#">Learn More &gt;</a></li>
                        <li><a href="#">Buy &gt;</a></li>
                    </ul>
                </div>
            </div>
            <div className="box-img mac-laptop"></div>
        </div>

        <div className="box">
            <div >
                <div className="product product-name"><img src={ipadLogo} alt="new ipad's logo"/></div>
                <div className="product-desc">Like a computer. Unlike any computer.</div>
                <div className="options">
                    <ul>
                        <li><a href="#">Learn More &gt;</a></li>
                        <li><a href="#">Buy &gt;</a></li>
                    </ul>
                </div>
            </div>
            <div className="box-img new-ipad"></div>
        </div>
    </section>
    </>
  )
}
