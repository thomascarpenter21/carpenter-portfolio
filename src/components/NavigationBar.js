import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #008080;
  }
.navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hoover {
        color: black;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} style={{color: "white"}} to="/">TMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">         
          <Nav.Item>
            <Nav.Link as={Link} style={{color: "white"}} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} style={{color: "white"}} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} style={{color: "white"}} to="/skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} style={{color: "white"}} to="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} style={{color: "white"}} to="/contact">Contact</Nav.Link>
          </Nav.Item>         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
)
