import React from "react";
import Discountcard from "./Discountcard";
import "./Discount.scss";

const Discount = ({discountItems}) => {
  return (
    <section className="Discount">
      <div className="container">
        <div className="Discount__heading c_flex">
          <div className="Discount__heading-left a_flex">
            <i class="fa-solid fa-gift"></i>
            <h2>Big Discounts</h2>
          </div>
          <div className="Discount__heading-right a_flex">
            <span>View all</span>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
        <Discountcard discountItems={discountItems} />
      </div>
    </section>
  );
};

export default Discount;
