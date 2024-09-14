import React from "react";
import Slider from "react-slick";
import "./myCat.css";
import { Link } from "react-router-dom";

export default function CatSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <Slider
      {...settings}
      className="mb-10 mx-4 text-xs md:text-base lg:text-base"
    >
      {" "}
      {/* Add some outer padding for the slider */}
      <div className="bg-cat1 px-6">
        {" "}
        {/* Add padding and margin to create space between slides */}
        <Link className="bg-cat1">
          <div className="my-text-white my-center">
            <div>
              <p>Clothing</p>
              <p>Coming soon...</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-cat2 px-6">
        <Link to={"/herbal"} className="">
          <div className="my-text-white my-center">
            <p>Herbal</p>
          </div>
        </Link>
      </div>
      <div className="bg-cat3 px-6">
        <Link to={"/health"}>
          <div className="my-text-white my-center">
            <p>Health</p>
          </div>
        </Link>
      </div>
      <div className="bg-cat4 px-6">
        <Link>
          <div className="my-text-white my-center">
            <div>
              <p>Groceries</p>
              <p>Coming soon...</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-cat5 px-6">
        <Link to={"/daily-life"}>
          <div className="my-text-white my-center">
            <p>Daily Life Use</p>
          </div>
        </Link>
      </div>
    </Slider>
  );
}
