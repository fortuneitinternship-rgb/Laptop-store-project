import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar navbar-expand-lg bg-white border-bottom">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          💻 LaptopHub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <form className="d-flex mx-lg-auto my-3 my-lg-0">
            <input
              className="form-control"
              type="search"
              placeholder="Search laptops, brands, specs..."
            />

            <button
              className="btn btn-primary ms-2"
              type="button"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>

          <ul className="navbar-nav ms-lg-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Laptops
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/compare">
                Compare
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <i className="bi bi-heart"></i>
                Wishlist
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i>
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </header>
  );
}

export default Navbar;