<template>
	<div id=create-character-screen>
		<div class=form-group>
			<label for="character_name">
				Name your hero:
			</label>
			<input class='form-control' v-model="character_name" />
		</div>
		{{character.name}}
			
		<button class="btn btn-secondary" @click="create_character">Go</button>
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
			'all_enemies'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen',
			'set_character_name'
		]),
		create_character(){
			this.set_character_name(this.character_name);
			this.set_current_screen('VILLAGE_SCREEN');
		},
	}
}
</script>