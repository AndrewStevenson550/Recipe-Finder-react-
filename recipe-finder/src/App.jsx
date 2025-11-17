import "./App.css";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const initialRecipes = [
  { id: 1, name: "Tomato Soup", ingredients: ["tomatoes", "water", "salt"] },
  { id: 2, name: "Chicken Salad", ingredients: ["chicken", "mayo", "celery"] },
  {
    id: 3,
    name: "Pasta with Pesto",
    ingredients: ["pasta", "pesto", "cheese"],
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filteredRecipes = initialRecipes.filter((recipe) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });

  return (
    <>
      <h1>Recipe Finder</h1>
      <p>This is a recipe finder</p>

      {filteredRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
      <SearchBar onSearchChange={handleSearch} />
    </>
  );
}

export default App;
