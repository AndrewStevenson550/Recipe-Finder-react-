import '../styles/recipe-card.css'

function RecipeCard({ name, ingredients }){
    return (
    <div className="recipe-card" >
        <h2 className="recipe-name">{name}</h2> 
        <p className="recipe-ingredients">{ingredients.join(', ')}</p>
    </div>
    )
}


export default RecipeCard