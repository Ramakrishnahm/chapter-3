import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Shimmer from './Shimmer'




const AppLayout = () => {
  return (
    <>
      <Header />
      <Shimmer/>
      <Body />
      <Footer />
    </>
  );
};



export default AppLayout