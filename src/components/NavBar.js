import React from 'react';
import './NavBar.css';
function NavBar() {
  return (
    <div className="navbar-comp-main-container">
      <div className="navbar-one-comp-main-container">
        <div className="logo-div">
          <a className="link-tag" href="/">
            <img
              src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav-items-div">
          <a className="link-tag" href="/differentiator">
            Differentiator<span></span>
          </a>
          <a className="link-tag" href="/how-it-works">
            Procedure<span></span>
          </a>
          <a className="link-tag" href="/our-pricing">
            Pricing<span></span>
          </a>
          <a className="link-tag" href="/about-us">
            About<span></span>
          </a>
          <a className="link-tag" href="/blog">
            Blog<span></span>
          </a>
          <a className="link-tag" href="/team-up">
            Contact<span></span>
          </a>
          <a
            className="link-tag"
            href="/careers"
            style={{ color: 'rgb(225, 225, 0)', textTransform: 'uppercase' }}
          >
            Careers<span style={{ opacity: 1 }}></span>
          </a>
          <a className="login-btn" href="https://pitch-catalyst-client-dashboard.vercel.app/">
            Login
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;
