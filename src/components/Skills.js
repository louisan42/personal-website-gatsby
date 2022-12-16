import React from "react";
import { Card, Row } from "react-bootstrap";
import Learning from "./Learning";

const Skills = () => {
  const skills = [
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447217/fortfolio_website/1051277_prheww.png",
      text: "HTML5",
    },
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447218/fortfolio_website/732190_twjsic.png",
      text: "CSS3",
    },
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447217/fortfolio_website/5968292_lseyg1.png",
      text: "JAVASCRIPT",
    },
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447218/fortfolio_website/919825_dez3vz.png",
      text: "NODEJS",
    },

    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647448411/fortfolio_website/React_wsnsc1.svg",
      text: "REACT",
    },
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647448394/fortfolio_website/angular_ssjd2n.svg",
      text: "ANGULAR",
    },
    {
      src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447217/fortfolio_website/919854_jqtwwu.png",
      text: "JAVA",
    },
    // {
    //   src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647448405/fortfolio_website/cee_xx1exz.svg",
    //   text: "C",
    // },
    // {
    //   src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447217/fortfolio_website/6132222_wjd5ja.png",
    //   text: "C++",
    // },
    // {
    //   src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647448411/fortfolio_website/mongodb_o5trkp.svg",
    //   text: "MONGODB",
    // },
    // {
    //   src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447218/fortfolio_website/603201_jczngk.png",
    //   text: "ORACLE / MS SQL",
    // },
  ];

  return (
    <>
      <h4 className=" about text-center p-2 border border-dark border-5" id="skills">
        SKILLS
      </h4>
      <Row className="w-75 u-center g-1 pt-5" >
        {skills.map((skill, index) => (
          <Card
            style={{ width: "12rem", background: "inherit", border: "none" }}
            key={index}
          >
            <Card.Img className="img-fluid" variant="top" src={skill.src} alt="skill cards"/>
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
