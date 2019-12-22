/* setting up dependencies */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* components */
/* screens */
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
/* elements */
import EnemyComponent from './components/Enemy';
Vue.component('enemy', EnemyComponent);


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

import {PlayerCharacter} from './classes/PlayerCharacter'

export const store = new Vuex.Store({
	state: {
		current_screen: 'MAIN_MENU',
		previous_screen: '',
		all_weapons: all_weapons,
		all_armour: all_armour,
		all_shields: all_shields,
		all_enemies: all_enemies,
		player_character: null,
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
			state.player_character.name = name;
		},
		create_new_character( state, playerCharacter ){
			state.player_character = playerCharacter;
		}
	},
});

new Vue({
	el: '#game',
	store,
	render: h => h(Game)
});