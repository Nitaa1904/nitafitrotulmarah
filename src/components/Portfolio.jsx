import React from "react";

const projects = [
  {
    title: "📝 Note Apps",
    url: "https://s.id/fenoteapps",
    description:
      "A productivity app to manage notes efficiently using React.js.",
  },
  {
    title: "📃 Postify",
    url: "https://s.id/postify",
    description: "A simple blog posting web platform built with Laravel.",
  },
  {
    title: "🍽️ Web Pringgading",
    url: "https://s.id/29eqn",
    description: "Restaurant website with digital menu and booking system.",
  },
  {
    title: "✈️ AEROLOKA",
    url: "https://bit.ly/aeroloka",
    description: "Ticket booking platform with responsive front-end in React.",
  },
  {
    title: "💻 DISA",
    url: "https://bit.ly/disaweb",
    description:
      "Dashboard for startup metrics built with Tailwind & Chart.js.",
  },
  {
    title: "🏡 Koperasi Desa (BRI Project)",
    url: "https://s.id/29epv",
    description: "Village cooperative system with Golang backend & REST API.",
  },
];

const Portfolio = () => (
  <section
    id="projects"
    className="py-5 mb-5"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
    }}
  >
    <div className="container text-center text-light">
      <h2 className="fw-bold mb-4" style={{ color: "#4f8cff" }}>
        🚀 Portfolio Projects
      </h2>

      <div className="row justify-content-center g-4">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div
              className="p-4 rounded-4 shadow h-100"
              style={{
                background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
                border: "1px solid #4f8cff33",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 0 12px #4f8cff55";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h5 className="fw-bold text-light mb-2">{project.title}</h5>
              <p className="text-secondary small mb-3">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm px-3 py-1 rounded-pill"
                style={{
                  backgroundColor: "rgba(79, 140, 255, 0.1)",
                  color: "#4f8cff",
                  border: "1px solid #4f8cff55",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
