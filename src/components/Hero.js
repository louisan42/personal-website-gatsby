import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {MdAlternateEmail} from 'react-icons/md'
import { BsGithub,BsLinkedin} from 'react-icons/bs'

const Hero = () => {
  return (
    <>
      <Row className="hero">
        <Col className="p-5 text-center">
          <p className="fs-2">Hi, I'm</p>
          <h1>
            Louis <br /> Amoah-Nuamah
          </h1>
          <p className="fs-5">Full-Stack Web Developer / Software Developer</p>
          <Container className="d-flex justify-content-between w-50 fs-1">
          <a href="mailto:louis.amoah@outlook.com" aria-label="mail" target="_blank" rel="noreferrer"><MdAlternateEmail  className="bg-gray"/></a>
          <a href="https://github.com/louisan42" aria-label="github" target="_blank" rel="noreferrer"><BsGithub className="bg-gray" /></a>
          <a href="https://www.linkedin.com/in/louis-amoah-nuamah-ba1768129/" aria-label="linkedin" target="_blank" rel="noreferrer"><BsLinkedin className="bg-gray" /></a>
          </Container>
        </Col>
        <Col className="p-5">
          <Image
            fluid
            src={`../../images/my_pic.png`}
            alt="authors picture"
            width="582"
            height="582"
          />
        </Col>
      </Row>
    </>
  );
};

export default Hero;
