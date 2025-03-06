import React, { useState } from "react";

const EditRecipe = ({ recipe, onUpdate, onClose }) => {
    const [formData, setFormData] = useState({ ...recipe });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://backend-swr5.onrender.com/api/recipes/${recipe._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update recipe");
            }

            onUpdate(formData);
            onClose();
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required />
            <textarea name="instructions" value={formData.instructions} onChange={handleChange} required />
            <input type="number" name="cookingTime" value={formData.cookingTime} onChange={handleChange} required />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditRecipe;
