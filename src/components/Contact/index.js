import React from "react";
import "./contact.scss";
import logo from "../../assets/R4 80.png";

const Contact = () => {
  return (
    <section className="contact">
      <div className="top-text">
        <h1>R4 Resources</h1>
        <h5>Responsive - Resourceful - Reliable - Reasonable</h5>
      </div>
      <div className="contact-form">
        <h2>Heres A Great Place To Start</h2>
        <img className="logo" src={logo} alt="R4 Resources Logo" />
        <form action="">
          <div className="question">
            <h3>I'm Looking For</h3>
            <select name="contactType">
              <option value="">Answers to General Questions</option>
              <option value="">Talented Technology Professionals</option>
              <option value="">Opprotunities With A Great Company</option>
            </select>
          </div>
          <div className="fullname">
            <input
              type="text"
              className="first"
              placeholder="First Name"
              name="first"
            />
            <input
              type="text"
              className="last"
              placeholder="Last Name"
              name="last"
            />
          </div>
          <div className="info">
            <input
              type="tel"
              className="phone"
              placeholder="Phone Number"
              name="email"
            />
            <input
              type="email"
              className="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              rows="6"
              placeholder="I'd Like To Know More About..."
            ></textarea>
          </div>
          <div className="send"></div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
