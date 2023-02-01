import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
           <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} border-dark mx-2`} type="submit">
                Search
              </button>
            </form>
            <p className="my-3 mx-2">Themes : </p>
            <button className="btn btn-success border-dark mx-1" onClick={props.handleSuccess}></button>
            <button className="btn btn-danger border-dark mx-1" onClick={props.handleDanger}></button>
            <button className="btn btn-warning border-dark mx-1" onClick={props.handleWarning}></button>
            <button className="btn btn-secondary border-dark mx-1" onClick={props.handleSecondary}></button>
            <button className="btn btn-info mx-1 border-dark" onClick={props.handleInfo}></button>
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-1"
                type="checkbox"
                onClick={props.toggleMode}
                
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set the title",
  aboutText: "About",
};
