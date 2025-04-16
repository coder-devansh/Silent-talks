import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Wave Top with gradient */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#4f46e5"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#4f46e5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#4f46e5"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content container py-5">
        <div className="row justify-content-between">
          {/* Navigation */}
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <h4 className="footer-title mb-4">Quick Links</h4>
            <ul className="list-unstyled footer-links">
              <li className="mb-3">
                <a href="/" className="footer-link hover-underline">
                  <i className="fas fa-home mr-2"></i> Home
                </a>
              </li>
              <li className="mb-3">
                <a href="/signkit" className="footer-link hover-underline">
                  <i className="fas fa-tools mr-2"></i> SignKit
                </a>
              </li>
              <li className="mb-3">
                <a href="/signtalk" className="footer-link hover-underline">
                  <i className="fas fa-comments mr-2"></i> SignTalk
                </a>
              </li>
              <li className="mb-3">
                <a href="/about" className="footer-link hover-underline">
                  <i className="fas fa-info-circle mr-2"></i> About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link hover-underline">
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <h4 className="footer-title mb-4">Get In Touch</h4>
            <ul className="list-unstyled footer-contact">
              <li className="mb-3">
                <a href="tel:9999999999" className="footer-link">
                  <i className="fas fa-phone-alt mr-2"></i> 
                  <span className="hover-underline">+1 (999) 999-9999</span>
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:abc@gmail.com" className="footer-link">
                  <i className="fas fa-envelope mr-2"></i> 
                  <span className="hover-underline">abc@gmail.com</span>
                </a>
              </li>
              <li className="mb-3">
                <i className="fas fa-map-marker-alt mr-2"></i> 
                <span>123 Main Street, City, Country</span>
              </li>
            </ul>
            
            <div className="social-links mt-4">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12">
            <h4 className="footer-title mb-4">Newsletter</h4>
            <p className="footer-text mb-4">Subscribe to our newsletter for the latest updates</p>
            <form className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  aria-label="Your email" 
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-subscribe" type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom mt-5 pt-4 border-top border-light">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="mb-0">&copy; {new Date().getFullYear()} SilentTalks. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <a href="/privacy" className="footer-link mr-3">Privacy Policy</a>
              <a href="/terms" className="footer-link mr-3">Terms of Service</a>
              <a href="/cookies" className="footer-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;