import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/Company/About";
import Contact from "../pages/Company/Contact";
import NotFound from "../pages/Notfound";
import Solutions from "../pages/Solutions/Solutions";
import Resources from "../pages/Resources/Resources";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="/products/:productName" element={<ProductDetail />} />

                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/company" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/get-started" element={<Contact />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Contact />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}
