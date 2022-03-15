import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h4 className=" about text-center p-2 border border-dark border-5">
        ABOUT ME
      </h4>
      <Row>
        <p className="text-center w-50 u-center lh-base">
          I am a curious person who loves to learn and explore. I have been
          working as a telecommunications technician for 5 years and can't find
          anything more fulfilling than building things, fixing things, and
          learning new technologies. I am currently enrolled in Seneca College's{" "}
          <a
            href="https://www.senecacollege.ca/programs/fulltime/CPA.html"
            target="_blank"
            rel="noreferrer"
            aria-label="SSDS web link"
            className="text-reset fw-bold"
          >
            Computer Programming and Analysis
          </a>{" "}
          program. I enjoy playing video games, watching soccer, and spending
          time with my family. I love to code and I'm not afraid to ask for help
          when I need it
        </p>
      </Row>
      <Row className="w-75 u-center" xs={1} sm={2}>
        <Col className="mt-5">
          <Image
            fluid
            src={`../../images/img_dev.png`}
            alt="authors picture"
            //width="582"
            //height="582"
          />
          <span className="fs-5 fw-bold">DEVELOPEMENT</span>
          <p className="p-3">
            I can develope a fully functional website based on your
            specifications. I can also develope console softwares with languages
            that I'm familiar with. You dont have a graphic template? No
            worries, I work with great graphic designers to bring your ideas to
            life.
          </p>
        </Col>
        <Col className="mt-5">
          <Image
            fluid
            src={`../../images/maintenance--v31.png`}
            alt="authors picture"
            //width="582"
            //height="582"
          />
          <span className="fs-5 fw-bold">MAINTENANCE</span>
          <p className="p-3">
          I can debug your projects for you. I can also revisit existing projects to keep them up to date.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
