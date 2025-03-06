import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend link

const RecipeEditForm = ({ recipe, onSave, onCancel }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });
  const [message, setMessage] = useState(""); // Store success/error messages

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/recipes/${updatedRecipe._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRecipe),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Recipe updated successfully!");
        onSave(updatedRecipe); // Call parent function to update UI
      } else {
        setMessage(data.message || "❌ Failed to update recipe.");
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
      setMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h3 className="mb-3">Edit Recipe</h3>

      {message && <p className="alert alert-info">{message}</p>} {/* Show success/error messages */}

      <form onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedRecipe.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={updatedRecipe.image}
            onChange={handleChange}
          />
        </div>

        {/* Ingredients */}
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            rows="3"
            value={updatedRecipe.ingredients}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Instructions */}
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            rows="4"
            value={updatedRecipe.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary btn-sm">
            💾 Save Changes
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onCancel}>
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeEditForm;
