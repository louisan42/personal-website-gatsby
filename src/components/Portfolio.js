import React from "react";
import { Badge,Card,Image, Row, Col } from "react-bootstrap";
import { SiBuildkite } from 'react-icons/si'

const cardData = [
    {
        src: '../../images/abn_mock.png',
        name: 'LOCATION',
        tools:['handlebars','bootstrap','expressjs','j-query','mongo-atlas'],
        address: 'https://pristine-death-valley-11072.herokuapp.com/'
    },
    {
        src: '../../images/jam.png',
        name: 'JAMMING',
        tools:['react','spotify api'],
        address: 'https://wejamm.surge.sh/'
    },
    {
        src: '../../images/sen_music.png',
        name: 'SENECA MUSIC',
        tools:['angular','angular-material'],
        address: 'https://a4-seneca-music.vercel.app/'
    },
    {
        src: '../../images/abn_mock.png',
        name: '',
        tools:['handlebars','bootstrap','expressjs','j-query'],
        address: 'https://pristine-death-valley-11072.herokuapp.com/'
    }
]
const bgColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];



const Portfolio = () => {

    return (
      <Row className="u-container g-3" xs={1} md={3}>
        {cardData.map((card, index) => (
          <Col>
            <Card key={index} className=" u-card">
              <Card.Link href={card.address} target="_blank" rel="noreferrer">
                  <Card.Img src={card.src} fluid className="card-img" />
                  <Card.ImgOverlay className="content text-center">
                  <Card.Title className="fw-bold">{card.name}</Card.Title>
                  <Card.Subtitle>
                    <SiBuildkite  className="fs-1"/> Build tools
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
                  </Card.ImgOverlay>
                
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    );

}

export default Portfolio;