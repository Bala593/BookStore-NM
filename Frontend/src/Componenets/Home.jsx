// src/components/Navbar.js

// Home.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, } from "react-router-dom";

const Home = () => {
  return (
    <div>
    <div  style={{ backgroundColor: 'grey'}}>
      {/* Navbar */}
      <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "rgba(0, 0, 102, 0.7)" }}>
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{ color: 'white', textDecoration: "none" }}>BookStore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
              <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
              <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
</div>
  );
};

export default Home;
