import axios from "axios";

export default axios.create({
    baseURL: "https://60bfbc0597295a0017c43b7e.mockapi.io",
    headers: {
      "Content-type": "application/json"
    }
  });  