import * as React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";
//import logo from '../../static/images/default.png';

const NavBar = () => {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={`https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447268/fortfolio_website/default_dhtrha.png`}
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
              <AnchorLink to="/#about-me">
                <Nav.Item>About me</Nav.Item>
              </AnchorLink>
              <AnchorLink to="/#skills">
                <Nav.Item href="#skills">Skills</Nav.Item>
              </AnchorLink>
              <AnchorLink to="/#portfolio">
                <Nav.Item href="#portfolio">Portfolio</Nav.Item>
              </AnchorLink>
              <AnchorLink to="/#contact-me">
                <Nav.Item href="#contact-me">
                  <Button variant="dark">Contact me</Button>
                </Nav.Item>
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
