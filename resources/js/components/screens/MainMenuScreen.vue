<template>
	<div class="container d-flex align-items-center justify-content-center h-100">
		<div id="main-menu" class="d-flex flex-column text-center">
			<h1>Hey you!<br /> Slay those baddies!</h1>
			<button class="btn btn-secondary d-inline-block" @click="newGame()">
				New Game
			</button>
			<small>v{{version}}</small>
		</div>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	computed: {
		...mapState([
			'version',
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
		newGame(){
			console.log( 'new game' );
			this.set_current_screen('CREATE_CHARACTER_SCREEN');
		}
	}
}
</script>