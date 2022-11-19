import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const Search = ({ cartItem }) => {
  return (
    <>
      <section className="Search active">
        <div className="container ">
          <div className="Search__container c_flex">
            <Link to="/" className="Search__container-logo a_flex">
              <img src={logo} alt="" />
            </Link>

            <div className="Search__container-box a_flex">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search and hit enter ..." />
              <span>All Category</span>
            </div>

            <div className="Search__container-user a_flex ">
              <i class="fa-solid fa-user icon-circle "></i>
              <div className="Search__container-user__cart">
                <Link to="/cart">
                  <i class="fa-solid fa-basket-shopping icon-circle "></i>
                  <span
                    className={`${
                      cartItem.length === 0
                        ? "amount__none"
                        : "Search__container-user__cart-amount"
                    }`}
                  >
                    {cartItem.length === 0 ? "" : cartItem.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
