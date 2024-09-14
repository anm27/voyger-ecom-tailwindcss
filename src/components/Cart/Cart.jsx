import React, { useState, useEffect } from "react";
import "./Cart.css";
// import axios from 'axios';
import { useAuth } from "../../contexts/AuthContext";
import { getAddresses, addAddress } from "../../services/api";
import { toast, Toaster } from "react-hot-toast";

const Cart = ({
  cartItems,
  addToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
}) => {
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    house_no: "",
    apartment: "",
    directions: "",
    pincode: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    // This will log selectedAddress whenever it changes
    console.log("Selected Address ANM: ", selectedAddress);
  }, [selectedAddress]);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((price, item) => price + item.qty * item.price, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    if (user) {
      fetchAddresses(user.id);
    }
  }, [user]);

  const fetchAddresses = async (userId) => {
    try {
      const response = await getAddresses(userId);
      if (Array.isArray(response)) {
        setAddresses(response);
      } else {
        setAddresses([]);
      }
    } catch (error) {
      console.error("Error fetching addresses", error);
      setAddresses([]);
    }
  };

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddAddress = async () => {
    try {
      const addressData = { ...newAddress, user_id: user.id };
      await addAddress(addressData);
      fetchAddresses(user.id);
      setNewAddress({
        house_no: "",
        apartment: "",
        directions: "",
        pincode: "",
      });
      toast.success("Address added successfully!");
    } catch (error) {
      console.error("Error adding address", error);
      toast.error("Failed to add address.");
    }
  };

  const handleClick = async () => {
    if (!user) {
      alert("You need to be logged in to proceed to checkout.");
      return;
    }

    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }

    try {
      let purchaseData = {
        user: {
          name: user.username,
          mobile: user.mobile,
          user_id: user.id,
        },
        amount: totalPrice * 100, // converting to paise
        transactionId: "Transact" + Date.now(),
        cartItems,
        address: selectedAddress,
      };

      console.log("Purchse Data ANM: ", selectedAddress);

      // Instead of axios, use a form submission to send data to the PHP script
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://voyger.online/paytest/pay.php"; // Change this to your correct PHP endpoint
      // form.action = "https://meratravelbuddy/paytest/pay.php";

      for (const key in purchaseData) {
        if (purchaseData.hasOwnProperty(key)) {
          const hiddenField = document.createElement("input");
          hiddenField.type = "hidden";
          hiddenField.name = key;
          hiddenField.value = JSON.stringify(purchaseData[key]);
          form.appendChild(hiddenField);
        }
      }

      document.body.appendChild(form);
      form.submit(); // This will redirect to the PHP script and pass all the data
    } catch (error) {
      console.log(error);
      toast.error("Payment failed.");
    }
  };

  return (
    <section className="cart-items">
      <Toaster />
      <div className="lg:flex lg:mx-12 mx-4">
        <div className="w-full">
          {cartItems.length === 0 && (
            <h1 className="no-items product">
              There are no items in the cart.
            </h1>
          )}
          {cartItems.map((item) => {
            const productQty = item.price * item.qty;
            return (
              <div
                className="cart-list product lg:flex cart-responsive"
                key={item.id}
                style={{ gap: 5 }}
              >
                <div className="flex w-full justify-between">
                  <div>
                    <div className="img">
                      <img src={item.img} alt="Unavailable" />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <h4>
                        Rs. {item.price}.00 * {item.qty}
                      </h4>
                      <span className="text-green-600">
                        Rs. {productQty}.00
                      </span>
                    </div>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button onClick={() => removeFromCart(item)}>X</button>
                    </div>
                    <div className="cartControl flex">
                      <button
                        className="inCart"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <button
                        className="delCart"
                        onClick={() => deleteFromCart(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cart-item-price"></div>
              </div>
            );
          })}
        </div>
        <div className="cart-total product-cart">
          <h2>Cart Summary</h2>
          <div className="d-justify-between">
            <h4>Total Price :</h4>
            <h3 style={{ color: "green", paddingLeft: 4 }}>
              Rs. {totalPrice}.00
            </h3>
          </div>
          <h2>Address</h2>
          <div className="d-block">
            {addresses.length > 0 ? (
              <select
                className="select"
                onChange={(e) => setSelectedAddress(JSON.parse(e.target.value))}
              >
                <option value="">Select Address</option>
                {addresses.map((address) => (
                  <option key={address.id} value={JSON.stringify(address)}>
                    {`${address.house_no}, ${address.apartment}, ${address.directions}, ${address.pincode}`}
                  </option>
                ))}
              </select>
            ) : (
              <p>No saved addresses.</p>
            )}
          </div>
          <div className="center">
            <h3 className="-translate-y-2">_________</h3>
            <h3 className="mx-2">OR</h3>
            <h3 className="-translate-y-2">_________</h3>
          </div>
          <div className="d-block">
            {/* <h3>Add New Address</h3> */}
            <div className="">
              <div className="">
                <input
                  className="w-full outline-none px-3 border border-gray-100 mb-5"
                  type="text"
                  name="house_no"
                  placeholder="House/Flat/Block No."
                  value={newAddress.house_no}
                  onChange={handleNewAddressChange}
                  required
                />
              </div>
              <div className="">
                <input
                  className="w-full outline-none px-3 border border-gray-100 mb-5"
                  type="text"
                  name="apartment"
                  placeholder="Apartment/Road/Area"
                  value={newAddress.apartment}
                  onChange={handleNewAddressChange}
                />
              </div>
              <div className="">
                <textarea
                  className="w-full outline-none px-3 border border-gray-100"
                  name="directions"
                  placeholder="Directions to reach"
                  value={newAddress.directions}
                  onChange={handleNewAddressChange}
                />
              </div>
              <div className="-mt-3">
                <input
                  className="w-full outline-none px-3 border border-gray-100"
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={newAddress.pincode}
                  onChange={handleNewAddressChange}
                  required
                />
              </div>
              <div className="">
                <button
                  className="bg-green-600 text-white px-3 w-full mt-5 rounded-lg"
                  onClick={handleAddAddress}
                >
                  Add New Address
                </button>
              </div>
            </div>
          </div>
          <button
            className="w-full rounded-lg"
            style={{ backgroundColor: "gold" }}
            onClick={handleClick}
          >
            Proceed to Checkout!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
