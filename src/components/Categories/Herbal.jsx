import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Mycat from "../Mycat/Mycat";
import HerbalCard from "./HerbalCard";
import herbalData from "./Data/herbalData";

const Herbal = ({ productItems, addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await herbalData();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header cartItems={cartItems} />
      <Mycat />
      <div>Herbal</div>
      <HerbalCard productItems={products} addToCart={addToCart} />
    </>
  );
};

export default Herbal;
