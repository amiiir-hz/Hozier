import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/main.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo heading-2">HOZIER</h1>
        <div className="navbar-menu">
          <Link exact to="/" className="navbar-menu-btn btn">
            About
          </Link>
          <Link exact to="/videos" className="navbar-menu-btn btn">
            Videos
          </Link>
          <Link to="/contact" className="navbar-menu-btn btn">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
