import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-megarian-carpet.cloudfunctions.net/api'

});

export default instance;

//'http://localhost:5001/megarian-carpet/us-central1/api'