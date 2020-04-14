import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Site administration</h1>
    <p>React, Redux for ultra responsive webpage</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more....
    </Link>
  </div>
);

export default HomePage;
