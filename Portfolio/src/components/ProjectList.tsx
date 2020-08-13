import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import {MOCK_PROJECTS} from '../components/MockProjects';

class ProjectList extends React.Component<any> {
  render() {
    const items = MOCK_PROJECTS.map((project: Project) => (
      <div key={project.id} className="cols-sm">
        <ProjectCard project={project} />
      </div>
    ));
    return <div className="row">{items}</div>;
  }
}

export default ProjectList;
