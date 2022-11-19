import React from "react";
import { Link } from "react-router-dom";

const NewCart = ({ newArrivals }) => {
  return (
    <div className="NewCart">
      {newArrivals.map((value) => {
        return (
          <div className="NewCart__item" key={value.id}>
            <Link to={`/product/${value.id}`}>
              <div className="NewCart__item-product">
                <div className="NewCart__item-product__image">
                  <img src={value.cover} alt="" />
                </div>
                <h4 className="NewCart__item-product__name">{value.name}</h4>
                <span className="NewCart__item-product__price">
                  ${value.price}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewCart;
