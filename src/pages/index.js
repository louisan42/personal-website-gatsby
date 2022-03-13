import * as React from "react";
import { Container, Image } from "react-bootstrap";
import AboutMe from "../components/About-me";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Container className="mb-5">
        <Hero />
      </Container>
      <section className="divider position-relative">
        <Image
          fluid
          src={`../../images/it.png`}
          alt="IT"
          width="180"
          //height="200"
          //className="float-end"
        />
      </section>
      <Container className="mt-5 mb-5">
        <AboutMe />
        <Skills />
      </Container>
    </>
  );
};

export default IndexPage;
