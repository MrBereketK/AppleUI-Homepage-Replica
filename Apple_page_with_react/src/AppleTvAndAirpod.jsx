import React from 'react'
import "./AppleTvAndAirpod.css";
import appleTvLogo from './assets/images/icons/apple-tv-logo.png'
import servantLogo from './assets/images/icons/servant-logo.png'

export default function AppleTvAndAirpod() {
  return (
    <>
      <section class="page fifth-page">
        <div class="box" id="baby-image">
          <div id="appletv-logo">
            <img src={appleTvLogo} alt="Apple tv logo" />
          </div>
          <div id="appletv-logo-desc">
            <img src={servantLogo} alt="Servant logo" />
          </div>
          <div id="appletv-link">
            <a href="#">Watch the trailer ▶</a>
          </div>
        </div>

        <div class="box" id="airpod">
          <div>
            <div class="product product-name">AirPods Pro</div>
            <div class="product-desc">Magic like you’ve never heard.</div>
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
          <div class="box-img airpods-pro"></div>
        </div>
      </section>
    </>
  );
}
