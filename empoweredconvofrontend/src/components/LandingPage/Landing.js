import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing-stage">
        <div className="landing-stage-left">
          <div className="landing-stage-title">
            <h5>Today I am . . .</h5>
            <h1>
              <span>EM</span>
              <span style={{ color: '#24b4a5' }}>POWER</span>
              <span>ED</span>
            </h1>
            <h4>When words matter most.</h4>
            <p>
              A survivor-activated tool that educates and prepares the person
              they will disclose to before the conversation takes place.
            </p>
            <div className="landing-button-box">
              <Link to="/learn">
                <button className="landingBtn">Explore</button>
              </Link>
            </div>
          </div>
          {/* <div className="landing-lime-card" /> */}
        </div>
        {/* <div className="landing-stage-plane">
          <div className="landing-stage-trap" />
        </div> */}
        <div className="landing-float-plane">
          <div className="landing-float-centerpiece">
            <div className="landing-vid-floater">Video goes here.</div>
            <div className="landing-text-floater">
              <h3>One Conversation<br/>at a Time</h3>
              <p>
                <span>
                  Our tool takes the burden off of the survivor for having to
                </span>
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  educate their loved ones about assault{' '}
                </span>
                <span>
                  during disclosure because we provide that training ahead of
                  time.
                </span>
              </p>
              <Link to="/form">
                <button>Use The Tool</button>
              </Link>
            </div>
          </div>
          <div className="landing-statement">
            <h2>What We Do</h2>
            <div className="bullet-point">
              <div className="bullet">1</div>
              <div className="bullet-point-text">
                <h4>Communicate</h4>
                <p>We've got your back when it comes to anonymously reaching out to a loved one!</p>
              </div>
            </div>
            <div className="bullet-point">
              <div className="bullet">2</div>
              <div className="bullet-point-text">
                <h4>Educate</h4>
                <p>We'll educate them about assault and how to support you.</p>
              </div>
            </div>
            <div className="bullet-point">
              <div className="bullet">3</div>
              <div className="bullet-point-text">
                <h4>Empower</h4>
                <p>Have a conversation of Empowerment instead of fear.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
