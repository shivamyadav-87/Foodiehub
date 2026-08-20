import "./Home.css";

import FoodCard from "../components/FoodCard";
import foods from "../data/foods";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
const categories = [
  {
    name: "Pizza",
    image: "/images/40.jpeg", 
  },
  {
    name: "Burger",
    image: "/images/70.jpeg",
  },
  {
    name: "Chinese",
    image: "/images/24.jpeg",
  },
  {
    name: "Biryani",
    image:  "/images/19.jpeg",
  },
  {
    name: "Desserts",
    image: "/images/100.jpeg",
  },
];

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO FOODIEHUB</p>

          <h1>
            Delicious Food
            <br />
            Delivered To Your Door 🍔
          </h1>

          <p className="hero-text">
            Order your favourite food quickly and easily.
          </p>

          <button
  className="order-btn"
  onClick={() => navigate("/menu")}
>
  Order Now
</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">

        <h2>Explore Categories</h2>

        <p className="section-text">
          Choose your favourite food
        </p>

        <div className="category-list">

          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <div className="category-image">
  <img
    src={category.image}
    alt={category.name}
  />
</div>

              <h3>{category.name}</h3>

              <button
  onClick={() =>
    navigate(`/menu?category=${category.name}`)
  }
>
  View Menu
</button>
            </div>
          ))}

        </div>

      </section>

      {/* Popular Food */}

<section className="popular-food">

  <h2>Popular Food</h2>

  <p className="section-text">
    Our most loved dishes
  </p>

  <div className="food-list">

    {foods.map((food) => (
      <FoodCard key={food.id} food={food} />
    ))}

  </div>

</section>

    </div>
  );
}

export default Home;