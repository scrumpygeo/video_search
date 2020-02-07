import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  // export preconfigured axios with default params in it
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
