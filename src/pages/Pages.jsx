import React from "react";
import { useEffect } from "react";
import Annocument from "../components/annocument/Annocument";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <FlashDeals />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;
