
import './App.css'
import RecipeCard from './components/RecipeCard' 

const initialRecipes = [
  { id: 1, name: "Tomato Soup", ingredients: ["tomatoes", "water", "salt"] },
  { id: 2, name: "Chicken Salad", ingredients: ["chicken", "mayo", "celery"] },
  { id: 3, name: "Pasta with Pesto", ingredients: ["pasta", "pesto", "cheese"] },
];

function App() {
  return (
    <>
      <h1>Recipe Finder</h1>
      <p>This is a recipe finder</p>
      
      {initialRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
      ))}

    </>
  )
}

export default App
