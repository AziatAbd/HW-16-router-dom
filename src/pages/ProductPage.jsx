import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../components/Products";

const ProductPage = ({ isVisible, onVisible }) => {
  return (
    <div>{isVisible ? <Outlet /> : <Products onVisible={onVisible} />}</div>
  );
};

export default ProductPage;
