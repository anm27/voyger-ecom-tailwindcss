import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Mycat from "../Mycat/Mycat";
import dailylifeData from "./Data/dailylifeData";
import DailylifeCard from "./DailylifeCard";

const DailyLife = ({ productItems, addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dailylifeData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header cartItems={cartItems} />
      <Mycat />
      <div>DailyLife</div>
      <DailylifeCard productItems={products} addToCart={addToCart} />
    </>
  );
};

export default DailyLife;
