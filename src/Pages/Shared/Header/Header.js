import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./Header.scss";
const Header = () => {
  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Rusty Bike</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
