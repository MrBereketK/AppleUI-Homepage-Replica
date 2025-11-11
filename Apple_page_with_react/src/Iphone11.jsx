import React from "react";
import "./Iphone11.css";

export default function Iphone11() {
  return (
    <>
      <section class="third-page">
        <div class="first-div">
          <div class="product product-name" id="pro-name2">
            iPhone 11
          </div>
          <div class="product pro-desc2">
            Just the right amount of everything.
          </div>
          <div class="product small-detail">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div class="options">
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
        <div class="iphone-11">
          {/* <img src="Image/home/iphone11-pro-bg.jpg" alt="iPhone 11 Pro's picture"> */}
        </div>
      </section>
    </>
  );
}
