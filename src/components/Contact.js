import React from "react";
import { Form } from "react-bootstrap";





const Contact = () => {
    
    return(

        <section className="text-center" id="contact-me" style={{paddingTop:"10%"}}>
            <h4 className=" about text-center p-2 border border-dark border-5">
          CONTACT
        </h4>
        <form action="#" method="POST" style={{padding: '10px'} } name="form" className="form-container">
            <div className="form-floating mb-1">
              <input className="u-input form-control" type="text" placeholder="Enter your Name" id="name" name="name" required="is-invalid" />
              <label for="name" className="">Name*</label>
            </div>
            <div className="form-floating mb-1">
              <input className="u-input form-control" type="email" placeholder="Enter a valid email address" id="email" name="email" required />
              <label for="email" className="" >Email*</label>
            </div>
            <div className="form-floating mb-1">
              <textarea className="u-input form-control" placeholder="Enter your message" style={{height:'150px'}} id="message" name="message" required></textarea>
              <label for="message" className="" >Message*</label>
            </div>
            <div>
              <input type="submit" value="SUBMIT" />
            </div>
            <div className="text-success"> Thank you! Your message has been sent. </div>
            <div className="text-danger"> Unable to send your message. Please fix errors then try again. </div>
            <input type="hidden" value="" name="recaptchaResponse" />
          </form>
        </section>
    )
}

export default Contact;