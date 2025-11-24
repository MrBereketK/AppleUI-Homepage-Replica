import React from 'react'
import "./WatchAndCards.css";
import watchLogo from './assets/images/icons/watch-series5-logo.png'
import appleCardLogo from './assets/images/icons/apple-card-logo.png'   

export default function WatchAndCards() {
  return (
    <>
    <section className="page fourth-page">
        <div className="box">
            <div className="product-logo"><img src={watchLogo} alt="Watch Series 5"/></div>
            <div className="product-desc">With the new Always-On Retina display. <br/>
You’ve never seen a watch like this.</div>
            <div className="options">
                <ul>
                    <li><a href="#">Learn More &gt;</a></li>
                    <li><a href="#">Buy &gt;</a></li>
                </ul>
            </div>
            <div className="box-img watch"></div>
        </div>

        <div className="box">
            <div className="product-logo"><img src={appleCardLogo} alt="Apple card"/></div>
            <div className="product-desc">Get 3% Daily Cash on purchases from <br/> Apple using Apple Card.</div>
            <div className="options" id="apple-card">
                <ul>
                    <li><a href="#">Learn More &gt;</a></li>
                    <li><a href="#">Buy &gt;</a></li>
                </ul>
            </div>
            <div className="box-img apple-card"></div>
        </div>
    </section>

    </>
  )
}
