import axios from "axios"

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
	? { loggedIn: true, user }
	: { loggedIn: false, user: null };


export const authModule = {

	namespaced: true,
	state: {
		user: initialState.user, loggedIn: initialState.loggedIn
	},

	mutations: {
		SUCCESSREGISTER(state) { state.loggedIn = false },
		FAILUREREGISTER(state) { state.loggedIn = false },

		SUCCESSLOGIN(state, user) {
			if (user.access_token) {
				if (user.user.email_verified_at == null) { return user; }
				localStorage.setItem('user', JSON.stringify(user));
				localStorage.setItem('dataToken', Date.now());
				localStorage.setItem('refreshed', false);
			}
			state.user = user;
			state.loggedIn = true
		},
		FAILURELOGIN(state) { state.loggedIn = false },

		SUCCESSLOGOUT(state){ state.loggedIn = false,  state.user = null}
	},

	actions: {
		register({ commit }, newUser) {
			return axios.post('/api/auth/register', newUser)
				.then(
					res => {
						commit('SUCCESSREGISTER'); return Promise.resolve(res.data);
					},
					error => {
						commit('FAILUREREGISTER'); return Promise.reject(error);
					}
				);
		},
		login({ commit }, user) {
			return axios.post('/api/auth/login', user)
				.then(
					res => {
						commit('SUCCESSLOGIN', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILURELOGIN'); return Promise.reject(error);
					}
				);
		},
		sendVerifyEmail({ commit }, email) {
			return axios.get('/api/auth/email/resend/' + email)
				.then(
					res => {
						commit('SUCCESSREGISTER'); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILUREREGISTER'); return Promise.reject(error);
					}
				);
		},
		logout({ commit }) {
			const loggedIn = JSON.parse(localStorage.getItem('user'));
			const config = { headers: { Authorization: `Bearer ${loggedIn.access_token}` } };
			localStorage.removeItem('user');
			return axios.post('/api/auth/logout', {}, config)
				.then(
					res => {
						commit('SUCCESSLOGOUT'); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILURELOGOUT'); return Promise.reject(error);
					}
				);
		},
	},

	modules: {

	}
}