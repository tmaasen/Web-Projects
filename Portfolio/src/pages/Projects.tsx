import React from "react";
import ProjectList from "../components/ProjectList";
import { Project } from "../components/Project";
import { AppState } from "../state";
import { ProjectState } from "../components/state/projectTypes";
import { loadProjects, saveProject } from "../components/state/projectActions";
import { connect } from "react-redux";

class ProjectsPage extends React.Component<any, {}> {
  componentDidMount() {
    this.loadProjects(this.props.page);
  }

  loadProjects(page: number) {
    this.props.onLoad(page);
  }

  handleNextPage = () => {
    let app = this;
    let nextPage = app.props.page + 1;
    app.loadProjects(nextPage);
  };

  saveProject = (project: Project) => {
    console.log("Saving project: ", project);
    this.props.onSave(project);
  };

  render() {
    return (
      <>
        <title>Projects</title>
        <div className={this.props.loading ? "fade" : ""}>
          {this.props.error && (
            <div className="row">
              <div className="card large error">
                <section>
                  <p>
                    <span className="icon-alert inverse "></span>
                    {this.props.error}
                  </p>
                </section>
              </div>
            </div>
          )}
          <ProjectList
            onSave={this.saveProject}
            projects={this.props.projects}
          />
          {!this.props.error && !this.props.loading && (
            <div className="row">
              <div className="col-sm-12">
                <div className="button-group fluid">
                  <button
                    className="button default"
                    onClick={this.handleNextPage}
                  >
                    More...
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {this.props.loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
          </div>
        )}
      </>
    );
  }
}
function mapStateToProps(state: AppState): ProjectState {
  return {
    ...state.projectState,
  };
}

const mapDispatchToProps = {
  onLoad: loadProjects,
  onSave: saveProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
