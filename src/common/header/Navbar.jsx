import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="Header">
        <div className="container ">
          <div className="Header__container d_flex">
            <div className="Header__container-categories">
              <span>
                <i class="fa-solid fa-border-all"></i>
              </span>
              <h4>
                Categories <i class="fa-solid fa-chevron-down"></i>
              </h4>
            </div>
            <div className="Header__container-navlink a_flex">
              <ul
                className={
                  MobileMenu
                    ? "Header__container-navlink__mobile"
                    : "Header__container-navlink__destop capitalize link"
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/pages">pages</Link>
                </li>
                <li>
                  <Link to="/user">user account</Link>
                </li>
                <li>
                  <Link to="/vendor">vendor account</Link>
                </li>
                <li>
                  <Link to="/track">track my order</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>

              <button
                className="Btn__toggle"
                onClick={() => {
                  setMobileMenu(!MobileMenu);
                }}
              >
                {MobileMenu ? (
                  <i class="fa-solid fa-xmark close home-btn"></i>
                ) : (
                  <i class="fa-solid fa-bars open"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
