import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
return (

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav mr-right">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white-50" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white-50" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white-50" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

);
};


export default Navbar;