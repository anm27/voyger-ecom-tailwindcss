import axios from "axios";

// Define the API endpoint
const apiEndpoint = "https://voyger.online/voyger/herbaldata.php";

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
const herbalData = async () => {
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

// Export herbalData directly
export default herbalData;
