import React, { useState } from "react";
import "./contact.scss";
import logo from "../../assets/R4 80.png";

const Contact = () => {
  const [type, setType] = useState(null);
  const [fileName, setFileName] = useState("Upload Your Resume (optional)");

  function handleChange(e) {
    const { value } = e.target;

    switch (value) {
      case "general":
        setType(null);
        setFileName("Upload Your Resume (optional)");
        break;
      case "company":
        setType(
          <div className="company-name">
            <input
              type="text"
              className="company"
              placeholder="Company Name (optional)"
              name="company"
            />
          </div>
        )
        setFileName("Upload Your Resume (optional)");
        break;
      case "employee":
        setType(null);
        setFileName("Upload Your Resume (optional)");
        break;

      default:
        setType(null);
        setFileName("Upload Your Resume (optional)");
        break;
    }
  }

  function seeFile(e) {
    const { files } = e.target;
    if (files[0] === undefined) {
      return;
    } else {
      setFileName(files[0].name);
    }
  }

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
            <select name="contactType" onChange={handleChange}>
              <option value="general">Answers to General Questions</option>
              <option value="company">Talented Technology Professionals</option>
              <option value="employee">
                Opportunities With A Great Company
              </option>
            </select>
          </div>
          <div className="resume">
            <input type="file" id="uglybutton" onChange={seeFile} name="file" />

            <label
              htmlFor="uglybutton"
              id="uploadText"
              type="text"
              name="filename"
            >
              {fileName}
            </label>
          </div>
          {type}
          <div className="fullname">
            <input
              type="text"
              className="first"
              placeholder="* First Name"
              name="first"
            />
            <input
              type="text"
              className="last"
              placeholder="* Last Name"
              name="last"
            />
          </div>
          <div className="info">
            <input
              type="tel"
              className="phone"
              placeholder="* Phone Number"
              name="email"
            />
            <input
              type="email"
              className="email"
              placeholder="* Email"
              name="email"
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              rows="6"
              placeholder="* I'd Like To Know More About..."
            ></textarea>
          </div>

          <div className="send">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
