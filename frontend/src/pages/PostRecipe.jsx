import React, { useState } from "react";

const PostRecipe = () => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [cookingTime, setCookingTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token"); // Get token from localStorage

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
                    "Authorization": `Bearer ${token}` // Send token in headers
                },
                body: JSON.stringify(recipeData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to post recipe");
            }

            alert("Recipe posted successfully!");
            // Optionally reset the form
        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Post a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Recipe Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                <input type="number" placeholder="Cooking Time (mins)" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
                <button type="submit">Post Recipe</button>
            </form>
        </div>
    );
};

export default PostRecipe;
