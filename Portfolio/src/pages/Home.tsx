import React, { Fragment } from "react";
import { Project } from "../components/Project";
import { AppState } from "../state";
import { ProjectState } from "../components/state/projectTypes";
import { loadFeaturedProjects } from "../components/state/projectActions";
import { connect } from "react-redux";
import FeaturedProject from "../components/ProjectCard_Featured";

class HomePage extends React.Component<any> {
  componentDidMount() {
    this.loadFeaturedProjects(this.props.page);
  }

  loadFeaturedProjects(page: number) {
    this.props.onLoadFeatured(page);
  }

  render() {
    const items = this.props.projects.map((project: Project) => (
      <div key={project.id} className="cols-sm">
          <div key={project.id} className="cols-sm">
          <FeaturedProject
            project={project}
          /> 
          </div>
        </div>
    ))
    return (
      <Fragment>
        <title>Home</title>
        <h2 className="homeTitle">Featured Projects</h2>
        <div className="row">{items}</div>     
      </Fragment>
    );
  }
}
function mapStateToProps(state: AppState): ProjectState {
  return {
    ...state.projectState,
  };
}

const mapDispatchToProps = {
  onLoadFeatured: loadFeaturedProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
