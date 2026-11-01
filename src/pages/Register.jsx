// import { Link } from "react-router-dom";
// import "./Auth.css";

// function Register() {
//   const handleRegister = (e) => {
//     e.preventDefault();
//     alert("Registration Successful! 🎉");
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-box">

//         <h1>Create Account 🍔</h1>
//         <p>Join FoodieHub today</p>

//         <form onSubmit={handleRegister}>

//           <label>Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Create password"
//             required
//           />

//           <button type="submit">
//             Register
//           </button>

//         </form>

//         <p className="auth-link">
//           Already have an account?{" "}
//           <Link to="/login">Login</Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Register;





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = register(name, email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    alert("Registration Successful! 🎉 Please Login.");

    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h1>Create Account 🍔</h1>
        <p>Join FoodieHub today</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            minLength="6"
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
