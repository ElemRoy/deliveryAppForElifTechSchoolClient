import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://deliverytestappforschool.herokuapp.com/"
});

export default axiosInstance;