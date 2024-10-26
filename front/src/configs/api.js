import axios from "axios";
import { getCookie } from "../utils/cookie";

const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL, // Base URL for the API
      headers: {
            "Content-Type": "application/json" // Default Content-Type
      }
})

// Request Interceptor
api.interceptors.request.use((request) => {
      const token = getCookie("token");
      if (token) {
            request.headers["Authorization"] = `Bearer ${token}`; // Set Authorization header if token exists
      }
      return request;
},
      (error) => {
            return Promise.reject(error); // Handle request errors
      });

      // Response Interceptor
api.interceptors.response.use(
      (response) => {
          return response; // Return the response object
      },
      (error) => {
          // Handle errors and provide additional information if needed
          if (error.response) {
              // The request was made and the server responded with a status code
              console.error('Error response:', error.response);
          } else if (error.request) {
              // The request was made but no response was received
              console.error('Error request:', error.request);
          } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error message:', error.message);
          }
          return Promise.reject(error); // Reject the promise with the error
      }
  );
  

// REQUEST 
// api.interceptors.request.use(
//       (request) => request,
//       (error) => Promise.reject(error)
// );


// RESPONSE
// api.interceptors.response.use(
//       (response) => response,
//       (error) => Promise.reject(error)
// )






export { api }