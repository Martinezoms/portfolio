import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (name !== "" && email !== "" && message !== "") {
      setLoading(true);
      const contact = {
        _type: "contact",
        name,
        email,
        message
      };

      client.create(contact);
      setLoading(false);
      setIsFormSubmitted(true);
    } else {
      setError(true);
    }
  };

  return (
    <section className="app__footer">
      <h2 className="head-text">Ofcourse I Didn't Forget My Contacts & Resume 👀</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:martinezoms15@gmail.com" target="_blank" rel="noreferrer" className="p-text">
            martinezoms15@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +234 (905) 5366-8047" target="_blank" rel="noreferrer" className="p-text">
            +234 (905) 5366-8047
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.resume} alt="resume" />
          <a
            href="https://docs.google.com/document/d/14eo1bOESu3mwdCwech6vJXdilfJWjHc_3JnxnXaclFw/edit#"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            My Resume
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="p-text"
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="p-text"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" required name="message" onChange={handleChange} />
          </div>
          {error && (
            <p className="p-text" style={{ color: "red", marginTop: 3 }}>
              Details incomplete
            </p>
          )}

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </div>
      ) : (
        <h3 className="head-text">Thank you for getting in touch</h3>
      )}
    </section>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
