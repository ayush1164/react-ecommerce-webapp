import React, { useState } from "react";
import products from "../../data/products";
import DisplayProducts from "../../Components/DisplayProducts/DisplayProducts";
import FilterSection from "./FilterSection";
import InputSearch from "./InputSearch";
import SortingSec from "./SortingSec";
import HeroSection from "../../Components/Hero Section/HeroSection";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // console.log("home render");

  /*  logic for filter products based on category
          if selected category is "All"
            -> use original products array
          otherwise
            -> filter products by category
*/
  const filterProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // search product on input value
  const searchResults = products.filter((product) =>
    product.title.toLowerCase().includes(inputSearchValue.toLowerCase()),
  );

  //  Decide what to display
  const productToDisplay =
    inputSearchValue.trim() === "" ? filterProducts : searchResults;

  // we cannot add sort fn directly to the original array because it gets modified - if we directly do sort with original array then it will modified and store product in sort wise order
  let finalProductList = [...productToDisplay];

  if (sortOption == "low_to_high") {
    finalProductList.sort((a, b) => a.price - b.price);
  }

  if (sortOption == "high_to_low") {
    finalProductList.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <main className="home-page">

        <HeroSection />

        <FilterSection
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <div className="search-sort-cont">
          <InputSearch setInputSearchValue={setInputSearchValue} />

          <SortingSec setSortOption={setSortOption} />
        </div>

        <div className="product-listing-container">
          <ul className="list-container">
            {productToDisplay.length === 0 ? (
              <h2>No Products Found</h2>
            ) : (
              finalProductList.map((product) => (
                <DisplayProducts product={product} key={product.id} />
              ))
            )}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
