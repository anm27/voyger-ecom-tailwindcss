import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
// import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <>
      <Head />
      <div className="sticky top-0 bg-[#f8f9fa] z-50 transition-transform">
        <Search cartItems={cartItems} />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
