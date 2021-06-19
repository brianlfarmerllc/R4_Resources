import React, { useState, useEffect } from "react";
import logo from "../../assets/R4 80.png";

const Contact = () => {
  const [form, setForm] = useState({});
  const [contactType, setContactType] = useState({ type: "general questions" });
  const [type, setType] = useState(null);
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("Upload Your Resume (optional)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleChange(e) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleContactType(e) {
    const { value } = e.target;
    setContactType({ type: value });

    switch (value) {
      case "general questions":
        setType(null);
        break;
      case "company contact":
        setType(
          <div className="company-name">
            <input
              type="text"
              className="company"
              placeholder="Company Name (optional)"
              name="company"
              onChange={handleChange}
            />
          </div>
        );
        break;
      case "employee contact":
        setType(null);
        break;

      default:
        setType(null);
        break;
    }
  }

  function seeFile(e) {
    const { files, name } = e.target;
    if (files[0] === undefined) {
      return;
    } else {
      setFileName(files[0].name);
      setFile({ [name]: files[0] });
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
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="question">
            <h3>I'm Looking For</h3>
            <select name="contactType" onChange={handleContactType}>
              <option value="general question">
                Answers to General Questions
              </option>
              <option value="company contact">
                Talented Technology Professionals
              </option>
              <option value="employee contact">
                Opportunities With A Great Company
              </option>
            </select>
          </div>
          <div className="resume">
            <input
              type="file"
              id="uglybutton"
              onChange={seeFile}
              name="resume"
            />

            <label htmlFor="uglybutton" id="uploadText">
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
              onChange={handleChange}
            />
            <input
              type="text"
              className="last"
              placeholder="* Last Name"
              name="last"
              onChange={handleChange}
            />
          </div>
          <div className="info">
            <input
              type="tel"
              className="phone"
              placeholder="* Phone Number"
              name="phone"
              onChange={handleChange}
            />
            <input
              type="email"
              className="email"
              placeholder="* Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              rows="6"
              placeholder="* I'd Like To Know More About..."
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="send">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
