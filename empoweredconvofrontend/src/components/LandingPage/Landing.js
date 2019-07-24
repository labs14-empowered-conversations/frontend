import React from 'react';

import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <section className="intro">
          <div className="empowered">
            <div className="empoweredLeft">
              <div className="empoweredLeftBoxes">
                <h2>Today I am . . .</h2>
                <h1>
                  E M <span className="power">P O W E R </span>E D
                </h1>
                <h3>When words matter most.</h3>
                <h4>
                  A survivor-activated tool that educates and prepares the{' '}
                </h4>
                <h4>
                  person they will disclose to before the conversation takes
                  place.
                </h4>

                <div className="btn">
                  <button className="btnExplore">Explore</button>
                </div>
              </div>

              <div className="introBottomBox">
                <div className="introBottomBoxRight"></div>
              </div>
            </div>
            <div className="empoweredRight"></div>
          </div>
        </section>

        <section className="cta">
          <div className="ctaBoxes">
            <div className="ctaBoxesLeft">
              <div className="ctaBoxesMid"></div>
            </div>
            <div className="ctaBoxesRight"></div>
          </div>
          <div className="ctaBoxesBottom"></div>
        </section>
      </div>
    );
  }
}

export default Landing;
