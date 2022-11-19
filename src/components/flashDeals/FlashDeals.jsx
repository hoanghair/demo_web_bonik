import React from "react";


import FlashCard from "./FlashCard";
import "./FlashDeals.scss";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <section className="FlashDeals">
      <div className="container">
        <div className="FlashDeals__heading c_flex">
          <div className="FlashDeals__heading-left a_flex">
            <i class="fa-solid fa-bolt"></i>
            <h2>Flash Deals</h2>
          </div>
          <div className="FlashDeals__heading-right a_flex">
            <span>View all</span>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>

        <FlashCard productItems={productItems} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default FlashDeals;
