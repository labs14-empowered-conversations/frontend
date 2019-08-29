import React from 'react';
import { Link } from 'react-router-dom';
import componentUpdate from 'redux-state-manage';
import './Landing.css';
import { Responsive } from 'semantic-ui-react';
import Parallax from 'react-rellax';

export default class Landing extends React.Component {
  state = {
    mobileChange: false,
  };
  forceUpdate = () => {
    if (window.innerWidth >= 950) {
      this.setState({ mobileChange: false });
    } else if (window.innerWidth <= 950) {
      this.setState({ mobileChange: true });
    }
  };

  resize = () => this.forceUpdate();

  componentDidMount() {
    componentUpdate.setState();
    window.addEventListener('resize', this.resize);
    this.forceUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    componentUpdate.setState();
  }

  render() {
    return (
      <div className="landing-stage">
        <Parallax speed={3} centered vertical={false} horizontal={true}>
          <div className="landing-stage-left">
            <div className="landing-stage-title">
              <h5>Today I am . . . LOREM</h5>
              <h1>
                <span>IP</span>
                <span style={{ color: '#24b4a5' }}>'''''</span>
                <span>SUM</span>
              </h1>
              <h4>PARALLAX LOREM IPSUM, AWESOME</h4>
              <p>40 hrs x 8 team members x 8 weeks [2560 hrs total]</p>
              <p>for this. hire us?</p>
              <div className="landing-button-box">
                <Link to="/learn">
                  <button className="landingBtn">????????</button>
                </Link>
              </div>
            </div>
            {/* <div className="landing-lime-card" /> */}
          </div>
        </Parallax>

        {/* <div className="landing-stage-plane">
          <div className="landing-stage-trap" />
        </div> */}
        <div className="landing-float-plane">
          {this.state.mobileChange ? (
            <>
              <h3 className="tablet-video-header">
                One Lorem
                <br />
                at an Ipsum
              </h3>
            </>
          ) : null}
          <div className="landing-float-centerpiece">
            <div className="landing-vid-floater"></div>
            <div className="landing-text-floater">
              {!this.state.mobileChange ? (
                <>
                  <h3>
                    One Lorem
                    <br />
                    at an Ipsum
                  </h3>
                </>
              ) : null}
              <p>
                <span>Our IPSUM takes the Lorem</span>
                <span style={{ fontWeight: 'bold' }}> and Ipsum </span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  animi reprehenderit? Aperiam ex magni numquam itaque,
                  aspernatur quia dolorem repellat. Ducimus nostrum veritatis
                  natus? Expedita est deserunt quisquam temporibus eum.
                </span>
              </p>
            </div>
          </div>
          {/* float centerpiece end */}
          {!this.state.mobileChange ? (
            <div className="landing-statement">
              <h2>What LOOOOOOOOOREMMMMMM</h2>
              <div className="bullet-point">
                <div className="bullet">1</div>
                <div className="bullet-point-text">
                  <h4>Lorem</h4>
                  <p>LoremIpsumLoremIpSum</p>
                </div>
              </div>
              <div className="bullet-point">
                <div className="bullet">2</div>
                <div className="bullet-point-text">
                  <h4>IPPPPPPPPPSUMMMMMMMM</h4>
                  <p>Lorem</p>
                </div>
              </div>
              <div className="bullet-point">
                <div className="bullet">3</div>
                <div className="bullet-point-text">
                  <h4>Lorem</h4>
                  <p>Have a Lorem of Lorem instead of Ipsum.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="landing-statement">
              <h2>Ipsum We Lorem</h2>
              <div className="landing-column">
                <h4>IPSUMIPSUMIPSUMIPSUM</h4>
                <p>
                  We've got your Lorem when it Lorem to Lorem Lorem out to a
                  Lorem Lorem!
                </p>
              </div>
              <div className="landing-column">
                <h4>Lorem</h4>
                <p>Lorem educate Lorem about Lorem and how to Lorem you.</p>
              </div>
              <div className="landing-column">
                <h4>Lorem</h4>
                <p>Lorem a Lorem of Lorem Lorem of Lorem.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
