import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🍔 FoodieHub
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/login">Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;