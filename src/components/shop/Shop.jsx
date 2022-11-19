import React from "react";

import Category from "./Category";
import ShopCart from "./ShopCart";
import "./Shop.scss";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="Shop">
        <div className="container f_flex">
          <div className="Shop__Category">
          <Category />
          </div>
          <div className="Shop__product">
            <div className="Shop__heading c_flex">
              <div className="Shop__heading-left a_flex">
                <i class="fa-solid fa-mobile"></i>
                <h2>Mobile Phones</h2>
              </div>
              <div className="Shop__heading-right a_flex">
                <span>View all</span>
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="wrapper">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
