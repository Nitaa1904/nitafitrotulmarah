import React, { useState } from "react";

const experiences = [
  {
    title: "💼 UI/UX Designer (Intern) – Telkom Indonesia",
    date: "July 2025 – Present",
    short:
      "Designed analytic dashboards & UI components for the NPS program at Telkom DBT.",
    full: "Designed and structured user interfaces (UI) to support the CX Manager’s strategy in the Net Promoter Score (NPS) program. Responsible for creating wireframes, visual components, and insight-driven analytic dashboards to enhance digital customer experience within Telkom Digital Business & Technology (DBT).",
    projectLink: "https://github.com/your-backend-project",
    certificateLink: "https://link-to-your-certificate.com",
  },
  {
    title: "🧠 Backend Developer (Golang) – BRI Village Cooperative Project",
    date: "May 2025 – Present",
    short:
      "Developed backend services using Golang, JWT, role-based middleware, and rule management.",
    full: "Built backend services using Golang for a village cooperative system initiated by Bank Rakyat Indonesia. Key features include deposit & loan rule management, JWT authentication, role-based middleware (super admin), as well as filter and pagination-based search. RESTful APIs ready for modern frontend integration.",
    projectLink: "https://github.com/yudhaislamisulistya/simpan-pinjam-kopdedi",
    certificateLink: "https://link-to-your-certificate.com",
  },
  {
    title: "✈️ Front-End Developer (React.js) – AEROLOKA Project",
    date: "Nov – Dec 2024",
    short:
      "Built ticket booking UI & functionality for AEROLOKA using React.js.",
    full: "Developed a ticket booking platform called AEROLOKA using React.js. Responsible for designing the booking interface, integrating search result pages, and implementing responsive layouts optimized for both desktop and mobile with real-time performance.",
    projectLink:
      "https://github.com/Nitaa1904/Frontend-Aeroloka-FinalProject-KM7",
    certificateLink:
      "https://drive.google.com/file/d/1edkB9EfeuX2jgbod8fKmlDW6LlOMSDnf/view?usp=drive_link",
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
    certificateLink:
      "https://drive.google.com/file/d/16kczXtLhZbCsm4qJFlUkZnOie6HtvG2W/view?usp=drive_link",
  },
  {
    title: "🖥 Web Development Lecturer Assistant – Laravel Course",
    date: "Feb – Jun 2025",
    short:
      "Taught Laravel fundamentals and final projects for two Information Systems classes.",
    full: "Assisted in teaching the Web Application Development course, covering Laravel framework fundamentals. Delivered material on routing, MVC, CRUD operations, and guided students in completing their final projects using Laravel.",
    projectLink:
      "https://github.com/Nitaa1904/Dashboard_Laravel_Praktikum_SI_PAW",
    certificateLink:
      "https://drive.google.com/file/d/13T6FJ3W_lpVH8yGNT_v7lM0nQE7Ao828/view?usp=drive_link",
  },
];

const Internship = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="p-3 mb-3 rounded-4 shadow"
          style={{
            background: "#262642",
            border: "1px solid #4f8cff33",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          }}
          onClick={() => setSelectedExp(exp)}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 14px #4f8cff44";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 text-light">{exp.title}</h6>
            <small className="text-secondary" style={{ fontSize: "0.75rem" }}>
              {exp.date}
            </small>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {selectedExp && (
        <div
          className="centered-modal text-light popup-content"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="text-light p-4 rounded-4 shadow"
            style={{
              background: "linear-gradient(135deg, #1a1a33, #202040)",
              border: "1px solid #4f8cff33",
              animation: "fadeIn 0.3s ease-in-out",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>
              {`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}
            </style>

            <button
              className="btn btn-sm btn-outline-light position-absolute"
              style={{ top: "10px", right: "10px" }}
              onClick={() => setSelectedExp(null)}
            >
              ✖
            </button>

            <h5 className="fw-bold mb-2" style={{ color: "#4f8cff" }}>
              {selectedExp.title}
            </h5>
            <p className="text-secondary mb-3">{selectedExp.date}</p>
            <p>{selectedExp.full}</p>

            <div className="d-flex gap-2 flex-wrap mt-2">
              {selectedExp.projectLink && (
                <a
                  href={selectedExp.projectLink}
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 View Project
                </a>
              )}
              {selectedExp.certificateLink && (
                <a
                  href={selectedExp.certificateLink}
                  className="btn btn-outline-info btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 View Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internship;
