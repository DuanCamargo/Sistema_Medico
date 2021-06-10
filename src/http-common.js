import axios from "axios";
export default axios.create({

    baseURL: "https://60bfb88e97295a0017c43aa9.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});