import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ScrollToTop from "./ScrollToTop";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/product" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
