import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🍔 FoodieHub</h2>
          <p>
            Delicious food delivered to your door.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <p>Pizza</p>
          <p>Burger</p>
          <p>Biryani</p>
          <p>Chinese</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 foodiehub@gmail.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodieHub. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;