import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavBaar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="contenu">
        <Container>
          <Navbar.Brand href="#home" className="titre">
            Messi
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" id="nav1">
              Home
            </Nav.Link>
            <Nav.Link href="#features" id="nav2">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" id="nav3">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBaar;
