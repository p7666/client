import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";
import RecipeList from "./pages/RecipeList";
import PostRecipe from "./pages/PostRecipe";

// Function to check authentication
const isAuthenticated = () => !!localStorage.getItem("token");

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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* 🔒 Protected Routes (Require Login) */}
          <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/post" element={isAuthenticated() ? <PostRecipe /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={isAuthenticated() ? <EditRecipe /> : <Navigate to="/login" />} />

          {/* 🛑 Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
