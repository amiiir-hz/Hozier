import axios from "axios";

const KEY = "AIzaSyBIjEK43VvRXhrXR0OWSgp0FoT4fFTubGA ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
    q: "/hozier",
    type: "video",
  },
});
