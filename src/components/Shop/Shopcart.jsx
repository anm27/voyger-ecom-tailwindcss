import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";

const Shopcart = ({ shopItems, addToCart }) => {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-10 mx-3">
        {shopItems.map((product, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img relative">
                  <span className="absolute bg-green-600 text-white p-2 rounded-3xl -top-3 -right-3">
                    {product.discount}% Off
                  </span>
                  <img src={product.img} alt="product-image" />
                </div>
                <div className="product-details">
                  <Link to={`/all-products/${product.id}`}>
                    <h3 className="truncate">{product.name}</h3>
                  </Link>
                  <div className="flex items-center">
                    <MdOutlineStarPurple500 color="gold" />
                    <MdOutlineStarPurple500 color="gold" />
                    <MdOutlineStarPurple500 color="gold" />
                    <MdOutlineStarPurple500 color="gold" />
                    <MdOutlineStarPurple500 color="gold" />
                  </div>
                  <div className="text-green-700 flex justify-between items-center">
                    <h4 className="font-semibold">Rs. {product.price}.00</h4>
                    <button
                      aria-label="Add to cart"
                      onClick={() => addToCart(product)}
                      className="flex justify-center items-center !hover:bg-blue-700"
                    >
                      <IoBagAddOutline color="green" size={25} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shopcart;
