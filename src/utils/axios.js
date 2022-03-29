import axios from 'axios';

const API_BASE_URL = import.meta.env.API_BASE_URL;
export default axios.create({
    baseURL: API_BASE_URL + '/api/v1',
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});
