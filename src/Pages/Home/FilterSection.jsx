import React, { useState } from "react";
import "./FilterSection.css";

const FilterSection = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  console.log(selectedCategory);

  const categories = [
    "All",
    "Men Fashion",
    "Women Fashion",
    "Electronics",
    "Mobiles",
    "Laptops",
    "Beauty",
    "Kitchen Appliances",
    "Footwear",
    "Home Decor",
    "Furniture",
    "Accessories",
    "Sports & Fitness",
    "Grocery",
    "Toys",
  ];

  return (
    <div className="filter-sec">
      <p>Categories: </p>
      <ul className="category-slider">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
