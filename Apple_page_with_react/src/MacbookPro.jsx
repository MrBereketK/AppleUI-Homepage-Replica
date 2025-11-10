import React from 'react'
import macLaptop from './assets/images/home/mac-laptop.jpg'
import "./MacbookPro.css";

export default function MacbookPro() {
  return (
    <>
      <section className="first-page">
        <div className="product small-detail">16-inch model</div>
        <div className="product product-name">MacBook Pro</div>
        <div className="product product-description">
          The best for the brightest.
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#">Learn More &gt; </a>
            </li>
            <li>
              <a href="#">Buy &gt; </a>
            </li>
          </ul>
        </div>
        <div className="mac-pc">
          <img src={macLaptop} alt="Mac laptop's picture" />
        </div>
      </section>
    </>
  );
}
