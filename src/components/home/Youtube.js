import React, { Component } from "react";
import "../../sass/main.scss";

class Youtube extends Component {
  render() {
    return (
      <section className="youtube bg-first">
        <div className="container">
          <div className="youtube-cards">
            <div className="youtube-card youtube-title">
              <h4 className="heading-1">
                Media
                <br />
                Corner
              </h4>
              <p>
                Here are a few videos and live recordings from over the years. I
                hope you enjoy them!
              </p>
            </div>
            {this.props.videos.map((video) => (
              <div className="youtube-card youtube-vid">
                <img
                  alt={video.snippet.title}
                  src={video.snippet.thumbnails.medium.url}
                />
                <h5 className="heading-3">{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Youtube;
