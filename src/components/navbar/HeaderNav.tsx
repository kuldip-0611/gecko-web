import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoImage from "../../assets/logo.png";
import "./headerNav.css";
import contactUs from "../../assets/contactUs.png";

const HeaderNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImage}
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="My App Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services" className="services-text pe-5">
              <b>Services</b>
            </Nav.Link>
            <Nav.Link href="#aboutUs" className="services-text pe-5">
              About us
            </Nav.Link>
            <Nav.Link href="#caseStudeies" className="services-text pe-5">
              Case Studies
            </Nav.Link>

            <Container className="contact-us-container">
              <img
                src={contactUs}
                width="80"
                height="40"
                className="mt-2"
                alt="My App Logo"
              />
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
