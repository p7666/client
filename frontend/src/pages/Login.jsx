import React, { useState } from "react";

const API_BASE_URL = "https://backend-swr5.onrender.com"; // Backend link

const Login = () => {
  const [email, setEmail] = useState(""); // Changed from username to email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Allow cookies (for session-based auth)
        body: JSON.stringify({ email, password }), // Changed username to email
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful!");
        console.log("User logged in:", data);

        // Save token if JWT-based authentication
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Redirect user after successful login
        setTimeout(() => {
          window.location.href = "/dashboard"; // Change to your actual dashboard route
        }, 1500);
      } else {
        setMessage(data.message || "❌ Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("❌ An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      {message && (
        <p className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleLogin}>
        <input
          type="email" // Changed from text to email
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
