import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100">

      <div
        className="bg-light d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        <span className="text-secondary">
          Product Image
        </span>
      </div>

      <div className="card-body">

        <h5 className="card-title">
          {product?.name || "ASUS TUF Gaming F15"}
        </h5>

        <p className="text-secondary mb-2">
          ★★★★★ 4.5
        </p>

        <h5>
          ₹{product?.price || "74,999"}
        </h5>

        <div className="d-flex gap-2 mt-3">

          <button className="btn btn-primary">
            <i className="bi bi-cart"></i>
            Add to Cart
          </button>

          <button className="btn btn-outline-secondary">
            <i className="bi bi-heart"></i>
          </button>

        </div>

        <Link
          to={`/products/${product?.id || 1}`}
          className="btn btn-link px-0 mt-2"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;