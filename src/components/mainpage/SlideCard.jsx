import React from "react";
import Sdata from "./Sdata";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="SlideCard " key={index}>
              <div className="SlideCard__left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="SlideCard__left-btn">
                  Visit Collections
                </button>
              </div>

              <div className="SlideCard__right">
                <img className="SlideCard__right-img" src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
