<template>
	<div id=battle-screen>
		<enemy :enemy="all_enemies[1]" @attack="attack_player"></enemy>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	computed: {
		...mapState([
			'all_enemies'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
		attack_player( attack_values ){
			console.log( attack_values );
		}
	}
}
</script>