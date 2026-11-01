// // import { Link } from "react-router-dom";
// // import "./Auth.css";

// // function Login() {
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     alert("Login Successful! 🎉");
// //   };

// //   return (
// //     <div className="auth-page">
// //       <div className="auth-box">

// //         <h1>Welcome Back 👋</h1>
// //         <p>Login to your FoodieHub account</p>

// //         <form onSubmit={handleLogin}>

// //           <label>Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             required
// //           />

// //           <label>Password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter your password"
// //             required
// //           />

// //           <button type="submit">
// //             Login
// //           </button>

// //         </form>

// //         <p className="auth-link">
// //           Don't have an account?{" "}
// //           <Link to="/register">Register</Link>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;



// import { Link } from "react-router-dom";
// import "./Auth.css";

// function Login() {

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (email && password) {
//       alert("Login Successful! 🎉");
//     }
//   };

//   return (
//     <div className="auth-page">

//       <div className="auth-box">

//         <h1>Welcome Back 👋</h1>

//         <p className="auth-subtitle">
//           Login to your FoodieHub account
//         </p>

//         <form onSubmit={handleLogin}>

//           <label>Email</label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             autoComplete="email"
//             required
//           />

//           <label>Password</label>

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             autoComplete="current-password"
//             required
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         <p className="auth-link">
//           Don't have an account?{" "}
//           <Link to="/register">Register</Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Auth.css";

function Login() {
  const { login, user } = useAuth();
  const { addToCart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    const pendingFood = location.state?.pendingFood;

    if (pendingFood) {
      addToCart(pendingFood);
      alert(pendingFood.name + " added to your cart! 🎉");
    } else {
      alert("Login Successful! 🎉");
    }

    navigate(location.state?.from || "/menu", {
      replace: true,
    });
  };

  if (user) {
    return (
      <div className="auth-page">
        <div className="auth-box">
          <h1>Already Logged In! 👋</h1>
          <p>Welcome to FoodieHub.</p>
          <Link to="/menu">Go to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h1>Welcome Back 👋</h1>
        <p>Login to your FoodieHub account</p>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
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
