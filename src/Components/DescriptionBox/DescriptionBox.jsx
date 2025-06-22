import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container my-5">
      <div className="description-box card shadow-sm p-3">
        {/* Tabs */}
        <div className="desc-tabs d-flex gap-4 border-bottom pb-2 mb-3">
          <button
            className={`desc-tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`desc-tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (12)
          </button>
        </div>

        {/* Tab Content */}
        <div className="desc-content">
          {activeTab === "description" ? (
            <p>
              This product is crafted with premium quality materials to provide long-lasting comfort and durability. Whether you're dressing up or keeping it casual, this piece adds effortless style to your wardrobe.
            </p>
          ) : (
            <div className="review-list">
              <p><strong>Ali Raza:</strong> Amazing quality, highly recommended!</p>
              <p><strong>Sarah Khan:</strong> Comfortable and stylish, would buy again.</p>
              <p><strong>Ahmed Butt:</strong> Great value for the price.</p>
              {/* More sample reviews... */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
