<template>
	<div id=create-character-screen>
		<div class=form-group>
			<label for="character_name">
				Name your hero:
			</label>
			<input class='form-control' v-model="character_name" />
		</div>
			
		<button class="btn btn-secondary" @click="create_character">Go</button>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {PlayerCharacter} from '../../classes/PlayerCharacter'
export default {
	data() {
		return {
			character_name: 'Jangus Jangus Jamilaquarry',
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
			'set_character_name',
			'create_new_character'
		]),
		create_character(){
			var new_character = new PlayerCharacter({
				name: this.character_name,
				attack: 1
			});
			this.create_new_character(new_character);
			this.set_current_screen('VILLAGE_SCREEN');
		},
	}
}
</script>