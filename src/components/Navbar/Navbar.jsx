
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__icon">💻</span>
          LaptopHub
        </Link>

        <form
          className="header-search"
          onSubmit={(event) => {
            event.preventDefault();
            const query = event.currentTarget.elements.search.value.trim();
            if (query) {
              window.location.href =
                `/products?search=${encodeURIComponent(query)}`;
            }
          }}
        >
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="search"
            name="search"
            placeholder="Search laptops, brands, specs..."
            aria-label="Search laptops"
          />
          <button type="submit">Search</button>
        </form>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Laptops</NavLink>
          <NavLink to="/compare" onClick={closeMenu}>Compare</NavLink>
          <NavLink to="/wishlist" onClick={closeMenu}>
            <i className="bi bi-heart" aria-hidden="true"></i> Wishlist
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu}>
            <i className="bi bi-cart3" aria-hidden="true"></i> Cart
          </NavLink>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
