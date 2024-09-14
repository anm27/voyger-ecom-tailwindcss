// LogoutButton.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button
      className="bg-red-600 px-4 py-1 rounded-2xl text-white"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
