import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { users, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/">
            Tourism
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">
              Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#adventure">
              Adventure
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>

            <Nav.Link as={HashLink} to="/tourDestination">
              Destination
            </Nav.Link>
            <Nav.Link as={HashLink} to="/myOrder">
              My-Order
            </Nav.Link>
            

            {users?.email ? (
              <Navbar.Text>
                Signed in as: <a href="#login">{users?.displayName}</a>
              </Navbar.Text>
            ) : (
              <p></p>
            )}
            {users.email ? (
              <button
                onClick={handleLogOut}
                className="btn btn-outline-primary text-white mx-2"
              >
                log out
              </button>
            ) : (
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link as={HashLink} to="/admin">
              <button className="btn btn-outline-primary text-white mx-2">
                Admin
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
