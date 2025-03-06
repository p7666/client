import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend link

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]); // Store fetched recipes
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  const navigate = useNavigate();

  // Fetch recipes from backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/recipes`);
        if (!response.ok) throw new Error("Failed to fetch recipes");

        const data = await response.json();
        setRecipes(data); // Store recipes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Navigate to edit page
  const handleEdit = (recipe) => {
    navigate(`/edit/${recipe._id}`); // Use MongoDB _id instead of static id
  };

  return (
    <div className="container mt-4">
      <h2>All Recipes</h2>

      {loading && <p className="text-center">⏳ Loading recipes...</p>}
      {error && <p className="text-danger text-center">❌ {error}</p>}

      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4">
            <RecipeCard recipe={recipe} onEdit={handleEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
