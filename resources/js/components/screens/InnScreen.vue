<template>
	<div id=inn-screen>
		<button class="btn btn-secondary" @click="attempt_sleep_at_inn">Sleep the night</button>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
	computed: {
		...mapGetters([
			'all_equipment'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen',
			'attempt_sleep_at_inn'
		]),
	}
}
</script>