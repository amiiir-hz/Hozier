import React, { Component } from "react";
import Navbar from "../home/Navbar";
import RecentRecording from "./RecentRecording";
import youtubeApi from "./API";
import Footer from "../home/Footer";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { vid: [] };
    this.vidSearch = this.vidSearch.bind(this);
  }

  vidSearch = async () => {
    const youtubeVid = await youtubeApi.get("/search");
    this.setState({ vid: youtubeVid.data.items }, () => {
      console.log(this.state.vid);
    });
  };

  componentDidMount() {
    this.vidSearch();
  }
  render() {
    return (
      <div>
        <Navbar />
        <RecentRecording videos={this.state.vid} />
        <Footer />
      </div>
    );
  }
}

export default Video;
