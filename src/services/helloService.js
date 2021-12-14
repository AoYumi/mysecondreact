import httpClient from "../commons/httpClient";

const getHello = () => {
    return httpClient.get('/hello');
}

export default {getHello}