import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section>
      <h4 className=" about text-center p-2 border border-dark border-5">
        ABOUT ME
      </h4>
      <Row>
        <p className="text-center w-50 u-center lh-base p-5">
          As a highly curious and driven individual, I have a passion for
          learning and exploring new technologies. With five years of experience
          as a telecommunications technician, I have developed a strong skillset
          in building and fixing things. To further my knowledge and career
          growth, I enrolled in Seneca College's{" "}
          <a
            href="https://www.senecacollege.ca/programs/fulltime/CPA.html"
            target="_blank"
            rel="noreferrer"
            aria-label="SSDS web link"
            className="text-reset fw-bold"
          >
            Computer Programming and Analysis
          </a>{" "}
          program which I completed in 2022. In my free time, I enjoy playing video games, watching
          soccer, and spending time with my loved ones. I am deeply interested
          in coding and am always looking for opportunities to improve my
          skills. When faced with challenges or roadblocks, I am not afraid to
          ask for help in order to find solutions and continue learning and
          growing as a developer.
        </p>
      </Row>
      <Row className="w-75 u-center" xs={1} sm={2}>
        <Col className="mt-5">
          <Image
            fluid
            src={`https://i.imgur.com/zdBr08e.png`}
            alt="dev tool"
            //width="582"
            //height="582"
          />
          <span className="fs-5 fw-bold">DEVELOPMENT</span>
          <p className="p-3">
            As a professional web developer, I am skilled in creating and
            designing fully functional websites based on specific client
            requirements. I am proficient in a range of programming languages
            and tools, including HTML, CSS, JavaScript, C#,
            and can use these technologies to build dynamic, interactive
            websites. If a client does not have a graphic template, I work with talented graphic designers to bring their ideas
            to life. Please let me know if
            you have any further questions or if you would like more information
            on my web development and software development services.
          </p>
        </Col>
        <Col className="mt-5">
          <Image
            fluid
            src={`https://i.imgur.com/x0wk4l1.png`}
            alt="maintenance tool"
            //width="582"
            //height="582"
          />
          <span className="fs-5 fw-bold">MAINTENANCE</span>
          <p className="p-3">
            I offer debugging services to help identify and resolve issues in
            your projects. My expertise in a range of programming languages and
            tools allows me to effectively troubleshoot and fix problems,
            ensuring that your projects run smoothly and efficiently. In
            addition to debugging, I also offer maintenance services to keep
            your existing projects up to date. Whether it's adding new features,
            updating outdated code, or simply maintaining the overall
            functionality of your projects, I am here to help ensure that they
            continue to meet your needs and expectations
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutMe;
