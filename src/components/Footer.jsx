import React from "react";

const Footer = () => (
  <footer
    id="contact"
    className="py-5 mt-5 text-center text-light"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
    }}
  >
    <p className="mb-3">&copy; 2024 Nita Fitrotul Mar'ah</p>
    <div className="d-flex justify-content-center gap-3">
      <a
        href="https://github.com/Nitaa1904"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        style={{
          color: "#4f8cff",
          fontSize: "1.5rem",
          transition: "color 0.3s ease, text-shadow 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.textShadow = "0 0 10px #4f8cff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = "#4f8cff";
          e.currentTarget.style.textShadow = "none";
        }}
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/nitafitrotul"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        style={{
          color: "#4f8cff",
          fontSize: "1.5rem",
          transition: "color 0.3s ease, text-shadow 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.textShadow = "0 0 10px #4f8cff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = "#4f8cff";
          e.currentTarget.style.textShadow = "none";
        }}
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="mailto:nitafitrotul1904@gmail.com"
        className="text-decoration-none"
        style={{
          color: "#4f8cff",
          fontSize: "1.5rem",
          transition: "color 0.3s ease, text-shadow 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.textShadow = "0 0 10px #4f8cff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = "#4f8cff";
          e.currentTarget.style.textShadow = "none";
        }}
      >
        <i className="bi bi-envelope-fill"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
