import React from "react";
import "./Wrapper.scss";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="Wrapper ">
        <div className="container">
          <div className="Wrapper__product">
            {data.map((value, index) => {
              return (
                <div className="Wrapper__product-item" key={index}>
                  <span className="Wrapper__product-item__icon s_flex">{value.cover}</span>
                  <h3>{value.title}</h3>
                  <p>{value.decs}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wrapper;
