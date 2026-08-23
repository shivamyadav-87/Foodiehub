import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful! 🎉");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h1>Welcome Back 👋</h1>
        <p>Login to your FoodieHub account</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
