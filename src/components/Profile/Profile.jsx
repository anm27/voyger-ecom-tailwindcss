import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import "./Profile.css";
import Header from "../Header/Header";

const Profile = ({ cartItems }) => {
  const { user, loading } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    if (!loading && user) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `https://voyger.online/voyger/user_details.php?user_id=${user.id}`
          );
          setUserDetails(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      const fetchPurchaseHistory = async () => {
        try {
          const response = await axios.get(
            `https://voyger.online/voyger/purchase_history.php?user_id=${user.id}`
          );
          setPurchaseHistory(response.data);
        } catch (error) {
          console.error("Error fetching purchase history:", error);
        }
      };

      fetchUserDetails();
      fetchPurchaseHistory();
    }
  }, [loading, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <section className="profile-page">
        <div className="container">
          <h1 className="font-semibold text-lg">My Profile</h1>
          {userDetails ? (
            <div className="user-details">
              <h2 className="font-semibold">My Details</h2>
              <p>
                <strong>Username:</strong> {userDetails.username}
              </p>
              <p>
                <strong>Mobile Number:</strong> {userDetails.mobile}
              </p>
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
          <div className="purchase-history">
            <h2 className="!text-green-500 font-semibold">Purchase History</h2>
            {purchaseHistory.length > 0 ? (
              <div className="purchase-cards">
                {purchaseHistory.map((purchase) => (
                  <div
                    // className="purchase-card !shadow-green-200 !shadow-lg"
                    className={`purchase-card ${
                      purchase.payment_status === "success"
                        ? "!shadow-green-200 !shadow-lg"
                        : "!shadow-red-200 !shadow-lg"
                    }`}
                    key={purchase.purchase_id}
                  >
                    <div
                      style={{
                        display: "flex",
                        // width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>
                        <strong>Payment Status:</strong>
                      </p>
                      <p
                        style={{
                          // background: "green",
                          color: "white",
                          padding: 10,
                          borderRadius: 6,
                          textTransform: "uppercase",
                          transform: "rotate(50deg) translate(10px, -10px)",
                        }}
                        className={`${
                          purchase.payment_status === "success"
                            ? "!bg-green-700"
                            : "!bg-red-500"
                        }`}
                      >
                        {purchase.payment_status}
                      </p>
                    </div>
                    <h3>
                      <strong style={{ color: "black" }}>
                        Delivery status:
                      </strong>{" "}
                      {purchase.delivery_status || "Delivering soon"}
                    </h3>{" "}
                    {/* Display dynamic delivery time */}
                    <p>
                      <strong>Purchase Id:</strong> {purchase.purchase_id}
                    </p>
                    <p>
                      <strong>Product Name:</strong> {purchase.product_name}
                    </p>
                    <p>
                      <strong>Price:</strong> Rs. {purchase.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {purchase.quantity}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No purchases found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
