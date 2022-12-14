import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import "./App.css";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Sdata from "./components/shop/Sdata";
import Cart from "./common/cart/Cart";
import Product from "./common/product/Product";
import Footer from "./common/footer/Footer";
import Ndata from "./components/newarrivals/Ndata";
import Ddata from "./components/discount/Ddata";

export const Context = createContext({});

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const { newArrivals } = Ndata;
  const { discountItems } = Ddata;

  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);


    

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? {
                ...productExit,
                qty: productExit.qty + 1,
              }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const removecart = (product) => {
    setCardItem(cartItem.filter((item) => item.id !== product.id));
  };
  return (
    <Context.Provider
      value={{
        productItems,
        shopItems,
        newArrivals,
        discountItems,
        cartItem,
        addToCart,
        decreaseQty,
        removecart,
      }}
    >
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route exact path="/" element={<Pages />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
