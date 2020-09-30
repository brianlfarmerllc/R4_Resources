import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./experience.scss";
import Cards from "../Cards";
import JobsDB from "../../data/job-cards.json";

const Experience = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  let history = useHistory();

  function goContacts() {
    history.push("/contact");
  }

  return (
    <section className="experience">
      <div className="top-text">
        <h1>R4 Resources</h1>
        <h5>Responsive - Resourceful - Reliable - Reasonable</h5>
        <p>
          At R4 Resources we strive to provide top level service and talent to
          our clients with professionals skilled in the most in-demand software
          and web technologies.
        </p>
        <h3>Top Job Catagories</h3>
      </div>
      <div className="job-cards-container">
        {JobsDB.map((job, index) => (
          <div key={index}>
            <Cards
              image={job.image}
              alt={job.alt}
              title={job.title}
              text={job.text}
              goContacts={goContacts}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
