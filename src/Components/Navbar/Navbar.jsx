import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_logo from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For custom styles like nav-cart-count

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="logo" width="40" height="40" />
          <span className="fw-bold fs-4 text-dark">SHOPPEX</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto gap-4 text-center">
            <li className="nav-item" onClick={() => setMenu("shop")}>
              <Link to="/" className="nav-link fw-semibold text-dark">
                Shop
              </Link>
              {menu === "shop" && <hr className="active-line" />}
            </li>
            <li className="nav-item" onClick={() => setMenu("mens")}>
              <Link to="/mens" className="nav-link fw-semibold text-dark">
                Men
              </Link>
              {menu === "mens" && <hr className="active-line" />}
            </li>
            <li className="nav-item" onClick={() => setMenu("womens")}>
              <Link to="/womens" className="nav-link fw-semibold text-dark">
                Women
              </Link>
              {menu === "womens" && <hr className="active-line" />}
            </li>
            <li className="nav-item" onClick={() => setMenu("kids")}>
              <Link to="/kids" className="nav-link fw-semibold text-dark">
                Kids
              </Link>
              {menu === "kids" && <hr className="active-line" />}
            </li>
          </ul>

          {/* Login and Cart */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/login">
              <button className="btn text-white px-3" style={{backgroundColor:'#0C67A0'}} >Login</button>
            </Link>
            <Link to="/cart" className="position-relative">
              <img src={cart_logo} alt="cart" width="28" />
              <span className="nav-cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
