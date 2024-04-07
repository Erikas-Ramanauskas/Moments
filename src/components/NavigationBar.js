import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavigationBar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function NavigationBar() {
  return (
    <Navbar className={styles.NavigationBar} bg="light" expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height="45"></img>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
