import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";
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
        amount: totalPrice * 100,
        MID: "MIDID" + Date.now(),
        transactionId: "Transact" + Date.now(),
        cartItems,
        address: selectedAddress,
      };

      const response = await axios.post(
        "https://voyger.online/voyger/save_purchase.php",
        purchaseData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.success === true) {
        // toast.success('Order placed successful! Please pay on delivery.');
        toast.success("Redirecting to payment...");
        window.location.href =
          response.data.data.instrumentResponse.redirectInfo.url;
      } else {
        toast.error("Payment initiation failed: " + response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed.");
    }
  };

  return (
    <section className="cart-items">
      <Toaster />
      <div className="container cart-flex">
        <div className="cart-details">
          {cartItems.length === 0 && (
            <h1 className="no-items product">
              There are no items in the cart.
            </h1>
          )}
          {cartItems.map((item) => {
            const productQty = item.price * item.qty;
            return (
              <div
                className="cart-list product d_flex cart-responsive"
                key={item.id}
                style={{ gap: 5 }}
              >
                <div className="img">
                  <img
                    src={item.img}
                    alt="Picture of this item is unavailable"
                  />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>
                    Rs. {item.price}.00 * {item.qty}
                  </h4>
                  <span>Rs. {productQty}.00</span>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                    <button onClick={() => removeFromCart(item)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="cartControl d_flex">
                    <button className="inCart" onClick={() => addToCart(item)}>
                      <i className="fa fa-plus"></i>
                    </button>
                    <button
                      className="delCart"
                      onClick={() => deleteFromCart(item)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
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
            <h3>OR</h3>
          </div>
          <div className="d-block">
            <h3>Add New Address</h3>
            <div className="">
              <div className="">
                <input
                  className="input-style"
                  type="text"
                  name="house_no"
                  placeholder="House/Flat/Block No."
                  value={newAddress.house_no}
                  onChange={handleNewAddressChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="input-style mb-5"
                  type="text"
                  name="apartment"
                  placeholder="Apartment/Road/Area"
                  value={newAddress.apartment}
                  onChange={handleNewAddressChange}
                />
              </div>
              <div className="-mb-5">
                <textarea
                  className="input-style"
                  name="directions"
                  placeholder="Directions to reach"
                  value={newAddress.directions}
                  onChange={handleNewAddressChange}
                />
              </div>
              <div className="">
                <input
                  className="input-style"
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={newAddress.pincode}
                  onChange={handleNewAddressChange}
                  required
                />
              </div>
              <div className="">
                <button className="btn-add" onClick={handleAddAddress}>
                  Add Address
                </button>
              </div>
            </div>
          </div>
          <button
            className="checkout"
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
