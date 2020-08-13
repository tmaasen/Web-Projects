import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import arrowLeftShort from "@iconify/icons-bi/arrow-left-short";

export default function ProjectDetail(props: any) {
  const { project } = props;
  return (
    <>
      <title>Project Details | {project.name}</title>
      <div className="projectDetailsContainer">
        <div className="projectHeader">
          <Link to="#" onClick={goBack}>
            <span className="backButton">
              <Icon data-icon="arrow" icon={arrowLeftShort} />
              Back
            </span>
          </Link>
          <h1 className="projectHeader">{project.name}</h1>
        </div>
        <div className="row" style={{ justifyContent: "flex-start" }}>
          <div className="card large detail-card">
            <img
              className="rounded"
              src={project.imageUrl}
              alt={project.name}
            />
            <section className="section dark">
              <p>{project.description}</p>
              <p className="card-info" style={{color:"black"}}><b>Technologies Used:</b> {project.techUsed}</p>
              <a href={project.gitRepo} target="_blank" rel="noopener noreferrer" className="card-info">GitHub Repo</a>
              <p>
                <mark className="active">
                  {project.isFinished ? "Finished" : "Not Finished"}
                </mark>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
function goBack() {
  return window.history.back();
}
