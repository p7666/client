import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import RecipeDetails from './pages/RecipeDetails';
import EditRecipe from './pages/EditRecipe';
import RecipeList from './pages/RecipeList';
import PostRecipe from "./pages/PostRecipe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />  {/* Recipe Details */}
          <Route path="/edit/:id" element={<EditRecipe />} />  {/* Edit Recipe */}
          <Route path="/post" element={<PostRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
