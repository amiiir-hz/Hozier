import React, { Component } from "react";
import hozPic from "../../img/h2.jpg";
import "../../sass/main.scss";

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <img alt="Hozier In Black And White" src={hozPic} />
        <div className="about-text">
          <h3 className="about-text-title heading-1">About Hozier</h3>
          <p className="about-text-p">
            Hozier is a worship pastor at The Mission Chattanooga, an
            independent artist, songwriter, vocalist, violinist, and member of
            the band As Isaac. ‍ He’s been playing violin since she was 4 after
            seeing a PBS TV special. And now He's performed with artists like
            Caleb Culver, Leeland, and The Gray Havens and opened for artists
            like Kristian Stanfill, The Vespers, and Audrey Assad. ‍ Hozier also
            teaches private violin lessons and is available for studio
            recordings.
          </p>
          <div className="about-text-btn">
            <a href="#" className="btn">
              Record with Hozier
            </a>
            <a href="#" className="btn">
              Inquire about lessons
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
