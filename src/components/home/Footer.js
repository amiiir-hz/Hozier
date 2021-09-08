import React, { Component } from "react";
import "../../sass/main.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h1 className="footer-logo heading-2">HOZIER</h1>
        <a href="#" className="btn">
          Hozier's really friendly. Say hi.
        </a>
      </footer>
    );
  }
}

export default Footer;
