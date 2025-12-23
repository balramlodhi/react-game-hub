import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1ecc2d7ed94f4790ad3140a15b2920ec'
    }
})