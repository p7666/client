import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p>Cooking Time: {recipe.cookingTime} mins</p>
        <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
