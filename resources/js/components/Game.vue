<template>
	<div id=game>
		<main-menu v-if="current_screen == 'MAIN_MENU'"></main-menu>
		<village-screen v-if="current_screen == 'VILLAGE_SCREEN'"></village-screen>
		<blacksmith-screen v-if="current_screen == 'BLACKSMITH_SCREEN'"></blacksmith-screen>
		<inn-screen v-if="current_screen == 'INN_SCREEN'"></inn-screen>
		<battle-screen v-if="current_screen == 'BATTLE_SCREEN'"></battle-screen>
		<create-character-screen v-if="current_screen == 'CREATE_CHARACTER_SCREEN'"></create-character-screen>
		<character-stats-screen v-if="current_screen == 'CHARACTER_STATS_SCREEN'"></character-stats-screen>
		
		<button class="btn btn-secondary" 
			v-if="current_screen != 'MAIN_MENU' && current_screen != 'CHARACTER_STATS_SCREEN' && current_screen != 'CREATE_CHARACTER_SCREEN'"
			@click="set_current_screen('CHARACTER_STATS_SCREEN')"
		>Character Stats</button>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
	name: 'game',
	computed: {
		...mapState([
			'current_screen'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
	}
}
</script>