import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Spotify from "./Spotify";
import Youtube from "./Youtube";
import Footer from "./Footer";
import youtubeApi from "./API";

class Home extends Component {
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
        <Header />
        <About />
        <Youtube videos={this.state.vid} />
        <Spotify />
        <Footer />
      </div>
    );
  }
}

export default Home;
