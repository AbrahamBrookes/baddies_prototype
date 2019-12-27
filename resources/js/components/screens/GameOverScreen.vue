<template>
	<div id=game-over-screen>
		<h1>Game over!</h1>
		<button class="btn btn-secondary" @click="set_current_screen('MAIN_MENU')">Main menu</button>
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