import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import { Project } from '../components/Project';
import {MOCK_PROJECTS} from '../components/MockProjects';

interface ProjectPageState {
  loading: boolean;
  project_id: Project | Number;
  error: string | undefined;
}

class ProjectPage extends React.Component<any, ProjectPageState> {
  state = {
    loading: false,
    project_id: 0,
    error: ''
  };

  componentDidMount() {
    this.setState({ loading: true, project_id: this.props.match.params.id });
  }

  render() {
    const { loading, project_id, error } = this.state;
    const id = this.props.match.params.id-1;
    return (
      <>
        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse"></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}
        {project_id && <ProjectDetail project={MOCK_PROJECTS[id]} />}
      </>
    );
  }
}

export default ProjectPage;
