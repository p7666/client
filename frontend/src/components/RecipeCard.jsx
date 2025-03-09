import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={recipe.imageUrl} alt={recipe.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
        <p className="card-text">
          <strong>Instructions:</strong> {recipe.instructions ? recipe.instructions : "No instructions provided."}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
