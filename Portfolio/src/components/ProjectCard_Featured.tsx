import { Project } from "./Project";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

interface ProjectCardProps { // define props here
  project: Project;
}

function FeaturedProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return ( 
    <div className="card" style={{height:"360px"}}>
      <img src={project.imageUrl} alt={project.name}></img>
      <section>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p className="truncator">{project.description}</p>
        <Link to={'/project/' + project.id}>
        <p className="truncator">Check It Out!</p>
        </Link>
      </section>
    </div>
  );
}

export default FeaturedProjectCard;
