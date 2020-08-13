import React from "react";
import ProjectList from "../components/ProjectList";

class ProjectsPage extends React.Component<any, {}> {

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
            projects={this.props.projects}
          />
          {/* {!this.props.error && !this.props.loading && (
            <div className="row">
              <div className="col-sm-12">
                <div className="button-group fluid">
                  <button
                    className="button default"
                  >
                    More...
                  </button>
                </div>
              </div>
            </div>
          )} */}
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

export default ProjectsPage;
