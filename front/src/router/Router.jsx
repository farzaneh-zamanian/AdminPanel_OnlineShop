import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";

import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/404/NotFoundPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>  
          <Route index element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
