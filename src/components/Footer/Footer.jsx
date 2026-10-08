import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">

            <h5>💻 LaptopHub</h5>

            <p className="text-secondary">
              Find the perfect laptop for work, study,
              gaming and everyday use.
            </p>

          </div>

          <div className="col-md-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/products"
                >
                  Laptops
                </Link>
              </li>

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/compare"
                >
                  Compare
                </Link>
              </li>

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/about"
                >
                  About
                </Link>
              </li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>Customer Service</h5>

            <ul className="list-unstyled">

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/orders"
                >
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/wishlist"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  className="text-secondary text-decoration-none"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

        </div>

        <hr />

        <div className="text-center text-secondary">
          © 2026 LaptopHub. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;