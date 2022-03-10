import * as React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
//import logo from '../../static/images/default.png';

const NavBar = () => {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src= {`../../images/default.png`}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="d-flex">
              <Nav.Link href="#about-me">About me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact-me">
                <Button variant="dark">Contact me</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
