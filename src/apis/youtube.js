import axios from "axios";

const KEY = "AIzaSyADD4ulkLdUVB1RSs6lkiyShzjXK6DkSOk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresults: 5,
    key: KEY
  }
});
