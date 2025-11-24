import React from 'react'
import "./AppleTvAndAirpod.css";
import appleTvLogo from './assets/images/icons/apple-tv-logo.png'
import servantLogo from './assets/images/icons/servant-logo.png'

export default function AppleTvAndAirpod() {
  return (
    <>
      <section className="page fifth-page">
        <div className="box" id="baby-image">
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

        <div className="box" id="airpod">
          <div>
            <div className="product product-name">AirPods Pro</div>
            <div className="product-desc">Magic like you’ve never heard.</div>
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
          <div className="box-img airpods-pro"></div>
        </div>
      </section>
    </>
  );
}
