// Checkout.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';


const Checkout = () => {
  const { getTotalCartItems, getTotalAmount } = useContext(ShopContext);

  return (
    <div className="checkout container py-5">
      <h2 className="text-center mb-4 fw-bold">Checkout Summary</h2>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="d-flex justify-content-between mb-3">
          <span>Total Items:</span>
          <span>{getTotalCartItems()}</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span>Total Amount:</span>
          <span className="text-dark fw-bold">${getTotalAmount().toFixed(2)}</span>
        </div>
        <hr />
        <h5 className="mb-3">Shipping Details</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="John Doe" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="123 Main St" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder="City" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Postal Code</label>
              <input type="text" className="form-control" placeholder="00000" required />
            </div>
          </div>
          <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: '#0C67A0', color: '#fff' }}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;