
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand__icon">💻</span>
            LaptopHub
          </Link>
          <p>
            Find the right laptop for work, study, gaming, and everyday use.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Shop Laptops</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>

        <div>
          <h3>Customer Service</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/orders">My Orders</Link>
        </div>

        <div>
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LaptopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
