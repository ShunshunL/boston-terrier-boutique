import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/boston_terrier.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Boston Terrier Boutique Logo"
            />{" "}
            Boston Terrier Boutique
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
