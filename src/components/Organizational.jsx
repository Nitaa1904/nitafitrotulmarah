import React, { useState } from "react";

const roles = [
  {
    title: "🏆 Deputy Chair – Software Engineering Student Association",
    date: "Aug 2024 – Jan 2025",
    short: "Led the planning and coordination of the 8th SE Anniversary event.",
    full: "Served as Vice Chair of the Software Engineering Student Association. Oversaw the 8th SE Anniversary celebration, contributed to strategic decisions, and coordinated cross-division programs during the organizational term.",
  },
  {
    title: "📝 Secretary – Software Engineering Student Association",
    date: "June 2023 – July 2024",
    short:
      "Managed organizational documents, proposals, and official correspondence.",
    full: "Handled the documentation and administrative needs of the student association. Created over 200 official letters and 7 major proposals to support internal and external programs efficiently.",
  },
  {
    title: "🎯 General Mentor Division Staff – Satria Muda ITTP",
    date: "Jan – Dec 2024",
    short:
      "Reviewed competition proposals and assisted campus competition preparation.",
    full: "Supported the implementation of internal campus competitions. Reviewed over 100 competition proposals and coordinated mentor-participant relations to improve student competition readiness.",
  },
  {
    title: "📚 Co-Chair of Publication – CENTIVE Seminar ITTP",
    date: "Sep – Dec 2023",
    short:
      "Managed seminar manuscripts and compiled the official proceedings book.",
    full: "Responsible for collecting, editing, and formatting more than 50 papers submitted for the CENTIVE Seminar. Oversaw the full publishing process to deliver a professional and complete final proceedings book.",
  },
  {
    title: "🤝 Secretary – SE Berbagi (Social Service)",
    date: "Nov 2023",
    short:
      "Drafted 50+ donation letters and created the event report for a rural village.",
    full: "Acted as secretary for the SE Berbagi social service program. Drafted donation request letters, coordinated with village leadership, managed logistics, and composed the official event report for accountability and documentation.",
  },
];

const Organizational = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      {roles.map((role, index) => (
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
            {role.date}
          </small>

          <h5 className="fw-bold mb-2 pe-5">{role.title}</h5>

          <p className="text-light mb-2">
            {expandedIndex === index ? role.full : role.short}
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

export default Organizational;
