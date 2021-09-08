import React, { Component } from "react";
import "../../sass/main.scss";

class Header extends Component {
  render() {
    return (
      <header className="header bg-first">
        <h1 className="header-title heading-1">
          Hozier is a singer, songwriter, & guitarist.
        </h1>
        <p className="header-text">
          He's performed with artists like Kim Walker-Smith, Caleb Culver,
          Leeland, and The Gray Havens and opened for Kristian Stanfill, The
          Vespers, and Audrey Assad.
        </p>
        <div className="header-buttons">
          <a href="#about" className="btn btn-first">
            Learn More
          </a>
          <a href="#" className="btn btn-second">
            Say Hi
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
