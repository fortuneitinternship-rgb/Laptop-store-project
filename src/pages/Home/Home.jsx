
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "ASUS TUF Gaming F15",
    category: "Gaming",
    price: 74999,
    originalPrice: 89999,
    rating: 4.5,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "HP Pavilion 15",
    category: "Student",
    price: 59999,
    originalPrice: 69999,
    rating: 4.3,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Lenovo LOQ Gaming",
    category: "Gaming",
    price: 69999,
    originalPrice: 79999,
    rating: 4.6,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Acer Aspire 5",
    category: "Student",
    price: 49999,
    originalPrice: 55999,
    rating: 4.2,
    badge: "Value Pick",
  },
];

const categories = [
  { name: "Gaming Laptops", filter: "Gaming", icon: "bi-controller" },
  { name: "Student Laptops", filter: "Student", icon: "bi-mortarboard" },
  { name: "Business Laptops", filter: "Business", icon: "bi-briefcase" },
  { name: "MacBooks", filter: "MacBook", icon: "bi-apple" },
];

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (id) => {
    setCart((current) => [...current, id]);
  };

  const subscribe = (event) => {
    event.preventDefault();

    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
    }
  };

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="home-eyebrow">
                YOUR LAPTOP SHOPPING DESTINATION
              </span>

              <h1>
                Find Your Perfect <span>Laptop</span>
              </h1>

              <p className="hero-description">
                Discover laptops for work, study, gaming, and
                everything in between. Compare your options and
                find the right laptop for your needs.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="home-btn home-btn-primary">
                  Explore Laptops
                  <i className="bi bi-arrow-right ms-2" />
                </Link>

                <Link to="/compare" className="home-btn home-btn-outline">
                  Compare Laptops
                </Link>
              </div>

              <div className="hero-trust">
                <span><i className="bi bi-check-circle" /> Easy comparison</span>
                <span><i className="bi bi-check-circle" /> Simple shopping</span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-laptop-placeholder">
                <span className="placeholder-label">FEATURED LAPTOP</span>
                <i className="bi bi-laptop hero-laptop-icon" />
                <h3>Performance Meets Style</h3>
                <p>Find your next laptop at LaptopHub.</p>
                <span className="placeholder-note">
                  Product image placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="home-benefits">
        <div className="container">
          <div className="row g-3">
            {[
              ["bi-search", "Easy Discovery", "Find laptops by your needs"],
              ["bi-arrow-left-right", "Compare Options", "Compare before deciding"],
              ["bi-heart", "Save Favorites", "Keep track of your choices"],
              ["bi-bag-check", "Simple Checkout", "A clear shopping journey"],
            ].map(([icon, title, description]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div className="benefit-item">
                  <i className={`bi ${icon}`} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">EXPLORE</span>
              <h2>Shop by Category</h2>
              <p>Start with the laptop type that suits you.</p>
            </div>
            <Link to="/products" className="text-link">
              View all laptops <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="row g-3">
            {categories.map((category) => (
              <div className="col-6 col-lg-3" key={category.filter}>
                <button
                  className="category-card"
                  onClick={() => {
                    setActiveCategory(category.filter);
                    document.getElementById("featured")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className={`bi ${category.icon}`} />
                  <h3>{category.name}</h3>
                  <span>Explore category <i className="bi bi-arrow-right" /></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="home-section featured-section" id="featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">OUR COLLECTION</span>
              <h2>Featured Laptops</h2>
              <p>Explore popular picks from our sample collection.</p>
            </div>
            <Link to="/products" className="text-link">
              All products <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="product-toolbar">
            <div className="product-search">
              <i className="bi bi-search" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search featured laptops..."
                aria-label="Search featured laptops"
              />
            </div>

            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              aria-label="Filter by category"
            >
              <option value="All">All categories</option>
              <option value="Gaming">Gaming</option>
              <option value="Student">Student</option>
              <option value="Business">Business</option>
              <option value="MacBook">MacBook</option>
            </select>
          </div>

          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const discount = Math.round(
                  (1 - product.price / product.originalPrice) * 100
                );

                return (
                  <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                    <article className="home-product-card">
                      <div className="product-image-placeholder">
                        <span className="product-badge">{product.badge}</span>

                        <button
                          className={`wishlist-button ${
                            wishlist.includes(product.id) ? "is-saved" : ""
                          }`}
                          onClick={() => toggleWishlist(product.id)}
                          aria-label={
                            wishlist.includes(product.id)
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        >
                          <i className={`bi ${
                            wishlist.includes(product.id)
                              ? "bi-heart-fill"
                              : "bi-heart"
                          }`} />
                        </button>

                        <i className="bi bi-laptop product-laptop-icon" />
                        <span className="placeholder-note">
                          Product image
                        </span>
                      </div>

                      <div className="product-card-body">
                        <p className="product-category">{product.category} Laptop</p>

                        <Link
                          to={`/products/${product.id}`}
                          className="product-title"
                        >
                          {product.name}
                        </Link>

                        <p className="product-rating">
                          <i className="bi bi-star-fill" /> {product.rating}
                          <span> · Sample rating</span>
                        </p>

                        <div className="product-prices">
                          <strong>{formatPrice(product.price)}</strong>
                          <del>{formatPrice(product.originalPrice)}</del>
                          <span>{discount}% OFF</span>
                        </div>

                        <button
                          className="home-btn home-btn-primary add-cart-button"
                          onClick={() => addToCart(product.id)}
                        >
                          <i className="bi bi-cart-plus me-2" />
                          Add to Cart
                        </button>
                      </div>
                    </article>
                  </div>
                );
              })
            ) : (
              <div className="col-12">
                <div className="empty-products">
                  <i className="bi bi-search" />
                  <h3>No matching laptops found</h3>
                  <p>Try another search or choose a different category.</p>
                  <button
                    className="home-btn home-btn-outline"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="interaction-note" aria-live="polite">
            Cart items added in this demo: {cart.length}
            {" · "}
            Wishlist items saved: {wishlist.length}
          </p>
        </div>
      </section>

      {/* Promotion */}
      <section className="home-section">
        <div className="container">
          <div className="promotion-banner">
            <div>
              <span className="section-kicker">LAPTOPHUB DEALS</span>
              <h2>Upgrade Your Setup</h2>
              <p>
                Explore laptop options for your budget, study, or
                next gaming session.
              </p>
              <Link to="/products" className="home-btn home-btn-primary">
                Explore Deals <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>

            <div className="promotion-placeholder">
              <i className="bi bi-tag" />
              <span>Promotion image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="home-section trending-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">POPULAR CHOICES</span>
              <h2>Trending Now</h2>
              <p>Discover laptops worth exploring.</p>
            </div>
          </div>

          <div className="row g-3">
            {products.slice(0, 3).map((product, index) => (
              <div className="col-12 col-md-4" key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="trending-card"
                >
                  <div className="trending-number">0{index + 1}</div>
                  <i className="bi bi-laptop" />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                  </div>
                  <i className="bi bi-arrow-up-right trending-arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="home-section newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <i className="bi bi-envelope-paper newsletter-icon" />
            <h2>Stay Updated with LaptopHub</h2>
            <p>
              Get updates about new laptop arrivals and upcoming offers.
            </p>

            {subscribed ? (
              <div className="newsletter-success" role="status">
                <i className="bi bi-check-circle" /> Thanks for subscribing!
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={subscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                />
                <button className="home-btn home-btn-primary" type="submit">
                  Subscribe
                </button>
              </form>
            )}
            <small>Demo only — no email is sent or stored.</small>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
