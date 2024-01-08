import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="website-body">
      <div className="carrier-page-main-container">
        <div
          className="Stickyroll_root Stickyroll_sticky Stickyroll_page_0"
          style={{
            minHeight: 'var(--100vh, 100vh)',
            height: 'var(--Stickyroll_height, var(--100vh, 100vh))',
            '--Stickyroll_height': 'calc(6 * var(--100vh, 100vh))',
            '--Stickyroll_pages': 1,
            '--Stickyroll_factor': 5,
            '--Stickyroll_progress': 0.19519999999999998,
            '--Stickyroll_page': 0,
          }}
        >
          <div
            style={{
              position: 'sticky',
              top: 0,
              right: 0,
              left: 0,
              minHeight: 'var(--100vh, 100vh)',
            }}
          >
            <div className="carrier-page-main">
              <div className="carrier-page-top-section-main-container">
                <div className="tube-light-section" style={{ marginTop: '-75vh', opacity: 1 }}>
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame889.png"
                    alt="White Lamp"
                    className="white-lamp"
                    style={{ opacity: 0 }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame890.png"
                    alt="Neon Lamp"
                    className="neon-lamp"
                    style={{ opacity: 1 }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Vector1103.png"
                    alt="White Light"
                    className="white-light"
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Vector1335.png"
                    alt="Neon Light"
                    className="neon-light"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div className="logo-container" style={{ transform: 'translateY(0px)' }}>
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame836.png"
                    alt="Logo Part 1"
                    className="logo-part1"
                    style={{ marginTop: '0px', transform: 'translate(-20vw)' }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame837.png"
                    alt="Logo Part 2"
                    className="logo-part2"
                    style={{ marginTop: '0px', transform: 'translate(-18vw)' }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame891.png"
                    alt="Logo Part 3"
                    className="logo-part3"
                    style={{ marginTop: '0px', transition: 'all 1.5s ease-out 0s', opacity: 0 }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame892.png"
                    alt="Logo Part 4"
                    className="logo-part4"
                    style={{ marginTop: '0px', transform: 'translate(18vw)' }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame893.png"
                    alt="Logo Part 5"
                    className="logo-part5"
                    style={{ marginTop: '0px', transform: 'translate(20vw)' }}
                  />
                </div>
                <div className="search-bar-div" style={{ transform: 'translateY(6vh)', marginTop: '0px' }}>
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/search-jobs-text.png"
                    alt="Search Jobs Text"
                    className="search-jobs-text-img"
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame896.png"
                    alt="Scroll Down Image"
                    className="scroll-down-img"
                    style={{ transform: 'scale(1)', opacity: 1 }}
                  />
                  <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame894.png"
                    alt="Search Bar Image"
                    className="search-bar-img"
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-comp-main-container">
        <span className="img-icon">
          <img
            src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/mouse-icon.gif"
            alt="Mouse Icon"
          />
        </span>
      </div>
      <div className="zsiq_custommain siq_bR" >
        <img
          src="https://salesiq.zohopublic.in/igventures/fsticker_online/1698225335074_102003000000002180/photo.ls"
          alt="Chat Widget"
          className="chat-widget-img"
        />
      </div>
    </div>
  );
}

export default Main;
