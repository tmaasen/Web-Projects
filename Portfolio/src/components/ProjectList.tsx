import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[]; 
  onSave: (project: Project) => void
}

class ProjectList extends React.Component<ProjectListProps> {
  state = {
    editingProject: {},
  };
  handleEdit = (project: Project) => {
    this.setState({ editingProject: project });
  };
  cancelEditing = () => {
    this.setState({ editingProject: {} });
  }
  render() {
    const { projects } = this.props;
    const items = projects.map((project) => (
      <div key={project.id} className="cols-sm">
        {project !== this.state.editingProject ? (
          <div key={project.id} className="cols-sm">
            <ProjectCard
              project={project}
              onEdit={(project: Project) => {
                this.handleEdit(project);
              }}
            />
          </div>
        ) : (
          <div key={project.id} className="cols-sm">
            <ProjectForm project={ project } onCancel={this.cancelEditing} />
          </div>
        )}
      </div>
    ));
    return <div className="row">{items}</div>;
  }
}

export default ProjectList;
