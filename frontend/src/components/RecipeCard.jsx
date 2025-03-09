import React from "react";

const RecipeCard = ({ recipe }) => {
  // Handle if `recipe` is missing
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img 
        src={recipe.imageUrl || "https://via.placeholder.com/150"} 
        alt={recipe.name || "Recipe Image"} 
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>

        <p className="card-text">
          <strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) 
            ? recipe.ingredients.join(", ") 
            : recipe.ingredients}
        </p>

        <p className="card-text">
          <strong>Instructions:</strong>
          {Array.isArray(recipe.instructions) ? (
            <ul>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          ) : (
            recipe.instructions || "No instructions provided."
          )}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
