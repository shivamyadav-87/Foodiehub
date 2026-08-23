import { Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful! 🎉");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h1>Create Account 🍔</h1>
        <p>Join FoodieHub today</p>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
