import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default axios.create({
    baseURL: `${VITE_API_BASE_URL}/api/v1`,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});
