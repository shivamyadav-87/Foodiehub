import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import "./Menu.css";
import { useSearchParams } from "react-router-dom";



function Menu() {

const [searchParams] = useSearchParams();
const selectedCategory = searchParams.get("category");

  const [category, setCategory] = useState(selectedCategory || "All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Biryani",
    "Chinese",
    "Desserts"
  ];

  const filteredFoods = foods.filter((food) => {
    const matchCategory =
      category === "All" || food.category === category;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="menu-page">

      <h1>Our Menu 🍽️</h1>
      <p>Choose your favourite food</p>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="filter-buttons">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="menu-food-list">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

    </div>
  );
}

export default Menu;