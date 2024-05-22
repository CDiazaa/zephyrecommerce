import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Zephyr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombre</Nav.Link>
            <Nav.Link href="#link">Mujer</Nav.Link>
            <Nav.Link href="#link">Niños</Nav.Link>
            <NavDropdown title="Hot Sale" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                30% de descuento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                50% de descuento
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
