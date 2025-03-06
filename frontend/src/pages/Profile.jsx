import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend link

const Profile = () => {
  const [user, setUser] = useState(null); // Store user profile data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Store error message

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          setError(data.message || "Failed to load profile.");
        }
      } catch (err) {
        setError("An error occurred while fetching profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading profile...</p>;
  if (error) return <p className="alert alert-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h4>Liked Recipes</h4>
      {user.likedRecipes.length > 0 ? (
        <ul>
          {user.likedRecipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      ) : (
        <p>No liked recipes yet.</p>
      )}
    </div>
  );
};

export default Profile;
