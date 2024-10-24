import { useQuery } from "@tanstack/react-query";
import { api } from "../configs/api";

//GET PRODUCT
const useProducts = () => {
      const queryKey = ["products"];
      // FETCH DATA
      const queryFn = async () => {
            try {
                  const response = await api.get("/products?page=1&limit=10");
                  return response.data.data;// Return the product
            } catch (error) {
                  throw new Error(error.message); // Throw error 
            }
      }
      return useQuery({
            queryKey,
            queryFn,
      });
}

// GET PRODUCT DETAILS
const useProductDetails = (parameter) => {
      const queryKey = ["products", parameter];
      // FETCH DATA
      const queryFn = async () => {
            try {
                  const response = await api.get(`/products/${queryKey[1]}`); // Fetch the product by ID
                  return response.data; // Return the product data
            } catch (error) {
                  throw new Error(error.message); // Throw error for handling
            }
      };
      return useQuery({
            queryKey,
            queryFn,
      });
}

export { useProducts, useProductDetails }