import React from "react";
import { useHistory } from "react-router-dom";
import "./home.scss";
import main from "../../assets/main.png";

const Home = () => {

  let history = useHistory();

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
          <button onClick={() => history.push("/experience")}>Learn More</button>
        </div>
        <img className="mainImage" src={main}  alt="main vector graphic showing people working" />
      </div>
    </section>
  );
};

export default Home;
