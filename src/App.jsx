// Initialize i18n
import { Routes, Route } from "react-router-dom";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
// import Contact from "./page/Contact";
import Products from "./page/Products";
import ProductDetail from "./page/ProductDetail";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail/>} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
