import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('default');

  // Filter by category
  let filteredProducts = all_product.filter(item => item.category === props.category);

  // Sort logic
  if (sortOption === 'low-to-high') {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sortOption === 'high-to-low') {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  }

  return (
    <div className="shop-category container py-4">
      <img src={props.banner} alt="Banner" className="img-fluid mb-4 rounded shadow-sm" />

      {/* Top bar */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 px-2">
        <p className="mb-0 fw-semibold">
          Showing {filteredProducts.length > 0 ? '1 - ' + Math.min(12, filteredProducts.length) : 0} of {filteredProducts.length} products
        </p>
        
        <div className="d-flex align-items-center gap-2">
          <label className="text-dark px-3 py-1 rounded">Sort by</label>
          <select
            className="form-select form-select-sm w-auto"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">
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
          <div className="col-12 text-center text-muted py-5">
            <h5>No products found in this category.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
