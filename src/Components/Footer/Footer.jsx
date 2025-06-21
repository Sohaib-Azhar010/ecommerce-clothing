import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'; // Replace with your actual logo path
import './Footer.css'; // Optional for minor customizations

const Footer = () => {
  return (
    <footer className="bg-footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {/* Left: Logo and Brand */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <img src={logo} alt="Shoppex Logo" width="60" height="60" className="me-2" />
              <h5 className="mb-0 fw-bold text-white">SHOPPEX</h5>
            </div>
            <p className="text-white">
              Your go-to destination for fashion, quality, and style.
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="col-md-6">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-4">
              <li><Link to="/" className="text-white text-decoration-none">Shop</Link></li>
              <li><Link to="/mens" className="text-white text-decoration-none">Men</Link></li>
              <li><Link to="/womens" className="text-white text-decoration-none">Women</Link></li>
              <li><Link to="/kids" className="text-white text-decoration-none">Kids</Link></li>
              <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none">Cart</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <hr className="border-white mt-4" />
        <div className="text-center text-white small">
          &copy; {new Date().getFullYear()} SHOPPEX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
