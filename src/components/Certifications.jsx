import React, { useState } from "react";
import Slider from "react-slick";
import gemastikImg from "../assets/images/certif/gemastik.jpg";
import binarImg from "../assets/images/certif/binar.jpg";
import laravelImg from "../assets/images/certif/laravel.png";
import infImg from "../assets/images/certif/inf.jpg";
import certiportImg from "../assets/images/certif/certiport.jpg";
import disatImg from "../assets/images/certif/disa.png";

const certifications = [
  {
    title: "🏆 Finalist - Software Development",
    subtitle: "Gemastik XVI | 2023",
    image: gemastikImg,
    description:
      "Lolos sebagai finalis pada Divisi Pengembangan Perangkat Lunak dalam ajang nasional Gemastik XVI. Berhasil mengembangkan solusi inovatif bersama tim dari IT Telkom Purwokerto.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
  {
    title: "🌍 DISA (Digital Pariwisata)",
    subtitle: "Kemenkumham RI",
    image: disatImg,
    description:
      "Berperan dalam pengembangan aplikasi pariwisata digital, memanfaatkan teknologi untuk mendukung promosi daerah.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
  {
    title: "💻 Fullstack Web Development",
    subtitle: "Binar Academy",
    image: binarImg,
    description:
      "Menyelesaikan bootcamp intensif dengan fokus pada pengembangan backend dan frontend menggunakan React dan Node.js.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
  {
    title: "🛠️ Framework Laravel",
    subtitle: "CODEPOLITAN",
    image: laravelImg,
    description:
      "Belajar dan praktik langsung menggunakan Laravel untuk membangun aplikasi CRUD dan REST API.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
  {
    title: "👨‍💻 JavaScript (INF-302)",
    subtitle: "GMetrix LLC",
    image: infImg,
    description:
      "Sertifikasi kompetensi JavaScript tingkat menengah melalui simulasi coding dan praktik langsung.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
  {
    title: "📜 IT Specialist in JavaScript",
    subtitle: "Certiport - Pearson VUE",
    image: certiportImg,
    description:
      "Mendapatkan sertifikasi internasional yang diakui secara global dalam bidang pemrograman JavaScript.",
    projectLink: "https://github.com/yourproject",
    certificateLink: "https://link-to-certificate.pdf",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="certifications" className="py-5 mb-5">
      <div className="container text-center text-light">
        <h2 className="fw-bold mb-5" style={{ color: "#4f8cff" }}>
          Achievements & Certifications
        </h2>

        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <div key={index} className="px-3">
              <div
                className="p-3 rounded-4 shadow"
                style={{
                  background:
                    "linear-gradient(135deg, #262642 0%, #202040 100%)",
                  border: "1px solid #4f8cff33",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  height: "100%",
                }}
                onClick={() => setSelectedCert(cert)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 0 14px #4f8cff55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="img-fluid rounded-3 mb-3"
                  style={{
                    border: "2px solid #4f8cff22",
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold mb-1">{cert.title}</h5>
                <p className="small text-secondary">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal / Popup */}
        {selectedCert && (
          <div
            className="modal d-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backdropFilter: "blur(6px)",
            }}
            onClick={() => setSelectedCert(null)}
          >
            <style>
              {`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .popup-content {
            flex-direction: column !important;
          }
        }
      `}
            </style>

            <div
              className="centered-modal text-light popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gambar di Kiri */}
              <div style={{ flex: "0 0 300px", overflow: "hidden" }}>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRight: "1px solid #4f8cff22",
                  }}
                />
              </div>

              {/* Konten di Kanan */}
              <div
                className="p-4 d-flex flex-column justify-content-between"
                style={{ flex: "1 1 auto" }}
              >
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5
                        className="fw-bold text-light mb-1"
                        style={{ color: "#4f8cff" }}
                      >
                        {selectedCert.title}
                      </h5>
                      <p className="text-secondary small">
                        {selectedCert.subtitle}
                      </p>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-light"
                      onClick={() => setSelectedCert(null)}
                    >
                      ✖
                    </button>
                  </div>

                  <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                    {selectedCert.description}
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    {selectedCert.certificateLink && (
                      <a
                        href={selectedCert.certificateLink}
                        className="btn btn-outline-info btn-sm me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 View Certificate
                      </a>
                    )}
                    {selectedCert.projectLink && (
                      <a
                        href={selectedCert.projectLink}
                        className="btn btn-outline-success btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💼 View Project
                      </a>
                    )}
                  </div>
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setSelectedCert(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
