import React, { Fragment } from "react";

class HomePage extends React.Component<any> {

  render() {
    return (
      <Fragment>
        <title>Home</title>
        <h2 className="homeTitle">Latest Project</h2>
        <div>
          <iframe className="featured-projects-container" src="https://storytimebooksonline.com/" width="1300" height="700" title="StoryTimeBooks"></iframe>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
