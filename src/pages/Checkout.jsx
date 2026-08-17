import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="success-page">
        <div className="success-box">
          <div className="success-icon">✅</div>
          <h1>Order Placed Successfully!</h1>
          <p>Your delicious food is on the way. 🍔</p>
          <p>Total Amount: ₹{total}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-box">
        <h1>Checkout 🛒</h1>

        <form onSubmit={handleOrder}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            required
          />

          <label>Delivery Address</label>
          <textarea
            placeholder="Enter your address"
            rows="4"
            required
          ></textarea>

          <label>Payment Method</label>

          <select required>
            <option value="">Select payment method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>

          <div className="checkout-total">
            <span>Total Amount</span>
            <strong>₹{total}</strong>
          </div>

          <button type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;