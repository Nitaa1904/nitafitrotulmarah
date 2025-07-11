import React, { useState } from "react";
import Internship from "./Internship";
import Organizational from "./Organizational";

const ExperienceContainer = () => {
  const [activeTab, setActiveTab] = useState("internship");

  return (
    <section
      id="experience"
      className="py-5 mb-5"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
        borderTop: "1px solid rgba(79,140,255,0.15)",
        borderBottom: "1px solid rgba(79,140,255,0.15)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container text-light">
        {/* Judul */}
        <h2 className="fw-bold text-center mb-4" style={{ color: "#4f8cff" }}>
          Experience
        </h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          {[
            { label: "Internship & Experience", key: "internship" },
            { label: "Organizational Experience", key: "org" },
          ].map(({ label, key }) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer fw-semibold px-3 py-2 position-relative ${
                activeTab === key ? "active-tab" : "inactive-tab"
              }`}
              style={{
                cursor: "pointer",
                fontSize: "1.1rem",
                color: activeTab === key ? "#4f8cff" : "#ccc",
                transition: "all 0.3s",
              }}
            >
              {label}
              {activeTab === key && (
                <div
                  className="active-underline"
                  style={{
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#4f8cff",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 8px #4f8cffaa",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab === "internship" ? <Internship /> : <Organizational />}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
