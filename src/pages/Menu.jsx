// import { useState } from "react";
// import foods from "../data/foods";
// import FoodCard from "../components/FoodCard";
// import "./Menu.css";
// import { useSearchParams } from "react-router-dom";



// function Menu() {

// const [searchParams] = useSearchParams();
// const selectedCategory = searchParams.get("category");

//   const [category, setCategory] = useState(selectedCategory || "All");
//   const [search, setSearch] = useState("");

//   const categories = [
//     "All",
//     "Pizza",
//     "Burger",
//     "Biryani",
//     "Chinese",
//     "Desserts"
//   ];
  

//   const filteredFoods = foods.filter((food) => {
//     const matchCategory =
//       category === "All" || food.category === category;

//     const matchSearch = food.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     return matchCategory && matchSearch;
//   });

//   return (
//     <div className="menu-page">

//       <h1>Our Menu 🍽️</h1>
//       <p>Choose your favourite food</p>

//       <input
//         type="text"
//         placeholder="Search food..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-box"
//       />


//       <div className="filter-buttons">
//         {categories.map((item) => (
//           <button
//             key={item}
//             onClick={() => setCategory(item)}
//             className={category === item ? "active" : ""}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       <div className="menu-food-list">
//         {filteredFoods.map((food) => (
//           <FoodCard key={food.id} food={food} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Menu;




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

  // Category and Search Filter
  const filteredFoods = foods.filter((food) => {

    const matchCategory =
      category === "All" || food.category === category;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Automatic Price Sorting (Low to High)
  const sortedFoods = [...filteredFoods].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );

  return (
    <div className="menu-page">

      <h1>Our Menu 🍽️</h1>

      <p>Choose your favourite food</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Category Filter */}
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

      {/* Food Items */}
      <div className="menu-food-list">

        {sortedFoods.length > 0 ? (

          sortedFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))

        ) : (

          <p>No food items found!</p>

        )}

      </div>

    </div>
  );
}

export default Menu;
