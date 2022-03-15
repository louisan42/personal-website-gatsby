import React from "react";
import { Card, Row } from "react-bootstrap";

const learningCards = [
  {
    src: "../../images/5968342.png",
    name: "POSTGRESQL",
  },
  {
    src: "../../images/5969083.png",
    name: "IBM I (RPGLE/CLLE)",
  },
];

const certifications = [
    {
        src:'../../images/873107.png',
        name:'AZURE FUNDAMENTALS'            
    }
]

const Learning = () => {
  return (
    <article className="w-75 u-center">
      <h5 className="p-5 fw-bold">LEARNING:</h5>
      <Row className="w-75 g-2">
        {learningCards.map((learningCard, index) => (
          <Card
            style={{ width: "15rem", background: "inherit", border: "none" }}
            key={index}
          >
            <Card.Img variant="top" src={learningCard.src} />
            <Card.Body>
              <Card.Title className="text-center">{learningCard.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <h5 className="p-5 fw-bold">CERTIFICATION:</h5>
      <Row className="w-75 g-2">
        {certifications.map((cert, index) => (
          <Card
            style={{ width: "15rem", background: "inherit", border: "none" }}
            key={index}
          >
            <Card.Img variant="top" src={cert.src} />
            <Card.Body>
              <Card.Title className="text-center">{cert.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>

    </article>
  );
};

export default Learning;
