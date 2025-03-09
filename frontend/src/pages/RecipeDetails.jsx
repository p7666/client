import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://backend-swr5.onrender.com"; // Ensure API URL is correct

const RecipeDetails = () => {
  const { id } = useParams(); // Get Recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${API_URL}/api/recipes/${id}`); // Correct API Call
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

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-danger text-center">{error}</h2>;

  if (!recipe) return <h2 className="text-center">No recipe found.</h2>;

  return (
    <div className="container mt-4">
      <h2 className="text-center">{recipe.title}</h2>
      <div className="text-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="img-fluid rounded"
          style={{ maxWidth: "400px" }}
        />
      </div>
      <p className="mt-3"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
      <p><strong>Description:</strong> {recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
