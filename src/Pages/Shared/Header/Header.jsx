import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Withour Fear Or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM  YYYY")}</p>
      </div>
      <div className="d-flex bg-secondary rounded text-white">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          The Game of Thrones prequel, set almost 200 years before the events of
          the original series, was commissioned for a follow-up season shortly
          after its successful debut in 2021.
        </Marquee>
      </div>
      <div className="mt-2 rounded">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
