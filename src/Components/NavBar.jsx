import React from "react";
import {
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home" style={{ color: "#B8DBD9" }}>
        SNAPP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ color: "#B8DBD9" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "#B8DBD9" }}>
            Product
          </Nav.Link>
        </Nav>
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" style={{ color: "#B8DBD9" }}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
