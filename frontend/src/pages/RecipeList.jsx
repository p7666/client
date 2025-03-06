import React, { useEffect, useState } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://backend-swr5.onrender.com/api/recipes");
                if (!response.ok) throw new Error("Failed to fetch recipes");

                const data = await response.json();
                console.log("Fetched Recipes:", data); // Debugging
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">All Recipes</h2>
            <div className="row">
                {recipes.length > 0 ? recipes.map((recipe) => (
                    <div key={recipe._id} className="col-md-4">
                        <div className="card shadow-lg mb-4">
                            <img src={recipe.imageUrl || "default-image.jpg"} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text">Cooking Time: {recipe.cookingTime} mins</p>
                                <a href={`/recipe/${recipe._id}`} className="btn btn-primary">View Recipe</a>
                            </div>
                        </div>
                    </div>
                )) : <p>No recipes available</p>}
            </div>
        </div>
    );
};

export default RecipeList;
