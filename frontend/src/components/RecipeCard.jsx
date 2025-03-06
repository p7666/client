const handleLike = async (recipeId) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please log in to like a recipe");
            return;
        }

        const response = await fetch(`https://backend-swr5.onrender.com/api/recipes/like/${recipeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to like recipe");

        alert("Recipe liked successfully!");
    } catch (error) {
        console.error("Error liking recipe:", error);
        alert("Failed to like recipe");
    }
};
