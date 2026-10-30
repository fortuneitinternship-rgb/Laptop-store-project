
import "./Loader.css";

function Loader({ message = "Loading...", fullPage = false }) {
  return (
    <div
      className={`app-loader ${fullPage ? "app-loader--full-page" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="app-loader__spinner" aria-hidden="true"></span>
      <span>{message}</span>
    </div>
  );
}

export default Loader;
