import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

library.add(faTwitterSquare);
library.add(faInstagram);
library.add(faFacebook);
library.add(faHeart);

const icon = <FontAwesomeIcon icon={faTwitterSquare} />;
const icon2 = <FontAwesomeIcon icon={faInstagram} />;
const icon3 = <FontAwesomeIcon icon={faFacebook} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <p className="footer-p">Together, We LOREM IPSUM </p>{' '}
        <div className="heart">{heartIcon}</div>
      </div>
      <div className="footer-bottom">Lorem Ipsum</div>
    </footer>
  );
}
