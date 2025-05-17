import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <div className="overlay">
        <h1 className="home-title">Find your perfect rental car</h1>
        <p className="home-subtitle">
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className="home-button">
          View Catalog
        </Link>
      </div>
    </section>
  );
}