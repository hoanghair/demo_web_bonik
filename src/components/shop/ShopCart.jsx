import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";

const ShopCart = () => {
  const { shopItems, addToCart } = useContext(Context);

  
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((value) => {
        return (
          <div className="ShopCart" key={value.id}>
            <div className="ShopCart__product ">
              <div className="ShopCart__product-image">
                <span className="ShopCart__product-image__discount">
                  {value.discount}% Off
                </span>
                <Link to={`/product/${value.id}`}>
                  <img
                    className="ShopCart__product-image__img"
                    src={value.cover}
                    alt=""
                  />
                </Link>
                <div className="ShopCart__product-image__like a_flex">
                  <label htmlFor="">{count}</label>
                  <i class="fa-regular fa-heart" onClick={handleLike}></i>
                </div>
              </div>
              <div className="ShopCart__product-details">
                <Link to={`/product/${value.id}`}>
                  <h3>{value.name}</h3>
                </Link>
                <div className="ShopCart__product-details__rate">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="ShopCart__product-details__price c_flex">
                  <h4>{value.price}.00$</h4>
                  <button onClick={() => addToCart(value)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
