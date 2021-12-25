import Vue from 'vue';
import Vuex from 'vuex';
import {authModule} from './auth'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		titulo:'page'
	},

	mutations: {},

	actions: {},

	modules: {
		Auth:authModule,
	}
})

export default store;
