import React from "react";

const projects = [
  { title: "Note Apps", url: "https://s.id/fenoteapps" },
  { title: "Postify", url: "https://s.id/postify" },
  { title: "Web Pringgading", url: "https://s.id/29eqn" },
  { title: "AEROLOKA", url: "https://bit.ly/aeroloka" },
  { title: "DISA", url: "https://bit.ly/disaweb" },
];

const Portfolio = () => (
  <div>
    <h2 className="text-primary mb-3">Portfolio</h2>
    <ul className="list-group">
      {projects.map((project, index) => (
        <li key={index} className="list-group-item">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Portfolio;
