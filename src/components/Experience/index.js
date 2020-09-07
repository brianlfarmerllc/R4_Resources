import React from "react";
import "./experience.scss";
import Cards from '../Cards';
import JobsDB from "../../data/job-cards.json";

const Experience = () => {
  return (
    <section className="experience">
      <div className="top-text">
        <h1>R4 Resources</h1>
        <h5>Responsive - Resourceful - Reliable - Reasonable</h5>
        <p>
          At R4 Rescources we strive to provide top level services in Microsoft
          environments with a primary focus in Java and .Net technologies.
        </p>
      </div>
      <div className="job-cards-container">
          {JobsDB.map((job, index) => (
              
              <div key={index}>
                  <Cards
              image={job.image}
              alt={job.alt}
              title={job.title}
              text={job.text} 
              />
              </div>
          ))}
       
      </div>
    </section>
  );
};

export default Experience;
