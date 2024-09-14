import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Mycat from "../Mycat/Mycat";
import healthData from "./Data/healthData";
import HealthCard from "./HealthCard";

const Health = ({ productItems, addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await healthData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header cartItems={cartItems} />
      <Mycat />
      <div>Health</div>
      <HealthCard productItems={products} addToCart={addToCart} />
    </>
  );
};

export default Health;
