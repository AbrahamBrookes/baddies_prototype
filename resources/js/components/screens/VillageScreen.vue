<template>
	<div class="container d-flex align-items-center justify-content-center h-100">
		<div id=village-screen>
			<button class="btn btn-secondary" @click="set_current_screen('BLACKSMITH_SCREEN')">Blacksmith</button>
			<button class="btn btn-secondary" @click="set_current_screen('INN_SCREEN')">Inn</button>
			<button class="btn btn-secondary" @click="set_current_screen('BATTLE_SCREEN')">To Battle!</button>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
	}
}
</script>