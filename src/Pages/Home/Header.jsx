import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const {users, logOut} = useFirebase()

  const handleLogOut =()=> {
    logOut()
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/">Tourism</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
            <Nav.Link as={HashLink} to="/myOrder">My-Order</Nav.Link>
            {
                    users.email ?
                        <button onClick={handleLogOut} className="btn btn-outline-primary text-white mx-2" >log out</button> :
            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
            }
            {users?.email?
            <Navbar.Text>
              Signed in as: <a href="#login">{users?.displayName}</a>
            </Navbar.Text>
              : 
            <p></p>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
