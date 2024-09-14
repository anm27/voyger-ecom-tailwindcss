import React from "react";
// import Categ from "./Categ";
import { useNavigate } from "react-router-dom";
import Shopcart from "./Shopcart";
import { MdOutlineAutoAwesome } from "react-icons/md";
// import "./shop.css";

const Shop = ({ shopItems, addToCart }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    // Add the path you want to redirect to
    const targetPath = "/all-products";
    navigate(targetPath);
  };

  return (
    <>
      <section className="shop background" style={{ paddingTop: 30 }}>
        <div className="container shop-container">
          {/* <Categ shopItems={shopItems} addToCart={addToCart} /> */}
          <div className="shop-main">
            <div className="flex justify-between items-center lg:mx-12 mx-4 lg:mb-8 md:mb-8 mt-3">
              <div className="text-gray-700 flex gap-3 font-bold lg:text-3xl md:text-3xl text-2xl">
                <MdOutlineAutoAwesome size={35} color="orange" />
                <h2>Bestseller</h2>
              </div>
              <div onClick={handleRedirect} className="cursor-pointer">
                <span className="text-green-700 font-semibold">View All</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
            <div className="mt-6">
              <Shopcart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
