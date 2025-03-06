import React, { useState } from "react";

const PostRecipe = () => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [cookingTime, setCookingTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            alert("User not authenticated. Please log in.");
            return;
        }

        const recipeData = { name, imageUrl, ingredients, instructions, cookingTime };

        try {
            const response = await fetch("https://backend-swr5.onrender.com/api/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(recipeData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to post recipe");
            }

            alert("Recipe posted successfully!");
            // Reset form
            setName("");
            setImageUrl("");
            setIngredients("");
            setInstructions("");
            setCookingTime("");
        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Post a New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Recipe Name</label>
                        <input type="text" className="form-control" placeholder="Enter recipe name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingredients</label>
                        <textarea className="form-control" rows="3" placeholder="Enter ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Instructions</label>
                        <textarea className="form-control" rows="4" placeholder="Enter instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cooking Time (mins)</label>
                        <input type="number" className="form-control" placeholder="Enter cooking time" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Post Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default PostRecipe;
