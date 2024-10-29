import axios from "axios";
import { getCookie } from "../utils/cookie";


//API
const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL, // Base URL for the API
      headers: {
            "Content-Type": "application/json" // Default Content-Type
      }
})

// REQUEST INTERCEPTOR
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
          if (error.response) {
              console.error('Error response:', error.response);
          } else if (error.request) {
              console.error('Error request:', error.request);
          } else {
              console.error('Error message:', error.message);
          }
          return Promise.reject(error); // Reject the promise with the error
      }
  );
  

export { api }