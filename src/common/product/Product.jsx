import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import FlashCard from "../../components/flashDeals/FlashCard";
import "./Product.scss";

const Product = ({
  productItems,
  addToCart,
  shopItems,
  newArrivals,
  discountItems,
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const list = [
    ...productItems,
    ...shopItems,
    ...newArrivals,
    ...discountItems,
  ];
  const data = list.find((e) => e.id.toString() === id);

  return (
    <section className="Product">
      <div className="container ">
        <div className="Product__container f_flex">
          <div className="Product__detail">
            <img src={data.cover} alt="" />
          </div>
          <div className="Product__other">
            <h1 className="Product__other-title">{data.name}</h1>
            <div className="Product__other-brand a_flex">
              <span>Brand:</span>
              <h6>{data.brand}</h6>
            </div>
            <div className="Product__other-rated a_flex">
              <span>Rated:</span>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h6>({data.rated})</h6>
            </div>
            <h2 className="Product__other-price">${data.price}.00</h2>
            <button
              className="Product__other-btn"
              onClick={() => addToCart(data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="Product__realted">
          <h2>Realted Products</h2>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </div>
    </section>
  );
};

export default Product;
