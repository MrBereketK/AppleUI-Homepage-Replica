import React from 'react'
import "./MacBookProAndIpad.css";
import ipadLogo from './assets/images/icons/new-ipad-logo.png'


export default function MacBookProAndIpad() {
  return (
    <>
         <section class="page">
        <div class="box">
            <div class="mac-laptop-pro">
                <div class="product-desc">16-inch model</div>
                <div class="product product-name">MacBook</div>
                <div class="product-desc">The best for the brightest.</div>
                <div class="options">
                    <ul>
                        <li><a href="#">Learn More &gt;</a></li>
                        <li><a href="#">Buy &gt;</a></li>
                    </ul>
                </div>
            </div>
            <div class="box-img mac-laptop"></div>
        </div>

        <div class="box">
            <div >
                <div class="product product-name"><img src={ipadLogo} alt="new ipad's logo"/></div>
                <div class="product-desc">Like a computer. Unlike any computer.</div>
                <div class="options">
                    <ul>
                        <li><a href="#">Learn More &gt;</a></li>
                        <li><a href="#">Buy &gt;</a></li>
                    </ul>
                </div>
            </div>
            <div class="box-img new-ipad"></div>
        </div>
    </section>
    </>
  )
}
