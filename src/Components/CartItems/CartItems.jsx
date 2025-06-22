import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {

    const navigate = useNavigate();

    const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const getTotalAmount = () => {
        return all_product.reduce((total, item) => {
            return total + (item.new_price * cartItems[item.id] || 0);
        }, 0);
    };

    const getTotalItems = () => {
        return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
    };

    return (



        <div className="container my-5 cart-items">
            <h2 className="mb-4 text-center fw-bold">Your Shopping Cart</h2>


            <>
                <div className="table-responsive mb-5">
                    <table className="table align-middle">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.values(cartItems).every(qty => qty === 0) ? (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted py-5">
                                            Your cart is empty.
                                        </td>
                                    </tr>
                                ) : (
                                    all_product.map(product => {
                                        const quantity = cartItems[product.id];
                                        if (quantity > 0) {
                                            return (
                                                <tr key={product.id}>
                                                    <td>
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="img-thumbnail cart-item-image"
                                                        />
                                                    </td>
                                                    <td>{product.name}</td>
                                                    <td>${product.new_price}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <button
                                                                className="btn btn-sm quantity-btn"
                                                                onClick={() => removeFromCart(product.id)}
                                                            >
                                                                −
                                                            </button>
                                                            <span className="fw-semibold">{quantity}</span>
                                                            <button
                                                                className="btn btn-sm quantity-btn"
                                                                onClick={() => addToCart(product.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>${(product.new_price * quantity).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => removeFromCart(product.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        } else return null;
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {/* Checkout section stays visible */}
                <div className="checkout-section p-4 rounded shadow-sm">
                    <h4 className="mb-3">Order Summary</h4>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Total Items:</span>
                        <span>{getTotalItems()}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Total Amount:</span>
                        <span className="fw-bold text-dark">${getTotalAmount().toFixed(2)}</span>
                    </div>
                    <div className="text-end">
                        <button
                            className="btn custom-btn px-4"
                            disabled={getTotalItems() === 0}
                            style={{
                                opacity: getTotalItems() === 0 ? 0.6 : 1,
                                cursor: getTotalItems() === 0 ? 'not-allowed' : 'pointer'
                            }}
                            onClick={() => navigate('/checkout')}
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            </>
        </div>
    );
};

export default CartItems;
