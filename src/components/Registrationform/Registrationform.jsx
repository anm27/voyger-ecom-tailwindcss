import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

const Registrationform = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, password, mobile } = event.target.elements;

    try {
      const response = await fetch(
        "https://voyger.online/voyger/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
            mobile: mobile.value,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Automatically log the user in
          await login(username.value, password.value);
          toast.success("Registered and logged in successfully!");
          navigate("/");
        } else {
          toast.error(data.message || "Registration failed");
        }
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Registration failed");
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="container-login max-w-screen-md bg-slate-500 bg-opacity-35 rounded-md mx-6 mb-6 shadow-green-300 shadow-lg">
        <div className="wrapper">
          <div className="heading-login">
            {/* <h1 className="text-6xl text-red">Sign Up</h1> */}
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/login" className="!text-blue-600 !font-semibold">
                  Sign In
                </Link>
              </span>
            </p>
          </div>
          <form onSubmit={handleRegister} className="form">
            <label className="label">
              Username
              <input type="text" name="username" required />
            </label>
            <label className="label">
              Password
              <input type="password" name="password" required />
            </label>
            <label className="label">
              Mobile Number
              <input type="text" name="mobile" required />
            </label>
            <button className="submit-btn !bg-green-500 !w-full !text-white text-lg">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registrationform;
