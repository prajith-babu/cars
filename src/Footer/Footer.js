import React from "react";
import FacebookLogo from '../Assets/facebookLogo.png'
import TwitterLogo from '../Assets/twitterLogo.jpg'
import InstagramLogo from '../Assets/instagramLogo.jpg'
import LinkedInLogo from '../Assets/linkedinLogo.jpg'
import "./Footer.css";
import { footerConstants } from "../Constants/Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-heading">{footerConstants.findUsOn}</h3>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="Facebook" className="footer-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterLogo} alt="Twitter" className="footer-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
        <p className="footer-text">{footerConstants.copyright}</p>
      </div>
        <div className="footer-heading">
          <h4 className="footer-heading">{footerConstants.community}</h4>
          <h6>{footerConstants.blog}</h6>
          <h6>{footerConstants.community}</h6>
        </div>
        <div className="footer-heading">
          <h4 className="footer-heading">{footerConstants.company}</h4>
          <h6>{footerConstants.aboutUs}</h6>
          <h6>{footerConstants.team}</h6>
          <h6>{footerConstants.compantandimprint}</h6>
        </div>
        <div className="footer-heading">
          <h4 className="footer-heading">{footerConstants.usefulLinks}</h4>
          <h6>{footerConstants.warranty}</h6>
          <h6>{footerConstants.termsOfUse}</h6>
          <h6>{footerConstants.privacyPolicy}</h6>
        </div>
    </footer>
  );
};

export default Footer;
