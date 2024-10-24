import axios from "axios";

const api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            "Content-Type": "application/json"
      }
})

// REQUEST 
api.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error)
);


// RESPONSE
api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
)


export { api }