// const shopData = {
//     shopItems: [
//       {
//         id: 7,
//         img: "./assets/shop-items/shops-1.png",
//         name: "Mapple Earphones",
//         price: "180",
//         discount: "25",
//       },
//       {
//         id: 8,
//         img: "./assets/shop-items/shops-2.png",
//         name: "Vivo android one",
//         price: "120",
//         discount: "10",
//       },
//       {
//         id: 9,
//         img: "./assets/shop-items/shops-3.png",
//         name: "Sony Light",
//         price: "20",
//         discount: "50 ",
//       },
//       {
//         id: 10,
//         img: "./assets/shop-items/shops-4.png",
//         name: "Iphone",
//         price: "999",
//         discount: "10 ",
//       },
//       {
//         id: 11,
//         img: "./assets/shop-items/shops-5.png",
//         name: "Ceats wireless earphone",
//         price: "80",
//         discount: "20 ",
//       },
//       {
//         id: 12,
//         img: "./assets/shop-items/shops-7.png",
//         name: "Redimi Phone",
//         price: "400",
//         discount: "20 ",
//       },
//       {
//         id: 13,
//         img: "./assets/shop-items/shops-8.png",
//         name: "Xeats Bluetooth earphones",
//         price: "60",
//         discount: "5 ",
//       },
//       {
//         id: 14,
//         img: "./assets/shop-items/shops-9.png",
//         name: "Airpod",
//         price: "120",
//         discount: "10",
//       },
//       {
//         id: 15,
//         img: "./assets/shop-items/shops-10.png",
//         name: "Silver Cap",
//         price: "5",
//         discount: "2",
//       },
//     ],
//   }
//   export default shopData;

import axios from "axios";

// Define the API endpoint
const apiEndpoint = "https://voyger.online/voyger/all_products.php";

// Function to fetch data from the API
const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data; // Assuming your API returns an array of products like the example you provided
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return []; // Return an empty array in case of an error
  }
};

// Export the fetched data directly
const shopData = async () => {
  const fetchedData = await fetchDataFromAPI(); // Fetch data from the API
  if (fetchedData.length > 0) {
    return fetchedData.map((product) => ({
      id: product.p_id,
      discount: 50, // Set discount as needed
      img: `https://voyger.online/voyger/assets/img/${product.img}`, // Set image path as needed
      name: product.p_name,
      price: parseFloat(product.price), // Parse price to float
      desc: product.benefits, // Use benefits as description or customize as needed
    }));
  } else {
    console.error("No data fetched from API.");
    return []; // Return an empty array if no data is fetched
  }
};

// Export shopData directly
export default shopData();
