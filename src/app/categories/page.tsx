"use client";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="category-page">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products, services or vendors"
          className="search-input"
        />
        <button className="search-button">🔍</button>
      </div>

      {/* Popular Searches */}
      <div className="popular-searches">
        <h2>Popular Searches</h2>
        <div className="search-tags">
          {["iphone", "samsung", "Shoes", "car", "iph", "macbook", "ipho", "Mobile Phones", "iphon", "phone"].map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Category List */}
      <div className="category-list">
        <h2>Let’s help you find a product or service</h2>
        <div className="categories">
          <div className="category-card">
            <img src="/cdn/shop/files/electronics.jpg" alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-card">
            <img src="/cdn/shop/files/supermarket.jpg" alt="Super Market" />
            <p>Super Market</p>
          </div>
          {/* Add more categories here */}
        </div>
      </div>

      <style jsx>{`
        .category-page {
          padding: 20px;
          background: white;
          color: black;
          min-height: 100vh;
        }
        
        /* Search Bar */
        .search-container {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 30px;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px;
          font-size: 16px;
          color: black;
        }
        
        .search-button {
          background: var(--theme-color, red);
          color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
        
        /* Popular Searches */
        .popular-searches {
          margin-top: 20px;
        }
        
        .search-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tag {
          background: #f2f2f2;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          color: black;
        }

        /* Categories */
        .category-list {
          margin-top: 20px;
        }

        .categories {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 10px;
        }
        
        .category-card {
          background: white;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          min-width: 150px;
        }

        .category-card img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
        }

        .category-card p {
          margin-top: 10px;
          font-size: 14px;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;
