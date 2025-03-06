import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClock, FaLeaf, FaUtensils, FaArrowLeft } from "react-icons/fa"; // Import icons

const sampleRecipes = [
  {
    id: 1,
    name: "Pasta",
    image: "/images/pasta.jpg",
    description: "Delicious homemade pasta with fresh ingredients and rich flavors.",
    ingredients: ["🍝 200g pasta", "🍅 2 cups tomato sauce", "🫒 1 tbsp olive oil", "🧀 1/2 cup grated cheese", "🌿 Fresh basil leaves"],
    time: "30 minutes",
    steps: [
      "Boil pasta in salted water until al dente.",
      "Heat olive oil in a pan and add tomato sauce.",
      "Mix boiled pasta with sauce and cook for 2 minutes.",
      "Top with grated cheese and fresh basil before serving.",
    ],
  },
  {
    id: 2,
    name: "Pizza",
    image: "/images/pizza.jpg",
    description: "Cheesy homemade pizza topped with your favorite ingredients.",
    ingredients: ["🍕 Dough", "🍅 Tomato sauce", "🧀 Cheese", "🍖 Pepperoni", "🌿 Oregano"],
    time: "45 minutes",
    steps: ["Roll out the dough.", "Spread tomato sauce.", "Add cheese and toppings.", "Bake at 180°C for 20 minutes."],
  },
  {
    id: 3,
    name: "Salad",
    image: "/images/salad.jpg",
    description: "A refreshing and nutritious salad with a mix of greens and veggies.",
    ingredients: ["🥬 Lettuce", "🍅 Tomato", "🥒 Cucumber", "🫒 Olive oil", "🧀 Feta cheese"],
    time: "10 minutes",
    steps: ["Chop vegetables.", "Mix them in a bowl.", "Drizzle with olive oil.", "Add feta cheese on top."],
  },
  ,
  {
    id: 2,
    name: "Pizza",
    image: "/images/pizza.jpg",
    description: "Cheesy homemade pizza topped with your favorite ingredients.",
    ingredients: ["🍕 Dough", "🍅 Tomato sauce", "🧀 Cheese", "🍖 Pepperoni", "🌿 Oregano"],
    time: "45 minutes",
    steps: ["Roll out the dough.", "Spread tomato sauce.", "Add cheese and toppings.", "Bake at 180°C for 20 minutes."],
  },
  {
    id: 3,
    name: "Salad",
    image: "/images/salad.jpg",
    description: "A refreshing and nutritious salad with a mix of greens and veggies.",
    ingredients: ["🥬 Lettuce", "🍅 Tomato", "🥒 Cucumber", "🫒 Olive oil", "🧀 Feta cheese"],
    time: "10 minutes",
    steps: ["Chop vegetables.", "Mix them in a bowl.", "Drizzle with olive oil.", "Add feta cheese on top."],
  },
];

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = sampleRecipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-center text-danger mt-5">Recipe Not Found</h2>;
  }

  return (
    <div className="container py-5" style={{ background: "linear-gradient(to right,rgb(21, 21, 21),rgb(98, 94, 93))", minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "800px", borderRadius: "15px" }}>
        {/* Back Button */}
        <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
          <FaArrowLeft /> Back to Home
        </button>

        {/* Recipe Name */}
        <h2 className="text-center text-primary fw-bold">{recipe.name}</h2>

        {/* Image */}
        <div className="text-center">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
        </div>

        {/* Description */}
        <p className="text-center mt-3 text-muted"><i>{recipe.description}</i></p>

        <hr />

        {/* Time Required */}
        <h4 className="text-secondary">
          <FaClock /> ⏳ Time Required: <span className="text-dark">{recipe.time}</span>
        </h4>

        {/* Ingredients */}
        <h4 className="mt-4 text-success"><FaLeaf /> Ingredients</h4>
        <ul className="list-group">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">
              {ingredient}
            </li>
          ))}
        </ul>

        {/* Steps */}
        <h4 className="mt-4 text-info"><FaUtensils /> Steps</h4>
        <ol className="list-group list-group-numbered">
          {recipe.steps.map((step, index) => (
            <li key={index} className="list-group-item">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
