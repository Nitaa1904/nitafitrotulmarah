import React, { useState } from "react";

const roles = [
  {
    title: "🏆 Deputy Chair – Software Engineering Student Association",
    date: "Aug 2024 – Jan 2025",
    short: "Led the planning and coordination of the 8th SE Anniversary event.",
    full: "Served as Vice Chair of the Software Engineering Student Association. Oversaw the 8th SE Anniversary celebration, contributed to strategic decisions, and coordinated cross-division programs during the organizational term.",
    image: "https://via.placeholder.com/250x170.png",
  },
  {
    title: "📝 Secretary – Software Engineering Student Association",
    date: "June 2023 – July 2024",
    short:
      "Managed organizational documents, proposals, and official correspondence.",
    full: "Handled the documentation and administrative needs of the student association. Created over 200 official letters and 7 major proposals to support internal and external programs efficiently.",
    image: "https://via.placeholder.com/250x170.png?text=Deputy+Chair",
  },
  {
    title: "🎯 General Mentor Division Staff – Satria Muda ITTP",
    date: "Jan – Dec 2024",
    short:
      "Reviewed competition proposals and assisted campus competition preparation.",
    full: "Supported the implementation of internal campus competitions. Reviewed over 100 competition proposals and coordinated mentor-participant relations to improve student competition readiness.",
    image: "https://via.placeholder.com/250x170.png?text=Deputy+Chair",
  },
  {
    title: "📚 Co-Chair of Publication – CENTIVE Seminar ITTP",
    date: "Sep – Dec 2023",
    short:
      "Managed seminar manuscripts and compiled the official proceedings book.",
    full: "Responsible for collecting, editing, and formatting more than 50 papers submitted for the CENTIVE Seminar. Oversaw the full publishing process to deliver a professional and complete final proceedings book.",
    image: "https://via.placeholder.com/250x170.png?text=Deputy+Chair",
  },
  {
    title: "🤝 Secretary – SE Berbagi (Social Service)",
    date: "Nov 2023",
    short:
      "Drafted 50+ donation letters and created the event report for a rural village.",
    full: "Acted as secretary for the SE Berbagi social service program. Drafted donation request letters, coordinated with village leadership, managed logistics, and composed the official event report for accountability and documentation.",
    image: "https://via.placeholder.com/250x170.png?text=Deputy+Chair",
  },
];

const Organizational = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div>
      {roles.map((role, index) => (
        <div
          key={index}
          className="p-3 mb-3 rounded-4 shadow"
          style={{
            background: "#262642",
            border: "1px solid #4f8cff33",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          }}
          onClick={() => setSelectedRole(role)}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 14px #4f8cff44";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 text-light">{role.title}</h6>
            <small className="text-secondary" style={{ fontSize: "0.75rem" }}>
              {role.date}
            </small>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedRole && (
        <div
          className="centered-modal text-light popup-content"
          onClick={() => setSelectedRole(null)}
        >
          <div
            className="text-light p-4 rounded-4 shadow d-flex"
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

            {/* Left side - image */}
            <div className="me-4 d-flex align-items-center">
              <img
                src={selectedRole.image}
                alt="Certificate"
                style={{
                  borderRadius: "10px",
                  maxWidth: "250px",
                  boxShadow: "0 0 12px #00000044",
                }}
              />
            </div>

            {/* Right side - text */}
            <div style={{ flex: 1 }}>
              <button
                className="btn btn-sm btn-outline-light position-absolute"
                style={{ top: "10px", right: "10px" }}
                onClick={() => setSelectedRole(null)}
              >
                ✖
              </button>

              <h5 className="fw-bold mb-2" style={{ color: "#4f8cff" }}>
                {selectedRole.title}
              </h5>
              <p className="text-secondary mb-3">{selectedRole.date}</p>
              <p>{selectedRole.full}</p>

              {selectedRole.projectLink && (
                <a
                  href={selectedRole.projectLink}
                  className="btn btn-outline-success btn-sm mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 View Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organizational;
