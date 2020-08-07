import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import arrowLeftShort from "@iconify/icons-bi/arrow-left-short";

export default function ProjectDetail(props: any) {
  const { project } = props;
  let signedDate = new Date(project.contractSignedOn);
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
          <div
            className="card large"
            style={{
              height: "auto",
              overflowY: "visible",
              transform: "none",
            }}
          >
            <img
              className="rounded"
              src={project.imageUrl}
              alt={project.name}
            />
            <section className="section dark">
              <p>{project.description}</p>
              <p>Budget : $ {Intl.NumberFormat().format(project.budget)}.00</p>
              <p>Signed : {signedDate.toDateString()}</p>
              <p>
                <mark className="active">
                  {project.isActive ? "active" : "inactive"}
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
