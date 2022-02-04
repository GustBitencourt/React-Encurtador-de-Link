import axios from 'axios';

const key = 'c65c0feb84e86401028db436c4ee5fb3e64027dd';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

