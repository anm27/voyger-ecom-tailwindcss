import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../LogoutButton";
import { IoIosSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { BsMenuButtonFill } from "react-icons/bs";

const Search = ({ cartItems }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const search = document.querySelector(".search");
  //     search.classList.toggle("active", window.scrollY > 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      fetch(`https://voyger.online/voyger/search_products.php?query=${value}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuggestions(data.products);
          } else {
            setSuggestions([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (product) => {
    navigate(`/all-products/${product.p_id}`);
    setQuery("");
    setSuggestions([]);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="lg:pt-7 lg:pb-3 py-3">
        <div className="lg:flex lg:justify-between lg:items-center lg:mx-12 mx-4">
          <div className="lg:w-[18%] md:w-[18%] m-auto lg:pb-0 pb-3 flex justify-between items-center w-full">
            <Link aria-label="Voyger Home" to="/">
              <img
                className="lg:w-[12rem] md:w-[12rem] w-[9rem]"
                src="/assets/main-logo/voyger.png"
                alt="voyger-logo"
              />
            </Link>
            <BsMenuButtonFill
              // size={35}
              className="lg:hidden text-green-700 hover:text-blue-600 cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
              >
                <div
                  className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  onClick={toggleMenu}
                >
                  <div className="bg-blue-900 bg-opacity-80 absolute left-0 top-0 bottom-0 w-64 p-3 pl-4">
                    <Link
                      aria-label="Voyger Home"
                      to="/"
                      className="flex justify-start"
                    >
                      <img
                        src="/assets/main-logo/voyger.png"
                        className="voyger-logo-white w-[9rem]"
                        alt=""
                      />
                    </Link>
                    {/* Menu items */}
                    <ul className="grid text-white text-sm gap-3 justify-start items-center m-2 py-6">
                      <li>
                        <Link
                          aria-label="Home"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="All Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/all-products"
                        >
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Wellness Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/wellness"
                        >
                          Wellness
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Daily Life Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/daily-life"
                        >
                          Daily Life Use
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Herbal Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/herbal"
                        >
                          Herbal
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Grocery Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Groceries
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Health Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/health"
                        >
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Clothing Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Clothing
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Immunity & Stamina Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Immunity & Stamina
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Juices & Drinks Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Juices & Drinks
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Skin Care Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Skin Care
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Medico Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Medico
                        </Link>
                      </li>
                      <li>
                        <Link
                          aria-label="Beauty & Cosmetics Products"
                          className="hover:text-green-600 hover:font-semibold"
                          to="/"
                        >
                          Beauty & Cosmetics
                        </Link>
                      </li>
                      {!user ? (
                        <>
                          <li>
                            <Link
                              aria-label="Login"
                              className="hover:text-green-600 hover:font-semibold"
                              to="/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              aria-label="Registration"
                              className="hover:text-green-600 hover:font-semibold"
                              to="/register"
                            >
                              Registration
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li className="fixed bottom-4 left-4">
                          <LogoutButton />
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center w-full border border-gray-300 lg:mx-5 bg-white rounded-3xl search-box">
            {/* <i className="fa fa-search"></i> */}
            <IoIosSearch size={22} color="gray" className="ml-4" />
            <input
              className="w-full text-xs rounded-l-3xl border-r border-gray-300 px-3 py-3 outline-none"
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={handleInputChange}
            />
            <span className="px-2 text-xs lg:w-[14%] text-center">
              All Categories
            </span>
            {suggestions.length > 0 && (
              <div className="dropdown">
                {suggestions.map((product) => (
                  <div
                    key={product.p_id}
                    className="dropdown-item"
                    onClick={() => handleSuggestionClick(product)}
                  >
                    {product.p_name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex lg:w-[10%] gap-4 px-3 pt-4 lg:py-0 lg:justify-end justify-center lg:ml-3">
            <Link
              aria-label="Login page"
              to="/profile"
              className="bg-slate-200 p-4 rounded-full"
            >
              <FaUserSecret size={20} color="black" />
            </Link>
            <div className="bg-slate-200 p-4 rounded-full relative">
              <Link to="/cart">
                <FaBagShopping size={20} color="black" />
                <p className="absolute -top-3 -right-2 font-semibold text-sm md:text-base lg:text-base bg-green-600 text-white p-1 lg:px-3 md:px-3 px-2 rounded-full">
                  {cartItems && cartItems.length ? cartItems.length : 0}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .search-box {
            position: relative;
            width: 100%;
          }
          .dropdown {
            position: absolute;
            background-color: white;
            border: 1px solid #ddd;
            width: calc(100% - 40px);
            max-height: 200px;
            overflow-y: auto;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            margin-top: 222px;
            left: 0;
          }
          .dropdown-item {
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid #ddd;
          }
          .dropdown-item:last-child {
            border-bottom: none;
          }
          .dropdown-item:hover {
            background-color: #f0f0f0;
          }
          .search-box input {
            width: calc(100% - 120px);
          }
        `}
      </style>
    </>
  );
};

export default Search;
