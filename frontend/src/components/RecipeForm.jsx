import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://backend-swr5.onrender.com";

export default function Navigation() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user data if token is available
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/user`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData); // Store user data
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <Navbar expand="lg" bg="white" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            🍳 RecipeHub
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link as={Link} to="/post">➕ Post Recipe</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/profile">👤 {user.username}</Nav.Link>
                  <Button variant="outline-danger" className="ms-2" onClick={handleLogout}>
                    🚪 Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "70px" }}></div>
    </>
  );
}
