// src/allroutes/AllRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Cartpage from "../pages/cartpage/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";
import Registrationpage from "../pages/registrationpage/Registrationpage";
import Allproductspage from "../pages/all-productspage/Allproductspage";
import Singleproductpage from "../pages/product-details/Singleproductpage";
import ErrorNotFound from "../components/ErrorNotFoundPage/ErrorNotFound";
import ScrollToTop from "../components/ScrollToTop";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../components/Profile/Profile";
import TermsCondition from "../components/Policies/TermsCondition";
import PrivacyPolicy from "../components/Policies/PrivacyPolicy";
import RefundPolicy from "../components/Policies/RefundPolicy";
import ShippingPolicy from "../components/Policies/ShippingPolicy";
import Wellness from "../components/Categories/Wellness";
import Health from "../components/Categories/Health";
import Herbal from "../components/Categories/Herbal";
import Groceries from "../components/Categories/Groceries";
import DailyLife from "../components/Categories/DailyLife";
import CourierPartner from "../components/Courier/CourierPartner";

const AllRoutes = ({
  productItems,
  cartItems,
  addToCart,
  shopItems,
  deleteFromCart,
  checkOut,
  removeFromCart,
  allProductsData,
}) => {
  const { user } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route path="/courier-partner" element={<CourierPartner />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route
          path="/health"
          element={
            <Health
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/herbal"
          element={
            <Herbal
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/daily-life"
          element={
            <DailyLife
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/groceries" element={<Groceries />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cartpage
                cartItems={cartItems}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                checkOut={checkOut}
                removeFromCart={removeFromCart}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            !user ? <Loginpage cartItems={cartItems} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/register"
          element={
            !user ? (
              <Registrationpage cartItems={cartItems} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/all-products"
          element={
            <ProtectedRoute>
              <Allproductspage
                cartItems={cartItems}
                allProductsData={allProductsData}
                addToCart={addToCart}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-products/:id"
          element={
            <ProtectedRoute>
              <Singleproductpage
                cartItems={cartItems}
                allProductsData={allProductsData}
                addToCart={addToCart}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorNotFound cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
