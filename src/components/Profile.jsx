import React from "react";
import { FaDownload } from "react-icons/fa";
import nitaPhoto from "../assets/images/Logo.jpeg";

const Profile = () => (
  <section
    id="profile"
    className="py-5 mb-5"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      backdropFilter: "blur(6px)",
    }}
  >
    <div className="container text-light">
      <div className="row align-items-center">
        {/* Foto */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div
            style={{
              width: "220px",
              height: "220px",
              margin: "0 auto",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #4f8cff, #8aaeff)",
              boxShadow: "0 0 25px #4f8cff55",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <img
              src={nitaPhoto}
              alt="Nita"
              className="rounded-circle img-fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "4px solid #202040",
              }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="col-md-8 text-md-start text-center">
          <h1
            className="fw-bold text-primary mb-1"
            style={{ fontSize: "2.4rem" }}
          >
            Nita Fitrotul Mar'ah
          </h1>
          <p className="text-secondary mb-2">
            Software Engineering Student at Telkom University Purwokerto
          </p>
          <p className="lead mb-3" style={{ color: "#ccc" }}>
            I’m passionate about{" "}
            <span className="highlight">full-stack web development</span> and{" "}
            <span className="highlight">WordPress</span> development. I enjoy
            building interactive, user-friendly interfaces and efficient backend
            systems.
          </p>

          <div className="d-flex justify-content-md-start justify-content-center gap-3 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1npVf8m9y-sPnVW8IrvBjzWMAP0fkPum9/view?usp=sharing"
              className="btn btn-primary d-flex align-items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> View My CV
            </a>
            <span
              className="badge rounded-pill bg-info text-dark shadow"
              style={{ fontSize: "0.95rem", padding: "0.6em 1.2em" }}
            >
              💼 Available for Internship
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Style */}
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .highlight {
          position: relative;
          color: #4f8cff;
          font-weight: 600;
        }

        .highlight::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.4em;
          left: 0;
          bottom: 0.05em;
          background: rgba(79, 140, 255, 0.2);
          z-index: -1;
        }
      `}
    </style>
  </section>
);

export default Profile;
