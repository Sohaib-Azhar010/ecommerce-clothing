import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter container my-5">
      <h2 className="fw-bold mb-3">Get Exclusive Offers & Updates</h2>
      <p className="mb-4">Subscribe to our newsletter and stay updated on the latest collections, discounts, and trends.</p>
      <form className="row justify-content-center g-2 newsletter-input">
        <div className="col-sm-8 col-md-6">
          <input
            type="email"
            className="form-control form-control-lg shadow-sm"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn newsletter-btn">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
