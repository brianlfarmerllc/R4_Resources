import React from "react";
import "./home.scss";
import main from "../../assets/main.png";
import main80 from "../../assets/main80.png"
import main65 from "../../assets/main65.png"
import main50 from "../../assets/main50.png"
// import laptop from "../../assets/laptop.png";

const Home = () => {
  return (
    <section className="home">
      <div className="showcase">
        <div className="title">
          <h1>R4 Resources</h1>
          <h5>Responsive - Resourceful - Reliable - Reasonable</h5>
          <p>
            R4 Resources is a dynamic entrepreneurial company focused on
            providing responsive and reliable high quality consulting and
            permanent placement services to medium and large size corporate and
            non-profit clients.
          </p>
          <button>Learn More</button>
        </div>
        <img className="mainImage" src={main}  alt="main vector graphic showing people working" />
      </div>
    </section>
  );
};

export default Home;
