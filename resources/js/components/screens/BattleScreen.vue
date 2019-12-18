<template>
	<div id=battle-screen>
		<ul>
			<li v-for="enemy in all_enemies">
				{{ enemy.name }}
			</li>
		</ul>
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
	}
}
</script>