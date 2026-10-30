
import "./Card.css";

function Card({ children, className = "", padding = true }) {
  return (
    <div
      className={`app-card ${padding ? "app-card--padded" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Card;
