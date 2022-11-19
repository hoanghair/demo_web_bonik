import React from "react";
import Cart from "./NewCart";

import './NewArrivals.scss'

const NewArrivals = ({newArrivals}) => {
  return (
    <section className="NewArrivals">
      <div className="container">
        <div className="NewArrivals__heading c_flex">
          <div className="NewArrivals__heading-left a_flex">
          <i class="fa-solid fa-earth-oceania"></i>
            <h2>New Arrivals</h2>
          </div>
          <div className="NewArrivals__heading-right a_flex">
            <span>View all</span>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
        <Cart newArrivals={newArrivals} />
      </div>
    </section>
  );
};

export default NewArrivals;
