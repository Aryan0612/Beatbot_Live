import React from "react";
import './Premium.css';
import backgroundImg from '../assets/Headphones.jpg';

function GoPremium() {
  return (
    <div className="go-premium" style={{ backgroundImage: `url("${backgroundImg}")` }}>
        <div className="content">
        <div className="header" align="center">
            <h1>Go Premium @ ₹69</h1>
            <p>Upgrade your account to unlock premium features like:</p>
        </div>
        <div className="output">
            <ul>
                <li>Access exclusive content</li>
                <li>Download high-quality audio files</li>
                <li>Use advanced tools and features</li>
            </ul>
        </div>
        <div className="output">
            <ul>
                <li>Unlimited streaming of ad-free music</li>
                <li>Exclusive access to new releases and live performances</li>
                <li className="three">Personalized playlists and recommendations</li>
            </ul>
        </div>
        </div>
        <a href="https://q9ifnk.csb.app/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Upgrade Now
        </a>
    </div>
  );
}

export default GoPremium;