import React from "react";
import { FaUniversity, FaLaptopCode, FaBuilding } from "react-icons/fa";

const Education = () => (
  <section
    id="education"
    className="py-5 mb-5"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
    }}
  >
    <div className="container text-center text-light">
      <h2
        className="fw-bold mb-5 text-uppercase"
        style={{ letterSpacing: "2px" }}
      >
        <span
          style={{
            borderBottom: "3px solid #4f8cff",
            paddingBottom: "5px",
          }}
        >
          My Journey
        </span>
      </h2>

      <div className="row justify-content-center">
        {/* Pendidikan */}
        <div
          className="col-12 col-md-6 col-lg-4 mb-4"
          style={{ perspective: "1000px" }}
        >
          <div
            className="p-4 rounded-4 shadow glow-card h-100"
            style={{
              background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
              border: "1px solid #4f8cff33",
              transition: "transform 0.5s, box-shadow 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px #4f8cff66";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaUniversity size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold mb-1">Telkom University Purwokerto</h5>
            <p className="mb-1 text-secondary">Software Engineering</p>
            <p className="mb-0">IPK 3.92 / 4.00</p>
          </div>
        </div>

        {/* Bootcamp */}
        <div
          className="col-12 col-md-6 col-lg-4 mb-4"
          style={{ perspective: "1000px" }}
        >
          <div
            className="p-4 rounded-4 shadow glow-card h-100"
            style={{
              background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
              border: "1px solid #4f8cff33",
              transition: "transform 0.5s, box-shadow 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px #4f8cff66";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaLaptopCode size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold mb-1">Binar Academy</h5>
            <p className="mb-1 text-secondary">Fullstack Developer Program</p>
            <p className="mb-0">Score 90</p>
          </div>
        </div>

        {/* Magang */}
        <div
          className="col-12 col-md-6 col-lg-4 mb-4"
          style={{ perspective: "1000px" }}
        >
          <div
            className="p-4 rounded-4 shadow glow-card h-100"
            style={{
              background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
              border: "1px solid #4f8cff33",
              transition: "transform 0.5s, box-shadow 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px #4f8cff66";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaBuilding size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold mb-1">PT Telkom Indonesia</h5>
            <p className="mb-1 text-secondary">
              Intern - CX Measurement & Performance
            </p>
            <p className="mb-0">Jul 2025 – Now</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
