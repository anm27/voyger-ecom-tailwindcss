import React, { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import flashDealsData from "./flashDealsData";
import { IoFlashSharp } from "react-icons/io5";

const Flashdeals = ({ productItems, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await flashDealsData();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <section className="my-7">
        <div className="">
          <div className="lg:text-3xl md:text-3xl text-2xl flex gap-3 font-bold pt-6 lg:mx-12 mx-4 mb-7">
            <IoFlashSharp className="" size={35} color="green" />
            <h1 className="text-left">Flash Deals</h1>
          </div>
          <Flashcard productItems={products} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Flashdeals;
