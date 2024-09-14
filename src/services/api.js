// src/services/api.js
import axios from "axios";

const API_URL = "https://voyger.online/voyger/address.php";

export const getAddresses = (userId) => {
  return axios
    .get(API_URL, { params: { user_id: userId } })
    .then((response) => response.data);
};

export const addAddress = (addressData) => {
  return axios.post(API_URL, addressData).then((response) => response.data);
};

export const updateAddress = (addressId, addressData) => {
  return axios
    .put(`${API_URL}/${addressId}`, addressData)
    .then((response) => response.data);
};

export const deleteAddress = (addressId) => {
  return axios
    .delete(`${API_URL}/${addressId}`)
    .then((response) => response.data);
};
