import axios from "axios";

const KEY = "AIzaSyBIjEK43VvRXhrXR0OWSgp0FoT4fFTubGA ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    q: "/hozier",
    type: "video",
  },
});

// async function searchYouTube(q) {
//   q = encodeURIComponent(q);
//   const response = await fetch(
//     "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//         "x-rapidapi-key": "9a15d4d148mshd0e8080e736022ap132b72jsnd0f1b865ff33",
//       },
//     }
//   );
//   const body = await response.json();
//   console.log(body);
//   return body.items.filter((item) => item.type === "video");
// }
