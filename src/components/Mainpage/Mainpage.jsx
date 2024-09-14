import React from "react";
// import Categories from "./Categories";
import Slider from "./Slider";
import "./Mainpage.css";
// import Mycat from "../Mycat/Mycat";

const Mainpage = () => {
  return (
    <>
      <section className="main-page">
        {/* <div><Mycat /></div> */}
        <div className="">
          {/* <Categories /> */}
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Mainpage;
