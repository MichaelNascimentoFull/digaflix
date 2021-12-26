import Vue from 'vue';
import Vuex from 'vuex';
import {authModule} from './auth'
import {movieModule} from './movie'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		titulo:'page'
	},

	mutations: {},

	actions: {},

	modules: {
		Auth:authModule,
		Movie:movieModule,
	}
})

export default store;
