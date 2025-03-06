import React, { useState } from "react";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend URL

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // Success/Error message
  const [loading, setLoading] = useState(false); // Loading state

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Important for session-based authentication
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("Content-Type");

      // Handle non-JSON responses (prevents syntax errors)
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: "❌ Server returned an invalid response." };
      }

      if (response.ok) {
        setMessage("🎉 Registration successful! You can now log in.");
        setFormData({ username: "", email: "", password: "" }); // Clear form
      } else {
        setMessage(data.message || "❌ Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>

      {message && (
        <p className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
