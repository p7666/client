import React, { useEffect, useState } from "react";

const RecipeDetails = ({ recipeId, onClose }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://backend-swr5.onrender.com/api/recipes/${recipeId}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.error("Error fetching recipe:", err));
    }, [recipeId]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{recipe.name}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <img src={recipe.imageUrl || "default-image.jpg"} className="img-fluid mb-3" alt={recipe.name} />
                        <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
