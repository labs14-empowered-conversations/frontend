import React from 'react';
import { Link } from 'react-router-dom';
// import EmLogo from '../../assets/Medium/EmpoweredConversation-Logo-Md-RGB.png';
import './Bar.css';
import ctaBtn from './use_the_tool_btn.png';
import Hamburger from './Hamburger';

export default function Bar() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo-div">
          <Link to="/">
            <img
              className="nav-logo"
              src={''}
              alt="Empowered Conversations clickable logo; returns to homepage."
            />
          </Link>
          <h6>Empowered Conversation</h6>
        </div>
        <nav className="nav-front">
          <Link className="link-dec" to="/about">
            About
          </Link>
          <Link className="link-dec" to="/learn">
            Learn
          </Link>
          {/* <Link to='/form' className="nav-button">Use The Tool</Link> */}
          <Link to="/form">
            <img className="btnCta" src={ctaBtn} alt="use tool" />
          </Link>
        </nav>
        <div className="mobile-nav">
          {/* <Ham2 className="mobile-nav" /> */}
          <Hamburger className="mobile-nav" />
        </div>
      </div>
    </>
  );
}
