import React from "react";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <footer>
      <div className="copyright">
        <p className="copyright-text" style={{ textAlign: "center" }}>
          Copyright &copy; <span id="copyright">2020-{year}</span> All Rights
          Reserved by
          <a
            href="https://github.com/brianlfarmerllc"
            target="blank"
            style={{ color: "#4285F4" }}
          >
            {" "}
            BrianLFarmerLLC
          </a>
        </p>
      </div>

      <div className="media">
        <ul className="social-icons">
          <li>
            <a
              className="github"
              href="https://www.github.com/brianlfarmerllc/"
              target="blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/BrianLFarmerLLC"
              target="blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
