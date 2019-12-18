<template>
	<div class=container>
		<div class="btn btn-secondary" @click="newGame()">
			New Game
		</div>
		<small>{{version}}</small>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	data(){
		return {
			version: '0.0.1',
		}
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