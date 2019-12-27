<template>
	<div id=battle-screen>
		<enemy :enemy="enemy" @attack="attack_player"></enemy>
		
		<button class="btn btn-danger" @click="attack_enemy()">Attack</button>
		<button class="btn btn-warning" @mousedown="shield_up()" @mouseup="shield_down()">Defend</button>
		<button class="btn btn-secondary" @click="start_round()">Fight!</button>
		<div>
			<h6 class="small">{{ player_character.name }}</h6>
			<p>Health: {{ player_character.health_stat }} </p>
		</div>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	data(){
		return {
			enemy: null, // our enemy class object
			shield_is_up: false, // hold the 'Defend' button to put your shield up
		}
	},
	computed: {
		...mapState([
			'all_enemies',
			'player_character'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
		
		/**
			Called from the Enemy, to attack the player character
		*/
		attack_player( attack_values ){
			// loop through our attack values to marry up the different attack types with defense types
			for( let [type, value] of Object.entries(attack_values) ){
				
				if( type == 'physical' && value > 0 ){ // physical atack
					var dmg = value;
					// take into account armour and shield
					// shield first
					if( this.shield_is_up ){
						// a shield will take the damage into its repair value
						var dmg_before_shield = dmg;
						dmg -= this.player_character.shield.defense;
						
						if(dmg >= this.player_character.shield.defense){ // there is still damage left over after the shield
							// take the full shield defense value into repair
							this.player_character.shield.take_damage( this.player_character.shield.defense );
						} else { // only take the damage dealt, not the full shield defense
							this.player_character.shield.take_damage( dmg_before_shield );
						}
						
					}
					// then armour
					dmg -= this.player_character.getTotalArmourRating();
					// then character defense
					dmg -= this.player_character.defense_stat;
					
					
					dmg = dmg < 0 ? 0 : dmg; // jusin case
					
					console.log('Player attacked for ' + value + ' physical damage, loses ' + dmg + ' health');
					this.player_character.health_stat -= dmg;
					if( this.player_character.health_stat <= 0 ){
						this.game_over();
					}
				}
			}
		},
		
		/**
			The player has attacked an enemy
		*/
		attack_enemy(){
			var attack_values = this.player_character.attack();
			
			for( let [type, value] of Object.entries(attack_values) ){
				
				if( type == 'physical' && value > 0 ){ // physical atack
					var dmg = value;
					// take into account armour and shield
					dmg -= this.enemy.defense_stat;
					
					dmg = dmg < 0 ? 0 : dmg; // jusin case
					
					console.log('Enemy attacked for ' + value + ' physical damage, loses ' + dmg + ' health');
					this.enemy.health_stat -= dmg;
					if(this.enemy.health_stat <= 0 ){
						this.end_round();
					}
				}
			}
		},
		
		start_round(){
			this.enemy.can_attack = true;
		},
		
		end_round(){
			this.enemy.can_attack = false;
			console.log('win!');
		},
		
		game_over(){
			this.enemy.can_attack = false;
			this.set_current_screen('GAME_OVER_SCREEN');
		},
		
		shield_up(){
			this.shield_is_up = true;
		},
		
		shield_down(){
			this.shield_is_up = false;
		},
		
		/**
			Select a random but level-appropriate enemy to fight, and assign it to this.enemy
		*/
		select_enemy_to_battle(){
			var theEnemy = this.all_enemies[1];
			this.enemy = theEnemy;
		}
	},
	created() {
		this.select_enemy_to_battle();
	}
}
</script>