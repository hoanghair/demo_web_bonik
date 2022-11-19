import React from "react";

import "./Annocument.scss";

const Annocument = () => {
  return (
    <>
      <section className="Annocument">
        <div className="container">
            <div className="Annocument__image c_flex">
                <img className="Annocument__image-left" src="./images/banner-1.png" alt="" />
                <img className="Annocument__image-right" src="./images/banner-2.png" alt="" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
