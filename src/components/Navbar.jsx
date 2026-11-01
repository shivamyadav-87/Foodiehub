// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         🍔 FoodieHub
//       </div>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/cart">🛒 Cart</Link>
//         <Link to="/login">Login</Link>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;




// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Navbar.css";

// function Navbar() {
//   const { cartCount } = useCart();

//   return (
//     <nav className="navbar">

//       <div className="logo">
//         🍔 FoodieHub
//       </div>

//       <div className="nav-links">

//         <Link to="/">Home</Link>

//         <Link to="/menu">Menu</Link>

//         <Link to="/cart" className="cart-link">
//           🛒 Cart

//           {cartCount > 0 && (
//             <span className="cart-badge">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         <Link to="/login">Login</Link>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;





// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import "./Navbar.css";

// function Navbar() {
//   const { cartCount } = useCart();
//   const { user, logout } = useAuth();

//   return (
//     <nav className="navbar">

//       <div className="logo">
//         🍔 FoodieHub
//       </div>

//       <div className="nav-links">

//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>

//         <Link to="/cart" className="cart-link">
//           🛒 Cart

//           {cartCount > 0 && (
//             <span className="cart-badge">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         {user ? (
//           <button
//             className="logout-btn"
//             onClick={logout}
//           >
//             Logout
//           </button>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}

//       </div>

//     </nav>
//   );
// }

// export default Navbar;








// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import "./Navbar.css";

// function Navbar() {
//   const { cartCount } = useCart();
//   const { user, logout } = useAuth();

//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleLogout = () => {
//     logout();
//     setShowConfirm(false);
//   };

//   return (
//     <nav className="navbar">

//       <div className="logo">
//         🍔 FoodieHub
//       </div>

//       <div className="nav-links">

//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>

//         <Link to="/cart" className="cart-link">
//           🛒 Cart

//           {cartCount > 0 && (
//             <span className="cart-badge">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         {user ? (
//           <div className="profile-dropdown">

//             <button className="logout-trigger">
//               Logout ▾
//             </button>

//             <div className="dropdown-menu">

//               <div className="profile-info">
//                 <strong>{user.name}</strong>
//                 <span>{user.email}</span>
//               </div>

//               <div className="dropdown-divider"></div>

//               <button
//                 className="dropdown-logout"
//                 onClick={() => setShowConfirm(true)}
//               ><center>
//                <h4> <b>Logout</b></h4>
                 
//                 </center>
//               </button>

//             </div>
//           </div>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}

//       </div>

//       {/* LOGOUT CONFIRMATION POPUP */}

//       {showConfirm && (
//         <div className="logout-overlay">

//           <div className="logout-modal">

//             <h2>Logout? 👋</h2>

//             <p>
//               Are you sure you want to logout?
//             </p>

//             <div className="logout-actions">

//               <button
//                 className="cancel-btn"
//                 onClick={() => setShowConfirm(false)}
//               >
//                 Cancel
//               </button>

//               <button
//                 className="confirm-btn"
//                 onClick={handleLogout}
//               >
//                 OK
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//     </nav>
//   );
// }

// export default Navbar;








import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
    <nav className="navbar">

      {/* FOODIEHUB LOGO - DIRECT MENU LINK */}

      <Link to="/" className="logo">
        🍔 FoodieHub
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        {user ? (
          <div className="profile-dropdown">

            <button className="logout-trigger">
              Logout ▾
            </button>

            <div className="dropdown-menu">

              <div className="profile-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-logout"
                onClick={() => setShowConfirm(true)}
              >
                <center>
                  <h4><b>Logout</b></h4>
                </center>
              </button>

            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </div>

      {/* LOGOUT CONFIRMATION POPUP */}

      {showConfirm && (
        <div className="logout-overlay">

          <div className="logout-modal">

            <h2>Logout? 👋</h2>

            <p>
              Are you sure you want to logout?
            </p>

            <div className="logout-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={handleLogout}
              >
                OK
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;


