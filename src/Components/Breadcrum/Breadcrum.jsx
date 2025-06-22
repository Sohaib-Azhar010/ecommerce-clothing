import React from 'react';
import breadcrum from '../Assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrumb-wrapper container my-4">
      <div className="d-flex flex-wrap align-items-center gap-2">
        <Link to="/" className="crumb-link">Home</Link>
        <img src={breadcrum} alt=">" className="crumb-arrow" />

        <Link to="/shop" className="crumb-link">Shop</Link>
        <img src={breadcrum} alt=">" className="crumb-arrow" />

        <span className="crumb-current text-capitalize">{product.category}</span>
        <img src={breadcrum} alt=">" className="crumb-arrow" />

        <span className="crumb-current text-capitalize">{product.name}</span>
      </div>
    </div>
  );
};

export default Breadcrum;
