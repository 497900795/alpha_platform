import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 6000
});

axios.interceptors.response.use(response => {
    // 拦截器
    return response
});

export function demo() {
    return axiosInstance.get('www.AAAA.com');
}