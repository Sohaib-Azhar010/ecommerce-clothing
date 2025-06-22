import React from 'react';
import Item from '../Item/Item';
import './RelatedProducts.css';

const RelatedProducts = ({ related }) => {
  return (
    <div className="container my-5 related-products">
      <h3 className="mb-4 text-center fw-bold">Related Products</h3>
      <div className="row g-4">
        {related && related.length > 0 ? (
          related.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            <p>No related products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
