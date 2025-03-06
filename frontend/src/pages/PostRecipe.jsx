import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend link

export default function PostRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
    cookingTime: "",
  });

  const [message, setMessage] = useState(""); // To display success/error messages

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/recipes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Recipe posted successfully!");
        setRecipe({ name: "", image: "", ingredients: "", instructions: "", cookingTime: "" }); // Reset form
      } else {
        setMessage(data.message || "❌ Failed to post recipe. Try again.");
      }
    } catch (error) {
      console.error("Error posting recipe:", error);
      setMessage("❌ An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📌 Post a New Recipe</h2>
      
      {message && <p className="alert alert-info">{message}</p>} {/* Display success/error messages */}

      <Form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded">
        {/* Recipe Name */}
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Image URL */}
        <Form.Group className="mb-3">
          <Form.Label>Recipe Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Paste an image URL"
            name="image"
            value={recipe.image}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Ingredients */}
        <Form.Group className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="List ingredients separated by commas"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Instructions */}
        <Form.Group className="mb-3">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Step-by-step instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Cooking Time */}
        <Form.Group className="mb-3">
          <Form.Label>Cooking Time (in minutes)</Form.Label>
          <Form.Control
            type="number"
            name="cookingTime"
            placeholder="Enter time"
            value={recipe.cookingTime}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          🚀 Post Recipe
        </Button>
      </Form>
    </div>
  );
}
