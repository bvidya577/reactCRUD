import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./components/create-component";
import Edit from "./components/edit-component";
import Index from "./components/index-component";
const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="http://localhost:3000/">
                REACT CRUD
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addProducts"} className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/productlist"} className="nav-link">
                  All products
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <h2>Sample React CRUD </h2> <br />
        <Switch>
          <Route exact path="/addProducts" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/productlist" component={Index} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
