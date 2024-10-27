import { useMutation } from "@tanstack/react-query";

import { api } from "../configs/api";

// POST - REGISTRATION
const useRegister = () => {
    const mutationFn = async (data) => {
        const response = await api.post("/auth/register", data);
        return response.data;
    };
    return useMutation({ mutationFn });
}
// POST - LOGIN
const useLogin = () => {
    const mutationFn = async (data) => {
        const response = await api.post("/auth/login", data);
        return response.data;
    };
    return useMutation({ mutationFn });
}



// POST - ADD PRODUCT
const useAddProduct = () => {
    const mutationFn = async (data) => {
        const response = await api.post("/products", data);
        return response.data;
    };
    return useMutation({ mutationFn });
}
//DELETE - DELET A PRODUCT
const useDeleteProduct = () => {
    const mutationFn = async (id) => {
        const response = await api.delete(`/products/${id}`);
        return response.data
    }
    return useMutation({ mutationFn });



}
export { useRegister, useLogin, useAddProduct, useDeleteProduct }