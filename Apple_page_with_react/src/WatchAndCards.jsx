import React from 'react'
import "./WatchAndCards.css";
import watchLogo from './assets/images/icons/watch-series5-logo.png'
import appleCardLogo from './assets/images/icons/apple-card-logo.png'   

export default function WatchAndCards() {
  return (
    <>
    <section class="page fourth-page">
        <div class="box">
            <div class="product-logo"><img src={watchLogo} alt="Watch Series 5"/></div>
            <div class="product-desc">With the new Always-On Retina display. <br/>
You’ve never seen a watch like this.</div>
            <div class="options">
                <ul>
                    <li><a href="#">Learn More &gt;</a></li>
                    <li><a href="#">Buy &gt;</a></li>
                </ul>
            </div>
            <div class="box-img watch"></div>
        </div>

        <div class="box">
            <div class="product-logo"><img src={appleCardLogo} alt="Apple card"/></div>
            <div class="product-desc">Get 3% Daily Cash on purchases from <br/> Apple using Apple Card.</div>
            <div class="options" id="apple-card">
                <ul>
                    <li><a href="#">Learn More &gt;</a></li>
                    <li><a href="#">Buy &gt;</a></li>
                </ul>
            </div>
            <div class="box-img apple-card"></div>
        </div>
    </section>

    </>
  )
}
