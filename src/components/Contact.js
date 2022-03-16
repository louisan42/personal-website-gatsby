import React, { useEffect, useState } from "react";

const SITE_KEY = process.env.SITE_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

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
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "validate_captcha" })
        .then((token) => {
          submitData(token);
        });
    });
  }
  
    const submitData = (token) => {
      fetch("https://lou-general-purpose-api.vercel.app/api/contact-me", {
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
        .then((res) => {
          setSuccess(res.success);
          if(success){
            setName("");
            setEmail("");
            setMessage("")
          }
        })
        .catch(e => {
          console.log(e)
        });
    };

    let successMessage;

    if(success === null){
      successMessage = <div />
    }
    else if(success) {
      successMessage = <div className="text-success">
      Thank you! Your message has been sent.
    </div>
    } else {
      successMessage = <div className="text-danger">
      Unable to send your message. Please fix errors then try again.
    </div>
    }

    return (
      <section
        className="text-center"
        id="contact-me"
        style={{ paddingTop: "10%" }}
      >
        <h4 className=" about text-center p-2 border border-dark border-5">
          CONTACT
        </h4>
        <form
          style={{ padding: "10px" }}
          name="form"
          className="form-container"
        >
          <div className="form-floating mb-1">
            <input
              className="u-input form-control"
              type="text"
              placeholder="Enter your Name"
              id="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="">
              Name*
            </label>
          </div>
          <div className="form-floating mb-1">
            <input
              className="u-input form-control"
              type="email"
              placeholder="Enter a valid email address"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="">
              Email*
            </label>
          </div>
          <div className="form-floating mb-1">
            <textarea
              className="u-input form-control"
              placeholder="Enter your message"
              style={{ height: "150px" }}
              id="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="">
              Message*
            </label>
          </div>
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
        </form>
      </section>
    );
  };
export default Contact;
