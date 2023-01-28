import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="mt-5">
      <Navbar fixed="bottom" bg="success" id="footer" variant="light">
        <Navbar.Brand href="#home">
          SNAPP {new Date().getFullYear()}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Partners</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
