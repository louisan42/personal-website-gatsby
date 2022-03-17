import * as React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

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
            <Nav className="d-flex" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/#about-me" eventKey="2">
                  About me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#skills" eventKey="3">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#portfolio" eventKey="4">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#contact-me">
                  <Button variant="dark">Contact me</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
