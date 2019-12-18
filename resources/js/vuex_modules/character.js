
export const character = {
	namespaced: true,
	state: {
		name: '',
		level: 1,
		money: 0
	},
	getters: {},
	mutations: {
		set_name(state, name){
			state.name = name;
		}
	}
};
