import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
const Discountcard = ({ discountItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="Discountcard">
      <Slider {...settings}>
        {discountItems.map((value) => {
          return (
            <div className="Discountcard__item" key={value.id}>
              <div className="Discountcard__item-product">
                <Link to={`/product/${value.id}`}>
                  <div className="Discountcard__item-product__image">
                    <img src={value.cover} alt="" />
                  </div>
                  <h4 className="Discountcard__item-product__name">
                    {value.name}
                  </h4>
                  <span className="Discountcard__item-product__price">
                    ${value.price}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Discountcard;
