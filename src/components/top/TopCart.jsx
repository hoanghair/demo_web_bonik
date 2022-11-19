import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tdata from "./Tdata";

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

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div className="TopCart" key={index}>
              <div className="TopCart__product">
                <div className="TopCart__product-name d_flex">
                  <span className="TopCart__product-name__title">
                    {value.para}
                  </span>
                  <span className="TopCart__product-name__info">
                    {value.desc}
                  </span>
                </div>
                <div className="TopCart__product-image">
                    <img src={value.cover} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
