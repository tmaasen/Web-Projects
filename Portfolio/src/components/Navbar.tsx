import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import ProjectsPage from "../pages/Projects";
import ProjectPage from "../pages/Project";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";

function navbar() {
  return (
    <Router>
      <header style={{ height: "auto" }}>
        <span style={{ paddingLeft: "1rem" }}>
          <NavLink to="/" exact>
            <img src="/TM.png" alt="logo" width="70" height="120" className="nav-icon" />
          </NavLink>
        </span>
        <NavLink to="/" exact className="button rounded" style={{marginLeft:"2%"}}>
          <span className="icon-home"></span>Home
        </NavLink>
        <NavLink to="/projects/" className="button rounded">
          <span className="icon-edit"></span>Projects
        </NavLink>
        <h1 className="navbar-title">Tanner Maasen</h1>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/project/:id" exact component={ProjectPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}
export default navbar;
