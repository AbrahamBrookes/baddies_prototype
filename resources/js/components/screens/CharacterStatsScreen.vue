<template>
	<div id=create-character-screen>
		{{player_character.name}}
			
		<button class="btn btn-secondary" @click="set_current_screen(previous_screen)">Back</button>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	data() {
		return {
			character_name: 'Jangus Jangus Jamilaquarry',
		}
	},
	computed: {
		...mapState([
			'previous_screen',
			'player_character',
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen',
			'set_character_name'
		]),
	}
}
</script>