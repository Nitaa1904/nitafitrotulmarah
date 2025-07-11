import React from "react";

const projects = [
  { title: "🚀 Note Apps", url: "https://s.id/fenoteapps" },
  { title: "📝 Postify", url: "https://s.id/postify" },
  { title: "🍽 Web Pringgading", url: "https://s.id/29eqn" },
  { title: "✈️ AEROLOKA", url: "https://bit.ly/aeroloka" },
  { title: "💻 DISA", url: "https://bit.ly/disaweb" },
  { title: "📄 SRS Document", url: "https://bit.ly/DocSRS" },
  { title: "✅ Software Testing Document", url: "https://s.id/29eq6" },
  { title: "🎨 EduPlanner UI Design", url: "https://s.id/29eqF" },
  { title: "📝 NoteQU App", url: "https://bit.ly/42fFpoK" },
  { title: "🌐 Nita's Portfolio", url: "https://s.id/29epv" },
];

const Projects = () => (
  <section id="projects" className="py-5 mb-5">
    <div className="container text-center text-light">
      <h2 className="fw-bold mb-5" style={{ color: "#4f8cff" }}>
        Portfolio of Projects & SE Works
      </h2>
      <div className="row justify-content-center g-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block p-4 rounded-4 text-decoration-none text-light shadow h-100"
              style={{
                background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
                border: "1px solid #4f8cff33",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 20px #4f8cffaa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                  filter: "drop-shadow(0 0 2px #4f8cff88)",
                }}
              >
                {proj.title.split(" ")[0]}
              </div>
              <h5 className="fw-bold mb-1">
                {proj.title.replace(/^[^ ]+ /, "")}
              </h5>
              <p className="small text-secondary mb-0">Click to explore ↗</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
