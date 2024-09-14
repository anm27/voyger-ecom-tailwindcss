// src/components/Loginform/Loginform.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import "./loginform.css";

const Loginform = () => {
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      console.log("Attempting login with username:", username.value);
      await login(username.value, password.value);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="container-login max-w-screen-md bg-slate-500 bg-opacity-35 rounded-md mx-6 mb-6 shadow-blue-300 shadow-lg">
        <div className="wrapper">
          <div className="heading-login">
            {/* <h1 className="text-6xl text-red">Sign In</h1> */}
            <p>
              New User ?{" "}
              <span>
                <Link to="/register" className="!text-green-600 !font-semibold">
                  Create an account
                </Link>
              </span>
            </p>
          </div>
          <form onSubmit={handleLogin} className="form">
            <label className="label">
              Username
              <input type="text" name="username" required />
            </label>
            <label className="label">
              Password
              <input type="password" name="password" required />
            </label>
            <p className="forgot-pass">
              Forgot Password ?{" "}
              <span>
                <Link to="/forgot-password">Click here to reset</Link>
              </span>
            </p>
            <button className="submit-btn !bg-blue-500 !w-full text-white text-lg">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginform;
