import React from "react";
import "../stylesheets/layout/_projects.scss";

function Projects(props) {
  const projectsData = props.data.map((data) => {
    return (
      <li className="projects__container--li" key={data.id}>
        <h3 className="projects__container--title">{data.name}</h3>
        <img
          className="projects__container--img"
          src={data.image}
          alt={data.name}
        />
      </li>
    );
  });
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="projects__title"> My projects </h2>
        <ul className="projects__container">{projectsData} </ul>
      </section>
    </>
  );
}
export default Projects;
