import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const courses = [
  {
    title: "KodeBasit Laravel",
    platform: "Codepolitan",
    emoji: "⚙️",
    description:
      "Studied and built applications using the Laravel framework, covering MVC, Blade templating, routing, and authentication.",
    certificateLink: "https://example.com/laravel-cert",
    projectLink: "https://s.id/postify",
  },
  {
    title: "DBS Foundation Coding Camp 2024",
    platform: "Dicoding",
    emoji: "🌐",
    description:
      "Developed responsive front-end websites with HTML, CSS, JavaScript. Applied design systems and accessibility principles.",
    certificateLink: "https://example.com/dbs-cert",
  },
  {
    title: "Dicoding for University",
    platform: "Dicoding",
    emoji: "📊",
    description:
      "Learned data analysis with Python and visualized insights using libraries like Matplotlib and Seaborn. Created interactive dashboards.",
    certificateLink: "https://example.com/data-cert",
  },
  {
    title: "Fullstack Web Development Program",
    platform: "Binar Academy",
    emoji: "💻",
    description:
      "Completed fullstack training with React.js, Node.js, REST API, PostgreSQL, and deployment practices using modern CI/CD tools.",
    certificateLink: "https://example.com/binar-cert",
    projectLink: "https://s.id/29epv",
  },
];

const CourseSection = () => {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShow = (course) => {
    setSelectedCourse(course);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section
      id="courses"
      className="py-5 mb-5"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        background: "linear-gradient(135deg, #151530 0%, #202040 100%)",
      }}
    >
      <div className="container text-light text-center">
        <h2 className="fw-bold mb-5" style={{ color: "#4f8cff" }}>
          Courses & Bootcamps
        </h2>

        <div className="row justify-content-center g-4">
          {courses.map((course, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="p-4 rounded-4 shadow h-100 text-start"
                style={{
                  background:
                    "linear-gradient(135deg, #262642 0%, #202040 100%)",
                  border: "1px solid #4f8cff33",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onClick={() => handleShow(course)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 0 12px #4f8cff55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h5 className="fw-bold mb-1">
                  {course.emoji} {course.title}
                </h5>
                <p className="small text-secondary mb-0">{course.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-light rounded-4 border border-primary"
        style={{
          backdropFilter: "blur(5px)",
        }}
      >
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(135deg, #1a1a33, #202040)",
            borderBottom: "1px solid #4f8cff44",
          }}
        >
          <Modal.Title className="d-flex align-items-center">
            <span style={{ fontSize: "1.8rem", marginRight: "0.5rem" }}>
              {selectedCourse?.emoji}
            </span>
            <span>{selectedCourse?.title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#1a1a33",
            color: "#ccc",
            borderBottom: "1px solid #4f8cff22",
            fontSize: "0.95rem",
          }}
        >
          <p className="mb-1">
            <strong className="text-light">Platform:</strong>{" "}
            {selectedCourse?.platform}
          </p>
          <p className="mt-3">{selectedCourse?.description}</p>
        </Modal.Body>
        <Modal.Footer
          style={{
            background: "#1a1a33",
            borderTop: "1px solid #4f8cff22",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {selectedCourse?.certificateLink && (
              <Button
                variant="outline-info"
                size="sm"
                className="me-2"
                href={selectedCourse.certificateLink}
                target="_blank"
              >
                📄 View Certificate
              </Button>
            )}
            {selectedCourse?.projectLink && (
              <Button
                variant="outline-success"
                size="sm"
                href={selectedCourse.projectLink}
                target="_blank"
              >
                💼 View Project
              </Button>
            )}
          </div>
          <Button variant="outline-light" size="sm" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default CourseSection;
