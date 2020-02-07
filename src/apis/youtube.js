import axios from "axios";

const KEY = REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  // export preconfigured axios with default params in it
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});