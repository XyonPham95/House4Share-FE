import React from "react";
import Banner from "./Banner";
import ProductValues from "./ProductValues";
import Product from "./Product";
import Footer from "./Footer";
import Footer2 from "./Footer2";

export default function Landing() {
  return (
    <div>
      <Banner />
      <ProductValues />
      <Product />
      <Footer2 />
      <Footer />
    </div>
  );
}
