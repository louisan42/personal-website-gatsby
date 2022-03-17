import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const SITE_KEY = process.env.GATSBY_SITE_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );

    if (success == null) {
      setSuccessMessage(<div />);
    } else if (success) {
      setSuccessMessage(
        <div className="text-success">
          Thank you! Your message has been sent.
        </div>
      );

      setName("");
      setEmail("");
      setMessage("");
      setValidated(false);
    } else {
      setSuccessMessage(
        <div className="text-danger">
          Unable to send message. Please fix errors then try again.
        </div>
      );
    }
  }, [success, validated]);

  const handleOnClick = (e) => {
    e.preventDefault();
    setValidated(true);

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "validate_captcha" })
        .then((token) => {
          if (validated) {
            submitData(token);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const submitData = (token) => {
    fetch("https://lou-general-api.herokuapp.com/api/contact-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        "g-recaptcha-response": token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(data.success);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section
      className="text-center"
      id="contact-me"
      style={{ paddingTop: "10%" }}
    >
      <h4 className=" about text-center p-2 border border-dark border-5">
        CONTACT
      </h4>
      <Form
        style={{ paddingTop: "10px" }}
        name="form"
        className="form-container needs-validation"
        validated={validated}
        noValidate
      >
        <Form.Group className="form-floating mb-1">
          <Form.Control
            className="u-input"
            type="text"
            placeholder="Enter your Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Label>Name*</Form.Label>
          <Form.Control.Feedback type="invalid">
            {" "}
            Please enter a name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-floating mb-1">
          <Form.Control
            className="u-input"
            type="email"
            placeholder="Enter a valid email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Label>Email*</Form.Label>
          <Form.Control.Feedback type="invalid">
            {" "}
            Email is invalid
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-floating mb-1">
          <Form.Control
            as="textarea"
            className="u-input"
            placeholder="Enter your message"
            style={{ height: "150px" }}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Form.Label htmlFor="message" className="">
            Message*
          </Form.Label>
          <Form.Control.Feedback type="invalid">
            {" "}
            Enter a message
          </Form.Control.Feedback>
        </Form.Group>
        <div>
          <input type="submit" value="SUBMIT" onClick={handleOnClick} />
        </div>
        {successMessage}

        <input
          type="hidden"
          id="g-recaptcha-response"
          name="g-recaptcha-response"
        />
        <input type="hidden" name="action" value="validate_captcha" />
      </Form>
    </section>
  );
};
export default Contact;
