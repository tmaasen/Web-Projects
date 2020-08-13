import { Project } from "./Project";
import React from "react";
import { Link } from 'react-router-dom'

interface ProjectCardProps { // define props here
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  return (
    <div className="card">
      <section>
        <Link to={'/project/' + project.id}>
        <img src={project.imageUrl} alt={project.name} className="card-img"></img>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        </Link>
        <p className="truncator card-info">{project.description}</p>
        <p className="card-info"><b>Technologies Used:</b> {project.techUsed}</p>
        <a href={project.gitRepo} target="_blank" rel="noopener noreferrer" className="card-info">GitHub Repo</a>
      </section>
    </div>
  );
}

export default ProjectCard;
