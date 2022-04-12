import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./Header.scss";
const Header = () => {
  return (
    <Navbar bg="success" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Rusty Bike</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#experts">Experts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
