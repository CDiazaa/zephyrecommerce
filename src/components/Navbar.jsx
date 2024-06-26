import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import getAllCategories from "../services/productsAllCategories";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res.data);
    }).catch((error) => {
      console.error(error);
    });
  })

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Zephyr</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombre</Nav.Link>
            <Nav.Link href="#link">Mujer</Nav.Link>
            <Nav.Link href="#link">Niños</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
