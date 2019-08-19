import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <img
          className="landingBackground"
          src="assets/Background new.png"
          alt="background"
        />

        <section className="introContainer">
          <div className="introDesktop">
            <div className="intro">
              <img src="assets/intro/Today I am . . ..png" alt="today i am" />
              <img src="assets/intro/EMPOWERED.png" alt="empowered" />
              <img
                src="assets/intro/When words matter mo.png"
                alt="when words matter"
              />
              <img
                src="assets/intro/A survivor-activated.png"
                alt="survivor activated tool"
              />
            </div>

            <Link to="/form">
              <img
                className="btnExplore"
                src="assets/intro/explore button.png"
                alt="explore"
              />
            </Link>
          </div>

          <div className="introMobile">
            <div className="intro">
              <img
                src="assets/intro/mobile/Today I am . . ..png"
                alt="today i am"
              />
              <img src="assets/intro/mobile/EMPOWERED.png" alt="empowered" />
              <img
                src="assets/intro/mobile/When words matter mo.png"
                alt="when words matter"
              />
              <img
                src="assets/intro/mobile/A survivor-activated.png"
                alt="survivor activated tool"
              />
            </div>
            <Link to="/form">
              <img
                className="btnExplore"
                src="assets/intro/mobile/explore button.png"
                alt="explore"
              />
            </Link>
          </div>
        </section>

        <section className="ctaContainer">
          <img
            className="ctaBackground"
            src="assets/cta/Rectangle.png"
            alt="background rectangle"
          />

          <div className="ctaTextMobile">
            <img
              className="oneConversationMobile"
              src="assets/cta/mobile/One Conversation at.png"
              alt="one conversation"
            />
          </div>

          <div className="cta">
            <div className="ctaVideoContainer">
              <Link to="/learn">
                <img
                  className="ctaVideo"
                  src="assets/cta/katherine-hanlon-bHhEJAXyFOg-unsplash.png"
                  alt="cta video"
                />
                <img
                  className="ctaVideoMobile"
                  src="assets/cta/mobile/katherine-hanlon-bHhEJAXyFOg-unsplash.png"
                  alt="cta video"
                />

                <img
                  className="btnPlay"
                  src="assets/cta/play button.png"
                  alt="video play"
                />
              </Link>
            </div>

            <div className="ctaText">
              <img
                className="oneConversation"
                src="assets/cta/One Conversation at.png"
                alt="one conversation"
              />

              <img
                className="outTool"
                src="assets/cta/Our tool takes the b.png"
                alt="our tool"
              />

              <Link to="/form">
                <img
                  className="btnCta"
                  src="assets/cta/Use The Tool Button.png"
                  alt="use tool"
                />
              </Link>
            </div>
          </div>

          <div className="ctaTextMobile">
            <img
              className="ourToolMobile"
              src="assets/cta/mobile/Our tool takes the b.png"
              alt="Our tool"
            />
          </div>
        </section>

        <section className="whatWeDoContainer">
          <img
            className="whatWeDoImg"
            src="assets/whatwedo/What We Do.png"
            alt="what we do"
          />

          <div className="numListItem">
            <div className="oval">
              <img src="assets/whatwedo/1/Oval Copy.png" alt="oval" />
              <img
                className="ovalNum"
                src="assets/whatwedo/1/1.png"
                alt="number"
              />
            </div>

            <div className="ovalDescription">
              <img
                className="numTitle"
                src="assets/whatwedo/1/Communicate.png"
                alt="Communicate"
              />
              <img
                className="numDescription"
                src="assets/whatwedo/1/We got your back whe.png"
                alt="we got your back"
              />
            </div>
          </div>

          <div className="numListItem">
            <div className="oval">
              <img src="assets/whatwedo/1/Oval Copy.png" alt="oval" />
              <img
                className="ovalNum"
                src="assets/whatwedo/2/2.png"
                alt="number"
              />
            </div>

            <div className="ovalDescription">
              <img
                className="numTitle"
                src="assets/whatwedo/2/Educate.png"
                alt="Educate"
              />
              <img
                className="numDescription"
                src="assets/whatwedo/2/We’ll educate them a.png"
                alt="We’ll educate them"
              />
            </div>
          </div>

          <div className="numListItem">
            <div className="oval">
              <img src="assets/whatwedo/1/Oval Copy.png" alt="oval" />
              <img
                className="ovalNum"
                src="assets/whatwedo/3/3.png"
                alt="number"
              />
            </div>

            <div className="ovalDescription">
              <img
                className="numTitle"
                src="assets/whatwedo/3/Empower.png"
                alt="Empower"
              />
              <img
                className="numDescription"
                src="assets/whatwedo/3/Have a conversation.png"
                alt="Have a conversation"
              />
            </div>
          </div>

          <div className="mobileListItems">
            <div className="mobileListItem">
              <img
                className="mobileListItemTitle"
                src="assets/whatwedo/1/mobile/Communicate.png"
                alt="Communicate"
              />
              <img
                className="mobileListItemDesc"
                src="assets/whatwedo/1/tablet/We got your back whe.png"
                alt="We got your back"
              />
            </div>

            <div className="mobileListItem">
              <img
                className="mobileListItemTitle"
                src="assets/whatwedo/2/mobile/Educate.png"
                alt="Educate"
              />
              <img
                className="mobileListItemDesc"
                src="assets/whatwedo/2/tablet/We’ll educate them a.png"
                alt="We’ll educate them a"
              />
            </div>

            <div className="mobileListItem">
              <img
                className="mobileListItemTitle"
                src="assets/whatwedo/3/mobile/Empower.png"
                alt="Empower"
              />
              <img
                className="mobileListItemDesc"
                src="assets/whatwedo/3/tablet/Have a conversation.png"
                alt="Have a conversation"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
