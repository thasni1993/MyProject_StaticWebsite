import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import phone from "./images/phone.png";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header-section">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" width={70} height={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavbarBrand className="navbar-header"><h1>Special 10</h1></NavbarBrand>
            </Nav>
            
              <Nav><img src={phone} alt="u" width={25} height={25} style={{margin:"5px"}}/><Nav.Link href="tel:9809459729">+91 8593820942</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
