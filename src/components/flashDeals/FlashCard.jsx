import React, { useState, useContext } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Context } from '../../App'

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
  );
};

const FlashCard = () => {

  const {productItems, addToCart} = useContext(Context)
  
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // console.log(productItems.cover)
  return (
    <>
      <Slider {...settings}>
        {productItems.map((value) => {
          return (
            <div className="FlashCard" key={value.id}>
              <div className="FlashCard__product">
                <div className="FlashCard__product-image">
                  <span className="FlashCard__product-image__discount">
                    {value.discount}% Off
                  </span>
                  <Link to={`/product/${value.id}`}>
                    <img
                      className="FlashCard__product-image__img"
                      src={value.cover}
                      alt=""
                    />
                  </Link>
                  <div className="FlashCard__product-image__like a_flex">
                    <label htmlFor="">{count}</label>
                    <i class="fa-regular fa-heart" onClick={handleLike}></i>
                  </div>
                </div>

                <div className="FlashCard__product-details">
                  <Link to={`/product/${value.id}`}>
                    <h3>{value.name}</h3>
                  </Link>
                  <div className="FlashCard__product-details__rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="FlashCard__product-details__price c_flex">
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
      </Slider>
    </>
  );
};

export default FlashCard;
