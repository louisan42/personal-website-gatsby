import React from "react";
import{IoMailSharp} from 'react-icons/io5'
import {BsTwitter, BsLinkedin, BsChevronUp} from 'react-icons/bs'


const Footer =() => {

    return (
      <section className="position-absolute top-50 start-50 translate-middle text-center fs-3">
        <article className="mb-5">
        <a href="#home" arial-label="link to top">
          <BsChevronUp />
          <h6>BACK TO TOP</h6>
        </a>
        </article>
        <a href="https://twitter.com/louisan42" style={{padding: '20px'}} arial-labe="link to twitter">
          <BsTwitter />
        </a>
        <a href="https:/www.linkedin.com/louis-amoah-nuamah-ba1768129" style={{padding: '20px'}} arial-label="link to linkedin">
          <BsLinkedin />
        </a>
        <a href="mailto:louis.amoah@outlook.com" style={{padding: '20px'}} arial-label="link to mail">
          <IoMailSharp />
        </a>
        {/* built with love gatsby */}
        <p className="mt-3">© {new Date().getFullYear()}, Built with Gatsby</p>
        

      </section>
      

    );
}
export default Footer;