
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "ASUS TUF Gaming F15",
    brand: "ASUS",
    category: "Gaming",
    price: 74999,
    oldPrice: 89999,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&auto=format&fit=crop&q=85",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
  },
  {
    id: 2,
    name: "HP Pavilion 15",
    brand: "HP",
    category: "Student",
    price: 59999,
    oldPrice: 67999,
    rating: 4.5,
    reviews: 98,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&auto=format&fit=crop&q=85",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
  },
  {
    id: 3,
    name: "Lenovo LOQ Gaming",
    brand: "Lenovo",
    category: "Gaming",
    price: 69999,
    oldPrice: 79999,
    rating: 4.7,
    reviews: 86,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=85",
    specs: "AMD Ryzen 7 • 16GB RAM • 1TB SSD",
  },
  {
    id: 4,
    name: "Acer Aspire 5",
    brand: "Acer",
    category: "Student",
    price: 49999,
    oldPrice: 55999,
    rating: 4.3,
    reviews: 72,
    badge: "Great Value",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=85",
    specs: "Intel Core i5 • 8GB RAM • 512GB SSD",
  },
  {
    id: 5,
    name: "Dell Inspiron 15",
    brand: "Dell",
    category: "Business",
    price: 62999,
    oldPrice: 72999,
    rating: 4.6,
    reviews: 110,
    badge: "Recommended",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=700&auto=format&fit=crop&q=85",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
  },
  {
    id: 6,
    name: "MacBook Air",
    brand: "Apple",
    category: "MacBook",
    price: 99999,
    oldPrice: 109999,
    rating: 4.9,
    reviews: 145,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=85",
    specs: "Apple M-series • 16GB RAM • 512GB SSD",
  },
];

const categories = [
  {
    name: "Gaming Laptops",
    type: "Gaming",
    icon: "bi-controller",
    description: "Powerful performance for gaming",
  },
  {
    name: "Student Laptops",
    type: "Student",
    icon: "bi-mortarboard",
    description: "Perfect for learning and study",
  },
  {
    name: "Business Laptops",
    type: "Business",
    icon: "bi-briefcase",
    description: "Productivity wherever you go",
  },
  {
    name: "MacBooks",
    type: "MacBook",
    icon: "bi-apple",
    description: "Premium Apple experience",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function Home() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = (product) => {
    setCart((previous) => [...previous, product.id]);
    setMessage(`${product.name} added to your cart!`);

    window.setTimeout(() => setMessage(""), 2500);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/products");
    }
  };

  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-tag">
              <i className="bi bi-lightning-charge-fill"></i>
              TECH THAT MOVES YOU
            </span>

            <h1>
              Find Your Perfect
              <span> Laptop</span>
            </h1>

            <p>
              Discover powerful laptops for work, study, gaming,
              and everything in between. Find your next upgrade
              at LaptopHub.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="home-btn home-btn-primary">
                Explore Laptops
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link to="/compare" className="home-btn home-btn-outline">
                Compare Laptops
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <strong>500+</strong>
                <span>Laptop Models</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Genuine Products</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Customer Support</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-backdrop"></div>
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1100&auto=format&fit=crop&q=90"
              alt="Laptop displayed on a desk"
            />

            <div className="hero-floating-card">
              <i className="bi bi-stars"></i>
              <div>
                <strong>Find Your Match</strong>
                <span>Explore top laptop brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <div className="container benefits-grid">
          <div className="benefit-item">
            <i className="bi bi-truck"></i>
            <div>
              <h3>Free Delivery</h3>
              <p>On eligible orders</p>
            </div>
          </div>

          <div className="benefit-item">
            <i className="bi bi-shield-check"></i>
            <div>
              <h3>Genuine Products</h3>
              <p>Trusted laptop brands</p>
            </div>
          </div>

          <div className="benefit-item">
            <i className="bi bi-arrow-repeat"></i>
            <div>
              <h3>Easy Returns</h3>
              <p>Hassle-free process</p>
            </div>
          </div>

          <div className="benefit-item">
            <i className="bi bi-headset"></i>
            <div>
              <h3>Expert Support</h3>
              <p>We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="home-section category-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">EXPLORE COLLECTIONS</span>
              <h2>Shop by Category</h2>
              <p>Find the right laptop for your needs.</p>
            </div>

            <Link to="/products" className="view-all-link">
              View All <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                type="button"
                className="category-card"
                key={category.type}
                onClick={() => {
                  setActiveCategory(category.type);
                  document.getElementById("featured")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="category-icon">
                  <i className={`bi ${category.icon}`}></i>
                </span>

                <h3>{category.name}</h3>
                <p>{category.description}</p>

                <span className="category-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-section featured-section" id="featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">HANDPICKED FOR YOU</span>
              <h2>Featured Laptops</h2>
              <p>Explore some of our most popular laptops.</p>
            </div>

            <Link to="/products" className="view-all-link">
              View All Products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="product-toolbar">
            <div className="category-tabs">
              {["All", "Gaming", "Student", "Business", "MacBook"].map(
                (category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory === category ? "active" : ""
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <form className="product-search" onSubmit={handleSearch}>
              <i className="bi bi-search"></i>
              <input
                type="search"
                placeholder="Search laptops..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button type="submit" aria-label="Search">
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </Link>

                    <span className="product-badge">{product.badge}</span>

                    <span className="discount-badge">{discount}% OFF</span>

                    <button
                      type="button"
                      className={`wishlist-button ${
                        wishlist.includes(product.id) ? "wishlisted" : ""
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={
                        wishlist.includes(product.id)
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                    >
                      <i
                        className={
                          wishlist.includes(product.id)
                            ? "bi bi-heart-fill"
                            : "bi bi-heart"
                        }
                      ></i>
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-brand">{product.brand}</span>

                    <Link
                      to={`/products/${product.id}`}
                      className="product-name"
                    >
                      {product.name}
                    </Link>

                    <p className="product-specs">{product.specs}</p>

                    <div className="product-rating">
                      <i className="bi bi-star-fill"></i>
                      <strong>{product.rating}</strong>
                      <span>({product.reviews} reviews)</span>
                    </div>

                    <div className="product-price">
                      <strong>{formatPrice(product.price)}</strong>
                      <del>{formatPrice(product.oldPrice)}</del>
                    </div>

                    <button
                      type="button"
                      className="add-cart-button"
                      onClick={() => addToCart(product)}
                    >
                      <i className="bi bi-cart-plus"></i>
                      Add to Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="empty-products">
              <i className="bi bi-search"></i>
              <h3>No laptops found</h3>
              <p>Try another search or choose a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROMOTION BANNER */}
      <section className="promotion-section">
        <div className="container">
          <div className="promotion-banner">
            <div className="promotion-content">
              <span className="promotion-label">
                LIMITED TIME OFFER
              </span>
              <h2>Upgrade Your Setup.<br />Upgrade Your Life.</h2>
              <p>
                Discover selected laptops at special prices.
                Your next great device is waiting.
              </p>

              <Link to="/products" className="home-btn promotion-btn">
                Shop Deals <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="promotion-image">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=85"
                alt="Premium laptop"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="home-section trending-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">POPULAR RIGHT NOW</span>
              <h2>Trending Laptops</h2>
              <p>Popular picks customers are exploring.</p>
            </div>

            <Link to="/products" className="view-all-link">
              Explore More <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="trending-grid">
            {products.slice(0, 3).map((product, index) => (
              <Link
                to={`/products/${product.id}`}
                className="trending-card"
                key={product.id}
              >
                <span className="trending-number">0{index + 1}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <div className="trending-info">
                  <span>{product.brand}</span>
                  <h3>{product.name}</h3>
                  <strong>{formatPrice(product.price)}</strong>
                </div>
                <i className="bi bi-arrow-up-right trending-arrow"></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container newsletter-container">
          <div>
            <span className="section-eyebrow">STAY UPDATED</span>
            <h2>Get the Latest Tech Deals</h2>
            <p>
              Subscribe for new arrivals, product updates,
              and special offers.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleNewsletter}>
            {subscribed ? (
              <p className="newsletter-success">
                <i className="bi bi-check-circle-fill"></i>
                Thanks for subscribing!
              </p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit">
                  Subscribe <i className="bi bi-arrow-right"></i>
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* CART FEEDBACK */}
      {message && (
        <div className="home-toast" role="status">
          <i className="bi bi-check-circle-fill"></i>
          {message}
        </div>
      )}

    </div>
  );
}

export default Home;
