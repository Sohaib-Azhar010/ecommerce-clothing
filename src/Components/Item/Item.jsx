import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-3 h-100 text-center">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0,0)}
          src={props.image}
          alt={props.name}
          className="card-img-top rounded-3 mb-3"
          style={{ height: '220px', objectFit: 'cover' }}
        />
      </Link>
      <p className="fw-semibold fs-5 mb-2">{props.name}</p>
      <div className="d-flex justify-content-center align-items-baseline gap-3">
        <div className="fw-bold fs-5" style={{ color: '#0C67A0' }}>
          ${props.new_price}
        </div>
        <div className="text-muted text-decoration-line-through fs-6">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;