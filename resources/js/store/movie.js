export const movieModule = {

	namespaced: true,
	state: {
		movies: [],
	},

	mutations: {
		SUCCESSGET(state, movies) {
			state.movies = movies
		},
		FAILUREGET(state) { },
		FAILURESAVE(state) { },
		FAILUREDELETE(state) { }
	},

	actions: {
		getMovies({ commit },order) {
			return api.get('/movies?order='+order)
				.then(
					res => {
						console.log('res', res)
						commit('SUCCESSGET', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILUREGET'); return Promise.reject(error);
					}
				);
		},
		saveMovie({ commit }, fileMovie) {
			return api.post('/movies', fileMovie)
				.then(
					res => {
						commit('SUCCESSGET', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILURESAVE'); return Promise.reject(error);
					}
				);
		},
		editMovie({ commit }, movieEdited) {
			return api.put('/movies/' + movieEdited.id, movieEdited)
				.then(
					res => {
						commit('SUCCESSGET', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILURESAVE'); return Promise.reject(error);
					}
				);
		},
		deleteMovie({ commit }, id) {
			return api.delete('/movies/' + id)
				.then(
					res => {
						commit('SUCCESSGET', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILUREDELETE'); return Promise.reject(error);
					}
				);
		},
	},

	modules: {

	}
}