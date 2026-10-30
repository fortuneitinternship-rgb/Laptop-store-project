
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";

function Placeholder({ title }) {
  return (
    <section className="container page-section">
      <h1>{title}</h1>
      <p>This page is ready for your LaptopHub implementation.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Placeholder title="Shop Laptops" />}
          />
          <Route
            path="/products/:id"
            element={<Placeholder title="Product Details" />}
          />
          <Route
            path="/compare"
            element={<Placeholder title="Compare Laptops" />}
          />
          <Route
            path="/wishlist"
            element={<Placeholder title="My Wishlist" />}
          />
          <Route
            path="/cart"
            element={<Placeholder title="Shopping Cart" />}
          />
          <Route
            path="/orders"
            element={<Placeholder title="My Orders" />}
          />
          <Route
            path="/about"
            element={<Placeholder title="About LaptopHub" />}
          />
          <Route
            path="/contact"
            element={<Placeholder title="Contact Us" />}
          />
          <Route
            path="/login"
            element={<Placeholder title="Login" />}
          />
          <Route
            path="/register"
            element={<Placeholder title="Create Account" />}
          />
        </Route>

        <Route
          path="*"
          element={<Placeholder title="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
