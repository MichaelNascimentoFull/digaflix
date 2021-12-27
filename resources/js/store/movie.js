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
		SUCCESSSAVE(state) { },
		FAILURESAVE(state) { },
		SUCCESSDELETE(state) { },
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
						commit('SUCCESSSAVE', res.data); return Promise.resolve(res.data);
					},
					error => {
						console.log(error);
						commit('FAILURESAVE'); return Promise.reject(error);
					}
				);
		},
		editMovie({ commit }, movieEdited) {
			movieEdited.tagsmovies = movieEdited.tags.map(function(val){ 
				return {tag:val}
			})
			return api.put('/movies/' + movieEdited.id, movieEdited)
				.then(
					res => {
						commit('SUCCESSSAVE', res.data); return Promise.resolve(res.data);
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
						commit('SUCCESSDELETE', res.data); return Promise.resolve(res.data);
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