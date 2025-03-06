import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BACKEND_URL = "https://backend-swr5.onrender.com";

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check for user authentication
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ✅ Load user from localStorage
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Clear token
    localStorage.removeItem("user"); // ✅ Clear user data
    setUser(null);
    navigate("/login"); // ✅ Redirect to login
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="white" fixed="top" className="shadow-sm">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            🍳 RecipeHub
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Bar */}
            <Form className="d-flex mx-auto my-2 my-lg-0" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search recipes..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="outline-primary">🔍</Button>
            </Form>

            {/* Navigation Links */}
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link as={Link} to="/post">➕ Post Recipe</Nav.Link>
                  <Nav.Link as={Link} to="/profile">👤 {user.username}</Nav.Link>
                  <Button variant="outline-danger" className="ms-2" onClick={handleLogout}>🚪 Logout</Button>
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

      {/* Prevent content from being hidden behind navbar */}
      <div style={{ marginTop: "70px" }}></div>
    </>
  );
}
