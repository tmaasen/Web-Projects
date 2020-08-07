import { Project } from "./Project";
import React from "react";
import { Link } from 'react-router-dom'

interface ProjectCardProps { // define props here
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;
  const handleClick = (projectBeingEdited: Project) => {
      onEdit(projectBeingEdited) // onEdit is actually a prop method defined in the function header
  } 
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name}></img>
      <section>
        <Link to={'/project/' + project.id}>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p className="truncator">{project.description}</p>
        <p>Budget: ${project.budget.toLocaleString()} </p>
        </Link>
        <button className="bordered" onClick={() => handleClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
