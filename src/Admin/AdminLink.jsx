import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const AdminLink = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/registerList">
                RegisterList
              </Nav.Link>
              <Nav.Link as={HashLink} to="destination/add">
                Add Event
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default AdminLink;