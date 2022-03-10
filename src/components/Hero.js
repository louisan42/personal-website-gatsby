import React from "react";
import { Row,Col } from "react-bootstrap";


const Hero = () => {

    return (
        <>
        <Row className="hero position-relative">
            <Col className="p-5 text-center">
            <p className="fs-2">Hi, I'm</p>
            <h1>Louis <br/> Amoah-Nuamah</h1>
            <p className="fs-5">Full-Stack Web Developer / Software Developer</p>
            </Col>
            <Col className="p-5">
            <h2 className="text-center">picture here</h2>
            </Col>
        </Row>
            
        </>
    )
}

export default Hero;