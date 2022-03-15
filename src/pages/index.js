import * as React from "react";
import { Container, Image } from "react-bootstrap";
import AboutMe from "../components/About-me";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import {MdBusinessCenter} from 'react-icons/md'

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Container className="mb-5">
        <Hero />
      </Container>
      {/* <section className="divider position-relative">
        <Image fluid src={`../../images/it.png`} alt="IT" width="180" />
      </section> */}
      <section style={{backgroundColor: '#edf7fa'}}>
      <Container className="pt-5 pb-5" >
        <AboutMe />
        <Skills />
      </Container>
      </section>
      <section className="divider position-relative">
        {/* <Image fluid src={`../../images/it.png`} alt="IT" width="180" /> */}
        <MdBusinessCenter />
      </section>
      {/* <section>
        <Image
          src={`../../images/image12bacImg.png`}
          alt="mountain view"
          width="100%"
          className="position-absolute"
        />
        <h4 className=" about text-center p-2 border border-dark border-5 portfolio-text">
          PORTFOLIO
        </h4>
      </section> */}
      <section className=" portfolio-container w-75 u-center">
        <Portfolio />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default IndexPage;
