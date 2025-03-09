import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {/* Recipe Image */}
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
        
        {/* Ingredients */}
        <p className="card-text">
          <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
        </p>

        {/* Instructions */}
        <p className="card-text">
          <strong>Instructions:</strong> {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
