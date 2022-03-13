import React from "react";
import { Card, Row } from "react-bootstrap";
import Learning from "./Learning";

const Skills = () => {
  const skills = [
    {
      src: "../../images/1051277.png",
      text: "HTML5",
    },
    {
      src: "../../images/732190.png",
      text: "CSS3",
    },
    {
      src: "../../images/5968292.png",
      text: "JAVASCRIPT",
    },
    {
      src: "../../images/919825.png",
      text: "NODEJS",
    },

    {
      src: "../../images/assets/React.svg",
      text: "REACT",
    },
    {
      src: "../../images/assets/angular.svg",
      text: "ANGULAR",
    },
    {
      src: "../../images/919854.png",
      text: "JAVA",
    },
    {
      src: "../../images/assets/cee.svg",
      text: "C",
    },
    {
      src: "../../images/6132222.png",
      text: "C++",
    },
    {
      src: "../../images/assets/mongodb.svg",
      text: "MONGODB",
    },
    {
      src: "../../images/603201.png",
      text: "ORACLE / MS SQL",
    },
  ];

  return (
    <>
      <h4 className=" about text-center p-2 border border-dark border-5">
        SKILLS
      </h4>
      <Row className="w-75 u-center g-2 pt-5" id="skills">
        {skills.map((skill, index) => (
          <Card
            style={{ width: "15rem", background: "#e5e5e5", border: "none" }}
            key={index}
          >
            <Card.Img variant="top" src={skill.src} />
            <Card.Body>
              <Card.Title className="text-center">{skill.text}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Learning />
    </>
  );
};

export default Skills;
