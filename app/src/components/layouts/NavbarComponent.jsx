import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Briscolina
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/stats">Games History</Nav.Link>
              <Nav.Link as={Link} to="/playerDashboard">Player Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/addGame">Register a Game</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;
