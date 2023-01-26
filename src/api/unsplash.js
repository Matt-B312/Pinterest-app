import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID rVUiLCB1gI3eA3lMm-e02VB-1kadM0BvBYxIwy-cxRQ",
    }
})