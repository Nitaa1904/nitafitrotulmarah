import React, { useState } from "react";

const experiences = [
  {
    title: "💼 UI/UX Designer (Intern) – Telkom Indonesia",
    date: "July 2025 – Present",
    short:
      "Designed analytic dashboards & UI components for the NPS program at Telkom DBT.",
    full: "Designed and structured user interfaces (UI) to support the CX Manager’s strategy in the Net Promoter Score (NPS) program. Responsible for creating wireframes, visual components, and insight-driven analytic dashboards to enhance digital customer experience within Telkom Digital Business & Technology (DBT).",
  },
  {
    title: "🧠 Backend Developer (Golang) – BRI Village Cooperative Project",
    date: "May 2025 – Present",
    short:
      "Developed backend services using Golang, JWT, role-based middleware, and rule management.",
    full: "Built backend services using Golang for a village cooperative system initiated by Bank Rakyat Indonesia. Key features include deposit & loan rule management, JWT authentication, role-based middleware (super admin), as well as filter and pagination-based search. RESTful APIs ready for modern frontend integration.",
  },
  {
    title: "✈️ Front-End Developer (React.js) – AEROLOKA Project",
    date: "Nov – Dec 2024",
    short:
      "Built ticket booking UI & functionality for AEROLOKA using React.js.",
    full: "Developed a ticket booking platform called AEROLOKA using React.js. Responsible for designing the booking interface, integrating search result pages, and implementing responsive layouts optimized for both desktop and mobile with real-time performance.",
  },
  {
    title: "🚀 WordPress Developer – DIGIMARLY",
    date: "Jul – Oct 2024",
    short:
      "Built dynamic company websites with WordPress, collaborating on UI and SEO.",
    full: "Created and maintained company websites using WordPress. Designed dynamic page structures, integrated themes & plugins, and collaborated on UI design and SEO optimization to strengthen DIGIMARLY’s digital presence.",
  },
  {
    title: "🏫 TOEFL Test Assistant – Language Center ITTP",
    date: "Jun 2024 – Jun 2025",
    short:
      "Supervised campus TOEFL test executions and assisted test participants.",
    full: "Supervised TOEFL test execution at Telkom University Purwokerto, ensuring test rules were followed, providing technical guidance, and compiling administrative reports on test sessions and results for the campus Language Center.",
  },
  {
    title: "💻 OS Practicum Assistant – Operating Systems Course",
    date: "Sep – Dec 2024",
    short:
      "Guided Red Hat Linux lab sessions, virtualization, and command-line troubleshooting.",
    full: "Assisted Information Systems students in Operating Systems lab sessions, focusing on Red Hat Linux operation, VirtualBox installation, command-line troubleshooting, and system configuration assessments.",
  },
  {
    title: "🖥 Web Development Lecturer Assistant – Laravel Course",
    date: "Feb – Jun 2025",
    short:
      "Taught Laravel fundamentals and final projects for two Information Systems classes.",
    full: "Assisted in teaching the Web Application Development course, covering Laravel framework fundamentals. Delivered material on routing, MVC, CRUD operations, and guided students in completing their final projects using Laravel.",
  },
];

const Internship = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="position-relative p-4 mb-4 rounded-4 shadow"
          style={{
            background: "#262642",
            border: "1px solid #4f8cff33",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 15px #4f8cff55";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Date on top-right */}
          <small
            className="position-absolute text-secondary"
            style={{ top: "12px", right: "16px", fontSize: "0.75rem" }}
          >
            {exp.date}
          </small>

          <h5 className="fw-bold mb-2 pe-5">{exp.title}</h5>

          <p className="text-light mb-2">
            {expandedIndex === index ? exp.full : exp.short}
          </p>

          <button
            className="btn btn-sm px-3 py-1 rounded-pill"
            style={{
              backgroundColor: "rgba(79, 140, 255, 0.1)",
              color: "#4f8cff",
              border: "1px solid #4f8cff55",
              fontSize: "0.85rem",
            }}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {expandedIndex === index ? "Close" : "Read More →"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Internship;
