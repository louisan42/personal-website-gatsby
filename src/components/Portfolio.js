import React from "react";
import { Badge, Card, Row, Col } from "react-bootstrap";
import { SiBuildkite } from "react-icons/si";

const cardData = [
  {
    src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447219/fortfolio_website/abn_mock_jycanj.png",
    name: "LOCATION",
    tools: ["handlebars", "bootstrap", "expressjs", "j-query", "mongo-atlas"],
    address: "https://pristine-death-valley-11072.herokuapp.com/",
  },
  {
    src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto,e_sharpen/v1647447239/fortfolio_website/jam_juz6wz.png",
    name: "JAMMING",
    tools: ["react", "spotify api"],
    address: "https://wejamm.surge.sh/",
  },
  {
    src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1647447240/fortfolio_website/sen_music_fupebz.png",
    name: "SENECA-X-JAMMING",
    tools: ["angular", "angular-material", "spotify-api"],
    address: "https://seneca-x-jamming.vercel.app/",
    logInInfo: "username: tester, password: password1234",
  },
  {
    src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1648233700/fortfolio_website/reddit_client_ktdikr.png",
    name: "REDDIT CLIENT",
    tools: ["react", "reddit-api", "redux"],
    address: "https://blissful-reddit-client.netlify.app/",
  },
  {
    src: "https://res.cloudinary.com/drsxgcyly/image/upload/f_auto/v1671208162/fortfolio_website/Screenshot_2022-12-16_112526_uje5f6.png",
    name: "MUSIX BIZ II",
    tools: ["C#", "ASP.NET", "Azure"],
    address: "https://lamoah-nuamah-wa-web524-a6.azurewebsites.net/",
    logInInfo: "username: admin@example.com, password: Password123!",
  },
];
const bgColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const Portfolio = () => {
  return (
    <Row className="u-container g-3" xs={1} md={3}>
      {cardData.map((card, index) => (
        <Col key={index}>
          <Card className=" u-card">
            <Card.Link
              href={card.address}
              target="_blank"
              rel="noreferrer"
              aria-label={`${card.name} link`}
            >
              <Card.Img src={card.src} className="card-img" alt={card.name} />
              <Card.ImgOverlay className="content text-center">
                <Card.Title className="fw-bold">{card.name}</Card.Title>
                <Card.Subtitle>
                  <SiBuildkite className="fs-1" /> Build tools
                </Card.Subtitle>
                {card.tools.map((tool, index) => (
                  <Badge
                    key={index}
                    pill
                    bg={bgColors[index]}
                    text="light"
                    className="m-1"
                  >
                    {tool}
                  </Badge>
                ))}
                
                {card.logInInfo && (
                  <Card.Text className="mt-3">
                    <span className="fw-bold">Login info:</span>{" "}
                    {card.logInInfo}

                  </Card.Text>
                )}
              </Card.ImgOverlay>
            </Card.Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;
