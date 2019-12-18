/* setting up dependencies */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import MainMenuScreen from './components/screens/MainMenuScreen';
Vue.component('main-menu', MainMenuScreen);
import VillageScreen from './components/screens/VillageScreen';
Vue.component('village-screen', VillageScreen);
import BlacksmithScreen from './components/screens/BlacksmithScreen';
Vue.component('blacksmith-screen', BlacksmithScreen);
import InnScreen from './components/screens/InnScreen';
Vue.component('inn-screen', InnScreen);
import BattleScreen from './components/screens/BattleScreen';
Vue.component('battle-screen', BattleScreen);
import CreateCharacterScreen from './components/screens/CreateCharacterScreen';
Vue.component('create-character-screen', CreateCharacterScreen);
import CharacterStatsScreen from './components/screens/CharacterStatsScreen';
Vue.component('character-stats-screen', CharacterStatsScreen);
import Game from './components/Game';


/* end dependencies */


/* my trash */
import {Enemy} from './classes/Enemy'
import {Item} from './classes/Item'
import {Weapon} from './classes/Weapon'
import {Armour} from './classes/Armour'
import {Shield} from './classes/Shield'
import {all_weapons} from './item_libraries/all_weapons'
import {all_armour} from './item_libraries/all_armour'
import {all_shields} from './item_libraries/all_shields'
import {all_enemies} from './item_libraries/all_enemies'

import {character} from './vuex_modules/character'

export const store = new Vuex.Store({
	state: {
		current_screen: 'MAIN_MENU',
		previous_screen: '',
		all_weapons: all_weapons,
		all_armour: all_armour,
		all_shields: all_shields,
		all_enemies: all_enemies,
	},
	getters: {
		all_equipment: state => {
			var ret = [];
			state.all_weapons.map( item => ret.push(item) );
			state.all_armour.map( item => ret.push(item) );
			state.all_shields.map( item => ret.push(item) );
			return ret;
		}
	},
	mutations: {
		set_current_screen( state, screen ){
			state.previous_screen = state.current_screen;
			state.current_screen = screen;
		},
		set_character_name( state, name ){
			state.character.name = name;
		}
	},
	modules: {
		character: character
	}
});

new Vue({
	el: '#game',
	store,
	render: h => h(Game)
});