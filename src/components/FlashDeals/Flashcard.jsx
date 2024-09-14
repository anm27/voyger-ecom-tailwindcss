import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";

// setting up arrows to display next and previous arrows and make them work
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Next slide" className="next">
        <GrNext color="white" className="w-full" />
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button aria-label="Previous slide" className="prev">
        <GrPrevious color="white" className="w-full" />
      </button>
    </div>
  );
};

const Flashcard = ({ productItems, addToCart }) => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          dots: false, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false, // Show dots on smaller screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false, // Show dots on even smaller screens
        },
      },
    ],
  };
  return (
    <>
      {/* Used the react-slick-slider to make a fast and effective slider for the page */}
      <Slider {...settings} className="lg:mx-12 mx-4">
        {productItems.map((product, index) => {
          return (
            <div
              className="border rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl px-2"
              key={index} // Apply padding-x to each slide
            >
              <div className="text-white relative p-4">
                <span className="absolute top-2 right-2 bg-white text-green-600 rounded-full px-2 py-1 text-sm font-semibold">
                  {product.discount}% Off
                </span>
                <img
                  className="w-full h-auto object-cover rounded-md mb-4"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="p-4 bg-white">
                <Link to={`/all-products/${product.id}`}>
                  <h3 className="truncate text-gray-800 text-lg font-semibold hover:text-green-500 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center my-2 text-yellow-500">
                  <MdOutlineStarPurple500 color="gold" />
                  <MdOutlineStarPurple500 color="gold" />
                  <MdOutlineStarPurple500 color="gold" />
                  <MdOutlineStarPurple500 color="gold" />
                  <MdOutlineStarPurple500 color="gold" />
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-green-600 text-lg font-bold">
                    Rs. {product.price}.00
                  </h4>
                  <button
                    aria-label="Add to cart"
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-full shadow-md transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    <IoBagAddOutline size={25} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Flashcard;
