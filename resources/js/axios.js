import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8000/api/auth/',
})
axios.defaults.baseURL = 'http://localhost:8000/api/auth/';

api.interceptors.request.use(
	config => {
		const token = JSON.parse(localStorage.getItem("user")).access_token;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
export default api;