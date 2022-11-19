import React from "react";

const Head = () => {
  return (
    <>
      <section className="Head">
        <div className="container">
          <div className="Head__container d_flex">
            <div className="Head__container-left row">
              <i class="fa-solid fa-phone"></i>
              <label>+345333566</label>
              <i class="fa-solid fa-envelope"></i>
              <label>Hoanghai@gmail.com</label>
            </div>
            <div className="Head__container-right row">
              <label>Theme FAQ 's</label>
              <label>Need Helps</label>
              <span>
                <i class="fa-solid fa-euro-sign"></i>
              </span>
              <label htmlFor="">EN</label>
              <span>
                <i class="fa-solid fa-dollar-sign"></i>
              </span>
              <label htmlFor="">USA</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
