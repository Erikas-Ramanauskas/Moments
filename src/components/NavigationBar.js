import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavigationBar.module.css";

function NavigationBar() {
  return (
    <Navbar className={styles.NavigationBar} bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height="45"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link className="fas fa-home">Home</Nav.Link>
            <Nav.Link className="fas fa-sign-in-alt">Sign in</Nav.Link>
            <Nav.Link className="fas fa-user-plus">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
