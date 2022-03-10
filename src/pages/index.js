import * as React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default IndexPage;
