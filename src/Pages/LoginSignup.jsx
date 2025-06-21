import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '420px', width: '100%' }}>
        <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h3>

        <ul className="nav nav-tabs mb-3 justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </li>
        </ul>

        <form>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Re-enter password" />
            </div>
          )}

          <button type="submit" className="btn custom-btn w-100">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
