import React, { Component, SyntheticEvent } from "react";
import { Project } from "./Project";
import { saveProject } from './state/projectActions';
import { connect } from 'react-redux';


interface ProjectFormProps {
  // defining props in interface
  onCancel: () => void; // methods return is void
  onSave: (project: Project) => void;
  project: Project;
}

interface ProjectFormState {
  project: Project;
  errors: any;
}

export class ProjectForm extends Component<ProjectFormProps, ProjectFormState> {
  state = {
    project: this.props.project,
    errors: { name: "", description: "", budget: "" },
  };

  validator = (project: Project) => {
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required";
    }
    if (project.budget <= 0) {
      errors.budget = "Budget must be greater than $0.00";
    }
    return errors;
  };

  isValid = () => {
    const { errors } = this.state;
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  };
  handleSave = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!this.isValid()) return;
    this.props.onSave(this.state.project);
  };

  handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === "checkbox" ? checked : value;
    if (type === "number") {
      updatedValue = +updatedValue;
    }
    const updatedProject = {
      [name]: updatedValue,
    };
    this.setState((previousState: ProjectFormState) => {
      const project = Object.assign(
        new Project(),
        previousState.project,
        updatedProject
      );
      const errors = this.validator(project);
      return { project, errors };
    });
  };
  render() {
    const { onCancel } = this.props; // props defined to be called in the return section
    return (
      <form className="input-group vertical" onSubmit={this.handleSave}>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={this.state.project.name}
          onChange={this.handleChange}
        />
        {this.state.errors.name.length > 0 && (
          <div className="card error">
            <p>{this.state.errors.name}</p>
          </div>
        )}

        <label htmlFor="description">Project Description</label>
        <textarea
          name="description"
          placeholder="Enter description"
          value={this.state.project.description}
          onChange={this.handleChange}
        ></textarea>
        {this.state.errors.description.length > 0 && (
          <div className="card error">
            <p>{this.state.errors.description}</p>
          </div>
        )}

        <label htmlFor="budget">Project Budget</label>
        <span className="prefix">$&nbsp;
        <input
          type="number"
          name="budget"
          placeholder="Enter budget"
          value={this.state.project.budget}
          onChange={this.handleChange}
        /></span>
        {this.state.errors.budget.length > 0 && (
          <div className="card error">
            <p>{this.state.errors.budget}</p>
          </div>
        )}

        <label htmlFor="isActive">Active?</label>
        <input
          type="checkbox"
          name="isActive"
          checked={this.state.project.isActive}
          onChange={this.handleChange}
        />

        <div className="input-group">
          <button className="primary bordered medium" type="submit">
            Save
          </button>
          <span></span>
          <button type="button" className="bordered medium" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

//export default ProjectForm;

const mapDispatchToProps = {
  onSave: saveProject
  };
  
  export default connect(
  null,
  mapDispatchToProps
  )(ProjectForm);
  
