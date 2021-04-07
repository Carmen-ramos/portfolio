import React from "react";
import "../stylesheets/layout/_projects.scss";

function Projects(props) {
  const projectsData = props.data.map((data) => {
    return (
      <li className="article1" key={data.id}>
        <h3 className="article1-title">{data.name}</h3>
        <img src={data.image} alt={data.name} />
        <p>{data.description}</p>
      </li>
    );
  });
  return (
    <>
      <section id="section__reasons" className="section-reasons">
        <h2 className="section-title"> My projects </h2>
        <ul className="Article-Container">{projectsData} </ul>
      </section>
    </>
  );
}
export default Projects;
