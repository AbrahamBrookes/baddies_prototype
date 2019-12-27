<template>
	<div id=create-character-screen class="container my-5">
		<div class=row>
			<div class=col>
				<h5>Create your character</h5>
				<label for="character_name">
					Name:
				</label>
				<input class="form-control mb-2" v-model="character_name" />
				
				<h5>Assign Points</h5>
				<div class="d-flex mb-2">
					<span class="flex-grow-1">Points remaining:</span>
					<span>{{ spare_points }}</span>
				</div>
				<ul class="list-unstyled no-select">
					<li class="d-flex mb-1">
						<span class="flex-grow-1 no-select">Strength:</span>
						<span>
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('strength_stat', 'MINUS')">-</span>
							<input disabled v-model="strength_stat" />
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('strength_stat', 'PLUS')">+</span>
						</span>
					</li>
					<li class="d-flex mb-1">
						<span class="flex-grow-1">Dexterity:</span>
						<span>
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('dexterity_stat', 'MINUS')">-</span>
							<input disabled v-model="dexterity_stat" />
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('dexterity_stat', 'PLUS')">+</span>
						</span>
					</li>
					<li class="d-flex mb-1">
						<span class="flex-grow-1">Vitality:</span>
						<span>
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('vitality_stat', 'MINUS')">-</span>
							<input disabled v-model="vitality_stat" />
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('vitality_stat', 'PLUS')">+</span>
						</span>
					</li>
					<li class="d-flex mb-1">
						<span class="flex-grow-1">Intelligence:</span>
						<span>
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('intelligence_stat', 'MINUS')">-</span>
							<input disabled v-model="intelligence_stat" />
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('intelligence_stat', 'PLUS')">+</span>
						</span>
					</li>
					<li class="d-flex mb-1">
						<span class="flex-grow-1">Willpower:</span>
						<span>
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('willpower_stat', 'MINUS')">-</span>
							<input disabled v-model="willpower_stat" />
							<span class="px-3 py-1 cursor-pointer card-1" @click.stop="modify_stat('willpower_stat', 'PLUS')">+</span>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="d-flex">
			<span class="flex-grow-1">
				<button class="btn btn-secondary" @click="randomize_character">Random</button>
			</span>
			<button class="btn btn-secondary" @click="create_character">Go</button>
		</div>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {PlayerCharacter} from '../../classes/PlayerCharacter'
import {Shield} from '../../classes/Shield'
import {all_shields} from '../../item_libraries/all_shields'

export default {
	data() {
		return {
			character_name: '',
			strength_stat: 15,
			dexterity_stat: 15,
			vitality_stat: 15,
			intelligence_stat: 15,
			willpower_stat: 15,
			spare_points: 15,
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
			if( this.spare_points > 0 )
				return alert('You must assign all points!');
			if( ! this.character_name.replace(/\s/g, "") )
				return alert('You must name your character!');
				
			var new_character = new PlayerCharacter({
				name: this.character_name,
				attack: 1
			});
			new_character.shield = all_shields[0];
			new_character.gold = 100;
			this.create_new_character(new_character);
			this.set_current_screen('VILLAGE_SCREEN');
		},
		randomize_character(){
			// reset points
			this.spare_points =
			this.strength_stat =
			this.dexterity_stat =
			this.vitality_stat =
			this.intelligence_stat =
			this.willpower_stat = 15;
			// apply points randomly
			while( this.spare_points > 0 ){
				var rando = Math.floor(Math.random() * 5);
				switch( rando ){
					case 0:
						this.strength_stat ++;
						break;
					case 1:
						this.dexterity_stat ++;
						break;
					case 2:
						this.vitality_stat ++;
						break;
					case 3:
						this.intelligence_stat ++;
						break;
					case 4:
						this.willpower_stat ++;
						break;
				}
				this.spare_points --;
			}
			// give im a name
			this.character_name = 'Jangus Jangus Jobangus';
		},
		modify_stat( stat_name, direction ){
			if( direction == 'MINUS' ){
				if( this[stat_name] > 5 ){
					this[stat_name] --;
					this.spare_points ++;
				}
			}
			if( direction == 'PLUS' ){
				if( this.spare_points > 0 ){
					this[stat_name] ++;
					this.spare_points --;
				}
			}
		},
	}
}
</script>