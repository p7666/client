import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.imageUrl} alt={recipe.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
        <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
