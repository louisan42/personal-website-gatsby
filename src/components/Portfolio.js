import React from "react";
import { Badge,Image } from "react-bootstrap";
import { GrTools } from 'react-icons/gr'

const cardData = [
    {
        src: '../../images/abn_mock3.png',
        name: 'Location',
        tools:['handlebars','bootstrap','expressjs','j-query'],
        address: 'https://pristine-death-valley-11072.herokuapp.com/'
    },
    {
        src: '../../images/jam.png',
        text: 'Jamming',
        tools:['react','spotify api'],
        address: 'https://wejamm.surge.sh/'
    },
    {
        src: '../../images/abn_mock3.png',
        text: '',
        tools:['handlebars','bootstrap','expressjs','j-query'],
        address: 'https://pristine-death-valley-11072.herokuapp.com/'
    },
    {
        src: '../../images/abn_mock3.png',
        text: '',
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

    return cardData.map((card, index) => (
      <div className="u-container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div
          key={index}
          className=" u-card d-flex flex-column posisition-relative"
        >
          <a href= {card.address} target="_blank" rel="noreferrer">
            <div className="imgContainer">
              <Image src={card.src} fluid className="" />
            </div>
            <div className="content">
                <h5>{card.name}</h5>
              <h6>
                <GrTools /> Build tools
              </h6>
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
            </div>
          </a>
        </div>
      </div>
    ));
}

export default Portfolio;