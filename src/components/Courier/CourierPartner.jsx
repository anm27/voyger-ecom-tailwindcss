import React, { useEffect, useState } from "react";
import "./cp.css"; // Assuming you have the CSS file in the same folder

const CourierPartner = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch purchase details from the PHP API
  useEffect(() => {
    fetch("https://voyger.online/voyger/admin/courier-partner.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPurchases(data.data);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching purchase details");
        setLoading(false);
      });
  }, []);

  const deliveryStages = [
    "Delivering soon",
    "Dispatched",
    "Out for delivery",
    "Delivered",
  ];

  const updateDeliveryStatus = (purchaseId, currentStatus) => {
    const currentStageIndex = deliveryStages.indexOf(currentStatus);
    if (
      currentStageIndex >= 0 &&
      currentStageIndex < deliveryStages.length - 1
    ) {
      const newStatus = deliveryStages[currentStageIndex + 1];

      fetch("https://voyger.online/voyger/admin/update-delivery-status.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          purchase_id: purchaseId,
          new_status: newStatus,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setPurchases((prevPurchases) =>
              prevPurchases.map((purchase) =>
                purchase.purchase_id === purchaseId
                  ? { ...purchase, delivery_status: newStatus }
                  : purchase
              )
            );
            alert("Delivery status updated to: " + newStatus);
          } else {
            alert("Error updating delivery status");
          }
        })
        .catch(() => {
          alert("Failed to update delivery status");
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="cp-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 9,
          alignItems: "center",
          maxWidth: "90%",
          margin: "auto",
          background: "green",
          position: "sticky",
          top: 0,
          zIndex: 99999,
          borderBottomRightRadius: "6px",
          borderBottomLeftRadius: "6px",
        }}
      >
        <h2 className="">Courier Details</h2>
        <img
          src="https://voyger.online/assets/main-logo/voyger.png"
          width={150}
        />
      </div>
      <div className="cp-flex">
        {purchases.map((purchase) => (
          <div key={purchase.purchase_id} className="cp-card">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ width: "70%" }}>
                Customer Name: {purchase.username}
              </h3>
              <h3
                style={{
                  width: "30%",
                  translate: "20px -20px",
                  background: "blue",
                  padding: 6,
                  borderRadius: "6%",
                  color: "white",
                }}
              >
                Payment {purchase.payment_status}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "gold",
                padding: 6,
                marginBottom: 10,
              }}
            >
              <p>
                Purchase Id:{" "}
                <span
                  style={{
                    fontSize: "large",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  {" "}
                  {purchase.purchase_id}{" "}
                </span>
              </p>
              <div>
                <h3>Delivery Status:</h3>
                <p style={{ textAlign: "right", fontWeight: "bold" }}>
                  {purchase.delivery_status}
                </p>
              </div>
            </div>
            <h3>Product Name: {purchase.product_name}</h3>
            <h3>To,</h3>
            <p>Mr./Ms. {purchase.username}</p>
            <p>
              Mobile Number:{" "}
              <span
                style={{ color: "green", fontSize: "15px", fontWeight: "bold" }}
              >
                {purchase.mobile}
              </span>
            </p>
            <h3>Customer Address:</h3>
            <p>
              {purchase.house_no}, {purchase.apartment}, {purchase.directions},{" "}
              {purchase.pincode}
            </p>

            <h3>From,</h3>
            <p>Voyger by Shivaraj Enterprises Pvt Ltd</p>
            <h4>Address:</h4>
            <p className="cp-m-b">
              69, 2nd Floor, Mahatma Gandhi Road, Thakurpukur, 3a Bus Stand,
              Kolkata, West Bengal - 700063
            </p>
            <div>
              <button
                className="cp-btn"
                onClick={() =>
                  updateDeliveryStatus(
                    purchase.purchase_id,
                    purchase.delivery_status
                  )
                }
                disabled={purchase.delivery_status === "Delivered"}
              >
                Update Delivery Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourierPartner;
