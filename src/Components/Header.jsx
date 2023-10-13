import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand className="fs-5 fw-bolder">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
            {""} Media Player
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
