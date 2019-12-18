<template>
	<div id=create-character-screen>
		{{character.name}}
			
		<button class="btn btn-secondary" @click="set_current_screen(previous_screen)">Back</button>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {store} from '../../game'
export default {
	data() {
		return {
			character_name: 'Jangus Jangus Jamilaquarry',
			character: store.state.character,
		}
	},
	computed: {
		...mapState([
			'all_enemies',
			'previous_screen'
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