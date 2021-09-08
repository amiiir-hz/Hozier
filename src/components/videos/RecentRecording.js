import React, { Component } from "react";
import "../../sass/main.scss";

class RecentRecording extends Component {
  render() {
    return (
      <div>
        <section className="recent bg-first">
          <div className="container">
            <h2 className="recent-title heading-1">Recent Recordings</h2>
            <div className="recent-cards">
              {this.props.videos.map((video) => (
                <div className="recent-card recent-vid">
                  <img
                    alt={video.snippet.title}
                    src={video.snippet.thumbnails.medium.url}
                  />
                  <div className="recent-card-text">
                    <h5 className="heading-3">{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentRecording;
