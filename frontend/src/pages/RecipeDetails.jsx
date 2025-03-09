import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://backend-swr5.onrender.com"; // Updated backend URL

const RecipeDetails = () => {
  const { id } = useParams(); // Get Recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${API_URL}/api/recipes/${id}`); // Updated API call
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="img-fluid" />
      <p>Cooking Time: {recipe.cookingTime} mins</p>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
