import React,{ lazy, Suspense } from "react";
import { Helmet } from 'react-helmet'
import { Container,Spinner } from "react-bootstrap";
import {MdBusinessCenter} from 'react-icons/md'
const AboutMe = lazy(()=> import("../components/About-me"));
const Hero = lazy(()=>import("../components/Hero"));
const NavBar = lazy(()=>import("../components/NavBar"));
const Skills = lazy(()=>import("../components/Skills"));
const Portfolio = lazy(()=>import("../components/Portfolio"));
const Footer = lazy(()=>import("../components/Footer"));
const Contact = lazy(()=>import("../components/Contact"));

const renderLoader =()=> <Spinner animation="border" role="status" className="position-absolute top-50 start-50 translate-middle">
<span className="visually-hidden">Loading...</span>
</Spinner>










const IndexPage = () => {
  
  return (
    <>
      <Helmet>
        <title>Louis' Portfolio</title>
      </Helmet>
      <Suspense fallback={renderLoader()}>
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
      </Suspense>
    </>
  );
};

export default IndexPage;
