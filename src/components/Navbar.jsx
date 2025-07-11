import React from "react";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark sticky-top py-3"
    style={{
      background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
      boxShadow: "0 2px 20px rgba(79, 140, 255, 0.25)",
      borderBottom: "1px solid rgba(79,140,255,0.1)",
      backdropFilter: "blur(8px)",
    }}
  >
    <div className="container">
      {/* Logo Brand */}
      <a
        className="navbar-brand fw-bold d-flex align-items-center"
        href="#home"
        style={{
          fontSize: "1.6rem",
          color: "#4f8cff",
          textShadow: "0 0 8px rgba(79,140,255,0.6)",
        }}
      >
        <span style={{ fontSize: "1.8rem", animation: "pulse 2s infinite" }}>
          🌟
        </span>
        <span className="ms-2">Nita</span>
      </a>

      {/* Hamburger Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item, idx) => (
              <li className="nav-item" key={idx}>
                <a
                  className="nav-link px-3 fw-semibold text-uppercase"
                  href={`#${item.toLowerCase()}`}
                  style={{
                    position: "relative",
                    color: "#ccc",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#4f8cff";
                    e.currentTarget.style.textShadow =
                      "0 0 10px rgba(79,140,255,0.7)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#ccc";
                    e.currentTarget.style.textShadow = "none";
                  }}
                >
                  {item}
                  {/* Underline on hover */}
                  <span
                    className="underline"
                    style={{
                      content: "''",
                      position: "absolute",
                      left: "50%",
                      bottom: "0",
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#4f8cff",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    }}
                    onMouseOver={(e) => (e.target.style.width = "100%")}
                  />
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>

    {/* Extra Animations */}
    <style>{`
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
      }

      .nav-link:hover::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        width: 100%;
        height: 2px;
        background-color: #4f8cff;
        transform: translateX(-50%);
        border-radius: 1px;
        box-shadow: 0 0 6px rgba(79,140,255,0.8);
      }
    `}</style>
  </nav>
);

export default Navbar;
