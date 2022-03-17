import React,{ lazy } from "react";
import { Helmet } from 'react-helmet'
import { Container } from "react-bootstrap";
import AboutMe from "../components/About-me";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import {MdBusinessCenter} from 'react-icons/md'
import Contact from "../components/Contact";





const IndexPage = () => {
  
  return (
    <>
      <Helmet>
        <title>Louis' Portfolio</title>
      </Helmet>
      <section style={{ backgroundColor: "white", paddingBottom: "10%" }}>
        <NavBar />
        <Container>
          <Hero />
        </Container>
      </section>
      <section style={{ backgroundColor: "#edf7fa" }}>
        <Container className="pt-5 pb-5" id="about-me">
          <AboutMe />
          <Skills />
        </Container>
      </section>
      <section className="divider position-relative" id="portfolio">
        <h4 className=" about text-center p-2 border border-dark border-5 portfolio-text">
          PORTFOLIO
        </h4>
        <MdBusinessCenter />
      </section>
      <section></section>
      <section className=" portfolio-container w-75 u-center pb-5">
        <Portfolio />
      </section>

      <Contact />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default IndexPage;
