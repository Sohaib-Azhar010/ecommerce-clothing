import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {

    const {addToCart} = useContext(ShopContext);
  return (
    <div className="container product-display my-5">
      <div className="row g-4 align-items-start">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm main-product-image" />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold text-dark">{product.name}</h2>
          <p className="text-muted text-capitalize mb-2">{product.category}</p>

          <div className="product-price mb-3">
            <span className="new-price">${product.new_price}</span>
            <span className="old-price ms-3">${product.old_price}</span>
          </div>

          <p className="product-description text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
          </p>

          {/* Size selection */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Select Size:</label>
            <div className="d-flex gap-2 flex-wrap">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="btn btn-outline-dark btn-sm rounded-pill px-3">{size}</button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="d-grid gap-2 d-md-block mt-4">
            <button className="btn btn-primary custom-btn px-4 me-3" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
