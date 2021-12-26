import axios from 'axios';
import router from './router/index';
import store from './store/index'

const api = axios.create({
	baseURL: 'http://localhost:8000/api/auth/',
})

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

api.interceptors.response.use(
	response => {
		if (response.status === 200 || response.status === 201) {
			const dataToken = localStorage.getItem('dataToken');
			const refreshed = localStorage.getItem('refreshed');
			if (2000000 < Date.now() - dataToken && refreshed == false) {
				localStorage.setItem('refreshed', true);
				store.dispatch('Auth/refresh')
			} else if (3600000 < Date.now() - dataToken) {
				alert("session expired");
				localStorage.removeItem('user');
				router.replace({
					path: "/login",
					query: { redirect: router.currentRoute.fullPath }
				});
				return;
			}
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		console.error('ds', error);

		if (error.response.status) {
			switch (error.response.status) {
				case 400:
					break;
				case 401:
					alert("sessão expirada");
					store.dispatch('Auth/logout')
					router.replace({
						path: "/login",
						query: { redirect: router.currentRoute.fullPath }
					});
					break;
				case 403:
					router.replace({
						path: "/login",
						query: { redirect: router.currentRoute.fullPath }
					});
					break;
				case 404:
					alert('pagina não existe');
					break;
				case 502:
					setTimeout(() => {
						router.replace({
							path: "/login",
							query: {
								redirect: router.currentRoute.fullPath
							}
						});
					}, 1000);
			}
			return Promise.reject(error.response);
		}
	}
);

export default api;