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
import Policy from "../pages/Legal/Policy";
import TermsConditions from "../pages/Legal/TermsConditions";
import EdulineAppPolicy from "../pages/Legal/EdulineAppPolicy";
import ScrollToTop from "../ScrollToTop";
export default function AppRoutes() {
    return (
        <BrowserRouter>
           <ScrollToTop />
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
                    {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/my-learning/policy" element={<EdulineAppPolicy />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}
