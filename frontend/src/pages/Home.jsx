import React from "react";
import Sidebar from "../components/Sidebar";
import RecipeCard from "../components/RecipeCard";

const sampleRecipes = [
  { id: 1, name: "Pasta", image: "/images/pasta.jpg" },
  { id: 2, name: "Pizza", image: "/images/pizza.jpg" },
  { id: 3, name: "Salad", image: "/images/salad.jpg" },
];

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar on the left */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Recipes Section */}
        <div className="col-md-9">
          <h2>Quick Recipes</h2>
          <div className="row">
            {sampleRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
