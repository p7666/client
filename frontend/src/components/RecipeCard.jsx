import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BACKEND_URL = "https://backend-swr5.onrender.com";

const RecipeCard = ({ recipe, onEdit }) => {
  const [likes, setLikes] = useState(recipe.likes || 0);
  const [liked, setLiked] = useState(false);

  // Handle Like Button (Connected to Backend)
  const handleLike = async () => {
    if (liked) return; // Prevent multiple likes

    try {
      const response = await fetch(`${BACKEND_URL}/api/recipes/${recipe.id}/like`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        console.error("Failed to like recipe");
      }
    } catch (error) {
      console.error("Error liking recipe:", error);
    }
  };

  return (
    <div className="card shadow-sm">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>

        {/* Buttons with smaller size */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-success btn-sm" onClick={handleLike} disabled={liked}>
            👍 Like ({likes})
          </button>

          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary btn-sm">
            👀 View
          </Link>

          <button className="btn btn-warning btn-sm" onClick={() => onEdit(recipe)}>
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
