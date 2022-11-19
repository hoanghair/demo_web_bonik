import React from "react";
import TopCart from "./TopCart";
import './Top.scss'

const TopCate = () => {
  return (
    <section className="TopCategories">
      <div className="container">
        <div className="TopCategories__heading c_flex">
          <div className="TopCategories__heading-left a_flex">
            <i class="fa-solid fa-border-all"></i>
            <h2>Top Categories</h2>
          </div>
          <div className="TopCategories__heading-right a_flex">
            <span>View all</span>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
        <TopCart/>
      </div>
    </section>
  );
};

export default TopCate;
