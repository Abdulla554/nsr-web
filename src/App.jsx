// Initialize i18n
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Products from "./page/Products";
import ProductDetail from "./page/ProductDetail";
import Categories from "./page/Categories";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Orders from "./page/Orders";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />

          </Routes>
        </main>
        <Footer />
      </div>

    </QueryClientProvider>
  );
}
