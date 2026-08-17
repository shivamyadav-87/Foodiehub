import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="food-card">

      <div className="food-image">
        <img src={food.image} alt={food.name} loading="lazy" decoding="async" />
      </div>

      <div className="food-info">
        <h3>{food.name}</h3>

        <p>{food.category}</p>

        <div className="food-bottom">
          <span>₹{food.price}</span>
          <span>⭐ {food.rating}</span>
        </div>

        <button onClick={() => addToCart(food)}>
          Add to Cart 🛒
        </button>
      </div>

    </div>
  );
}

export default FoodCard;