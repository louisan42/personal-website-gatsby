import React from "react";
import{IoMailSharp} from 'react-icons/io5'
import {BsTwitter, BsLinkedin, BsChevronUp} from 'react-icons/bs'


const Footer =() => {

    return (
      <section className="position-absolute top-50 start-50 translate-middle text-center fs-3">
        <article className="mb-5">
        <a href="#">
          <BsChevronUp />
          <h6>BACK TO TOP</h6>
        </a>
        </article>
        <a href="#">
          <BsTwitter />
        </a>{" "}
        <a href="#">
          <BsLinkedin />
        </a>{" "}
        <a href="#">
          <IoMailSharp />
        </a>
      </section>
    );
}
export default Footer;