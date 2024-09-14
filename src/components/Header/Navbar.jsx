import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../LogoutButton";
import { GiGreenhouse } from "react-icons/gi";

const Navbar = () => {
  const { user } = useAuth(); // Access the user state from the AuthContext
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="">
        <div className="lg:flex lg:justify-between lg:mx-12 lg:py-2">
          <div className="flex justify-center lg:mb-0 gap-2">
            <GiGreenhouse size={25} />
            <h4 className="font-bold text-base">
              Believe Herbal Insure Your Health
            </h4>
          </div>
          <ul
            className="lg:flex md:flex hidden gap-3 justify-center items-center"
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link aria-label="Home" className="link-hover" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                aria-label="All Products"
                className="link-hover"
                to="/all-products"
              >
                All Products
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link aria-label="Login" className="link-hover" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Registration"
                    className="link-hover"
                    to="/register"
                  >
                    Registration
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
        <button
          aria-label="Menu bar"
          className="toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <i className="fas fa-times close home-btn"></i>
          ) : (
            <i className="fa fa-bars open"></i>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
