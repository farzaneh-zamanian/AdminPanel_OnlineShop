import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";

import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/404/NotFoundPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { getCookie } from "../utils/cookie";
import AuthProvider from "../Providers/AuthProvider";

// Route Protection
/*const ProtectedRoute = ({ element }) => {
  const token = getCookie("token");
  return token ? element : <Navigate to="/login" />;
};*/

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          {/* <Route
            path="/admin"
            element={token ? <AdminPage /> : <Navigate to="/login" />}
          />  */}
          {/* <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminPage />} />}
          /> */}
          <Route
            path="/admin"
            element={
              <AuthProvider>
                <AdminPage />
              </AuthProvider>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
