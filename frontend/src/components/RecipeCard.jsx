import React, { useState } from "react";

const RecipeCard = ({ recipe, onLike, onView, onEdit }) => {
    return (
        <div className="card p-3 m-2 shadow">
            <img src={recipe.imageUrl || "default-image.jpg"} className="card-img-top" alt={recipe.name} />
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => onView(recipe._id)}>View</button>
                    <button className="btn btn-warning" onClick={() => onEdit(recipe)}>Edit</button>
                    <button className="btn btn-success" onClick={() => onLike(recipe._id)}>Like ({recipe.likes})</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
