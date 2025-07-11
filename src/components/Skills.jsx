import React from "react";

const Skills = () => (
  <section
    id="skills"
    className="py-5 mb-5 text-center"
    style={{
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      overflow: "hidden",
    }}
  >
    <div className="text-light">
      <div
        className="rounded-4 p-4 shadow"
        style={{
          background: "linear-gradient(135deg, #262642 0%, #202040 100%)",
          border: "1px solid #4f8cff33",
          overflow: "hidden",
        }}
      >
        <div
          className="skills-marquee d-flex align-items-center"
          style={{
            display: "flex",
            animation: "scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {[
            "react/react-original.svg",
            "express/express-original.svg",
            "nodejs/nodejs-original.svg",
            "go/go-original.svg",
            "php/php-original.svg",
            "laravel/laravel-plain.svg",
            "flutter/flutter-original.svg",
            "mysql/mysql-original.svg",
            "postgresql/postgresql-original.svg",
            "wordpress/wordpress-original.svg",
            "html5/html5-original.svg",
            "css3/css3-original.svg",
            "javascript/javascript-original.svg",
            "python/python-original.svg",
            "bootstrap/bootstrap-original.svg",
            "tailwindcss/tailwindcss-plain.svg",
          ]
            .concat(
              // Repeat for seamless scrolling
              [
                "react/react-original.svg",
                "express/express-original.svg",
                "nodejs/nodejs-original.svg",
                "go/go-original.svg",
                "php/php-original.svg",
                "laravel/laravel-plain.svg",
                "flutter/flutter-original.svg",
                "mysql/mysql-original.svg",
                "postgresql/postgresql-original.svg",
                "wordpress/wordpress-original.svg",
                "html5/html5-original.svg",
                "css3/css3-original.svg",
                "javascript/javascript-original.svg",
                "python/python-original.svg",
                "bootstrap/bootstrap-original.svg",
                "tailwindcss/tailwindcss-plain.svg",
              ]
            )
            .map((icon, idx) => (
              <img
                key={idx}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
                alt={icon.split("/")[0]}
                width="60"
                className="mx-4 skill-icon"
                style={{
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  filter: "drop-shadow(0 0 2px #4f8cff88)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 10px #4f8cffcc)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 2px #4f8cff88)";
                }}
              />
            ))}
        </div>
      </div>
    </div>

    <style>
      {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
  </section>
);

export default Skills;
