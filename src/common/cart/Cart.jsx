import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import "./Cart.scss";

const Cart = () => {

  const { cartItem, addToCart, decreaseQty, removecart} = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
 
  return (
    <div className="Cart">
      <div className="container d_flex">
        <div className="Cart__items">
          {cartItem.length === 0 && (
            <h1 className="Cart__items-no__item">No Item are add in Cart</h1>
          )}
          {cartItem.map((item, index) => {
            const prodcutQty = item.price * item.qty;
            return (
              <div className="Cart__items-list" key={index}>
                <div className="Cart__items-list__img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="Cart__items-list__details">
                  <div className="Cart__items-list__details-info c_flex">
                    <h3>{item.name}</h3>
                    <button
                      className="Cart__items-list__details-info__removecart s_flex"
                      onClick={() => removecart(item)}
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="Cart__items-list__function c_flex">
                    <h4 className="Cart__items-list__function-price">
                      {item.price}.00 x {item.qty}
                      <span>${prodcutQty}.00</span>
                    </h4>
                    <div className="Cart__items-list__function-addcart s_flex">
                      <button
                        className={`s_flex ${
                          item.qty === 1
                            ? "Cart__items-list__function-addcart__sub"
                            : "Cart__items-list__function-addcart__add"
                        } `}
                        onClick={() => decreaseQty(item)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <div className="Cart__items-list__function-addcart__amount">
                        {item.qty}
                      </div>
                      <button
                        className="Cart__items-list__function-addcart__add s_flex"
                        onClick={() => addToCart(item)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="Cart__total">
          <div className="Cart__total-content">
            <div className="Cart__total-content__summary c_flex">
              <h4>Total Price: </h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <div className="Cart__total-content__title">
              Additional Comments
              <span>Note</span>
            </div>
            <div className="Cart__total-content__textarea">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <Link to='' className="Cart__total-content__btn s_flex">Checkout Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
