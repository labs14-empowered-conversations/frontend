import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="stage-left">
          <div className="stage-title">
            <h5>Today I am . . .</h5>
            <h1><span>EM</span><span style={{color: '#24b4a5'}}>POWER</span><span>ED</span></h1>
            <h4>When words matter most.</h4>
            <p>
              A survivor-activated tool that educates and prepares the person
              they will disclose to before the conversation takes place.
            </p>
          </div>
          <div className="lime-card" />
        </div>
      </div>
    );
  };
};