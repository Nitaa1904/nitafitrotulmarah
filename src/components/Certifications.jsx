import React from "react";
import Slider from "react-slick";

const certifications = [
  {
    title: "🏆 Finalist - Software Development",
    subtitle: "Gemastik XVI | 2023",
    image: "https://placehold.co/400x250?text=Gemastik+XVI",
  },
  {
    title: "🎨 UI/UX Bootcamp",
    subtitle: "Software Engineering Assoc.",
    image: "https://placehold.co/400x250?text=UI%2FUX+Bootcamp",
  },
  {
    title: "💻 Web Developer Bootcamp",
    subtitle: "Smartpath.id",
    image: "https://placehold.co/400x250?text=Web+Bootcamp",
  },
  {
    title: "🌐 AWS Cloud Fundamentals",
    subtitle: "Dicoding | 2024",
    image: "https://placehold.co/400x250?text=AWS+Cloud",
  },
  {
    title: "📱 Flutter Beginner Certificate",
    subtitle: "Binar Academy | 2024",
    image: "https://placehold.co/400x250?text=Flutter+Binar",
  },
];

const Certifications = () => {
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
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
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
                  height: "100%",
                }}
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
                  style={{ border: "2px solid #4f8cff22" }}
                />
                <h5 className="fw-bold mb-1">{cert.title}</h5>
                <p className="small text-secondary">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certifications;
