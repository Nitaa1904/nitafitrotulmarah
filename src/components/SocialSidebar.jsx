import React from "react";

const SocialSidebar = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      zIndex: 1000,
      background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
      borderRadius: "12px",
      padding: "10px",
      boxShadow: "0 0 10px rgba(79, 140, 255, 0.3)",
    }}
  >
    <div className="d-flex flex-column align-items-center gap-3">
      <a href="https://github.com/Nitaa1904" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
          alt="GitHub"
          width="28"
          height="28"
          style={{ filter: "invert(1)", transition: "transform 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      <a
        href="https://linkedin.com/in/nitafitrotul"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
          alt="LinkedIn"
          width="28"
          height="28"
          style={{ filter: "invert(1)", transition: "transform 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      <a href="mailto:nitafitrotul1904@gmail.com">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
          alt="Email"
          width="28"
          height="28"
          style={{ filter: "invert(1)", transition: "transform 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
      <a href="https://wa.me/6288239561942" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
          alt="WhatsApp"
          width="28"
          height="28"
          style={{ filter: "invert(1)", transition: "transform 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
    </div>
  </div>
);

export default SocialSidebar;
