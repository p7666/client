import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import EditRecipe from "./pages/EditRecipe";
import RecipeList from "./pages/RecipeList";
import PostRecipe from "./pages/PostRecipe";

// Backend API URL
export const API_URL = "https://backend-swr5.onrender.com";

// Authentication Check
const isAuthenticated = () => !!localStorage.getItem("token");

// Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  return isAuthenticated() ? element : <Navigate to="/login" state={{ from: location }} replace />;
};

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

          {/* 🔒 Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/post" element={<ProtectedRoute element={<PostRecipe />} />} />
          <Route path="/edit/:id" element={<ProtectedRoute element={<EditRecipe />} />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
