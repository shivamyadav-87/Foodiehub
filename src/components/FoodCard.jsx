// import { useCart } from "../context/CartContext";

// function FoodCard({ food }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="food-card">

//       <div className="food-image">
//         <img src={food.image} alt={food.name} loading="lazy" decoding="async" />
//       </div>

//       <div className="food-info">
//         <h3>{food.name}</h3>

//         <p>{food.category}</p>

//         <div className="food-bottom">
//           <span>₹{food.price}</span>
//           <span>⭐ {food.rating}</span>
//         </div>

//         <button onClick={() => addToCart(food)}>
//           Add to Cart 🛒
//         </button>
//       </div>

//     </div>
//   );
// }

// export default FoodCard;




// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import "./FoodCard.css";

// function FoodCard({ food }) {
//   const { addToCart } = useCart();

//   const [showMessage, setShowMessage] = useState(false);

//   const handleAddToCart = () => {
//     addToCart(food);
//     setShowMessage(true);
//   };

//   useEffect(() => {
//     if (showMessage) {
//       const timer = setTimeout(() => {
//         setShowMessage(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [showMessage]);

//   return (
//     <div className="food-card">

//       {showMessage && (
//         <div className="cart-success-popup">
//           <span>✓</span>
//           <div>
//             <strong>Added Successfully!</strong>
//             <p>{food.name} added to cart.</p>
//           </div>
//         </div>
//       )}

//       <div className="food-image">
//         <img
//           src={food.image}
//           alt={food.name}
//           loading="lazy"
//           decoding="async"
//         />
//       </div>

//       <div className="food-info">

//         <h3>{food.name}</h3>

//         <p>{food.category}</p>

//         <div className="food-bottom">
//           <span>₹{food.price}</span>
//           <span>⭐ {food.rating}</span>
//         </div>

//         <button onClick={handleAddToCart}>
//           Add to Cart 🛒
//         </button>

//       </div>

//     </div>
//   );
// }

// export default FoodCard;





import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login", {
        state: {
          from: "/menu",
          pendingFood: food,
        },
      });

      return;
    }

    addToCart(food);
    setShowMessage(true);
  };

  useEffect(() => {
    if (!showMessage) return;

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <div className="food-card">

      {showMessage && (
        <div className="cart-success-popup">
          <span>✓</span>
          <div>
            <strong>Added Successfully!</strong>
            <p>{food.name} added to cart.</p>
          </div>
        </div>
      )}

      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="food-info">

        <h3>{food.name}</h3>

        <p>{food.category}</p>

        <div className="food-bottom">
          <span>₹{food.price}</span>
          <span>⭐ {food.rating}</span>
        </div>

        <button onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>

      </div>
    </div>
  );
}

export default FoodCard;
