<template>
	<div id=game>
	
		<div id=game-header class="d-flex align-items-center pb-2">
			<h5 class="d-flex flex-grow-1 my-0">Hey You! Slay those Baddies!</h5>
			<small>v{{version}}</small>
		</div>
		
		
		<main-menu v-if="current_screen == 'MAIN_MENU'"></main-menu>
		<village-screen v-if="current_screen == 'VILLAGE_SCREEN'"></village-screen>
		<blacksmith-screen v-if="current_screen == 'BLACKSMITH_SCREEN'"></blacksmith-screen>
		<inn-screen v-if="current_screen == 'INN_SCREEN'"></inn-screen>
		<battle-screen v-if="current_screen == 'BATTLE_SCREEN'"></battle-screen>
		<create-character-screen v-if="current_screen == 'CREATE_CHARACTER_SCREEN'"></create-character-screen>
		<character-stats-screen v-if="current_screen == 'CHARACTER_STATS_SCREEN'" :character="player_character"></character-stats-screen>
		<game-over-screen v-if="current_screen == 'GAME_OVER_SCREEN'"></game-over-screen>
		<inventory-screen v-if="current_screen == 'INVENTORY_SCREEN'"></inventory-screen>
		
		
		<div id=game-footer class="d-flex align-items-center pb-2 w-100"
		v-if="current_screen != 'MAIN_MENU' && current_screen != 'CHARACTER_STATS_SCREEN' && current_screen != 'CREATE_CHARACTER_SCREEN'">
			<button class="btn btn-secondary" 
				@click="set_current_screen('CHARACTER_STATS_SCREEN')"
			>Character Stats</button>
			<button class="btn btn-secondary" 
				@click="set_current_screen('INVENTORY_SCREEN')"
			>Inventory</button>
			<span class="flex-grow-1 text-right">
				Gold: {{ player_character ? player_character.gold : 0 }}
			</span>
		</div>
		
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
	name: 'game',
	computed: {
		...mapState([
			'current_screen',
			'player_character',
			'version'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
	}
}
</script>