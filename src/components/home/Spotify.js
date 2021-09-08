import React, { Component } from "react";
import "../../sass/main.scss";

class Spotify extends Component {
  render() {
    return (
      <section className="spotify">
        <div className="container">
          <div className="spotify-content">
            <div className="spotify-content-text">
              <h4 className="heading-1">Featured Music</h4>
              <p>
                Here's a sample of some my music with As Isaac. You also can
                find some videos of recent live recordings above or follow me on
                Instagram for the occasional diddy. Follow along with me and As
                Isaac using the links below.
              </p>
              <div className="spotify-icons">
                <i class="fab fa-spotify"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
              </div>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSDznyru3cEZ"
              width="500"
              height="550"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className="spotify-content-playera"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Spotify;
