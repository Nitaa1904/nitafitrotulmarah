import React from "react";

const Focus = () => (
  <section
    id="focus"
    className="mb-5 text-center py-5"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      backgroundColor: "#202040",
    }}
  >
    <div className="">
      <h2 style={{ color: "#4f8cff" }} className="fw-bold mb-3">
        Topics of Interest
      </h2>
      <p className="mb-4 text-light">
        My focus is on creating innovative and user-friendly technology
        solutions.
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-3 mb-3">
          <div
            className="p-4 rounded-4 text-white shadow h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "linear-gradient(135deg, #4f8cff 0%, #262642 100%)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🚀 Full-stack Development & Flutter
          </div>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <div
            className="p-4 rounded-4 text-white shadow h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "linear-gradient(135deg, #4f8cff 0%, #262642 100%)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💡 User-friendly Web Applications
          </div>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <div
            className="p-4 rounded-4 text-white shadow h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "linear-gradient(135deg, #4f8cff 0%, #262642 100%)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🎯 Proficient Full Stack Developer
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Focus;
