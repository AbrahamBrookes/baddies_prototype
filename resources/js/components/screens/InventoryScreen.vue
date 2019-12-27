<template>
	<div id=inventory-screen class="mt-5">
		<ul class="list-unstyled">
			<li v-for="item in inventory" class="d-flex mb-1">
				<span class="flex-grow-1">{{item.name}} - {{item.price}}g</span>
				<button class="btn btn-secondary" @click="equip(item)">equip</button>
				<button class="btn btn-secondary" @click="drop(item)">drop</button>
			</li>
		</ul>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

import {Item} from './../../classes/Item'
import {Weapon} from './../../classes/Weapon'
import {Armour} from './../../classes/Armour'
import {Shield} from './../../classes/Shield'

export default {
	computed: {
		...mapGetters([
			'all_equipment',
		]),
		...mapState([
			'player_character',
		]),
		inventory(){
			return this.player_character ? this.player_character.inventory : [];
		},
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
		equip( item ){
			switch( item.constructor.name ){
				case 'Weapon':
					this.player_character.equipWeapon( item );
					break;
				case 'Armour':
					this.player_character.equipArmour( item );
					break;
				case 'Shield':
					this.player_character.equipShield( item );
					break;
				default:
					break;
			}
			
			// check limitations
			
			// unequip if necessary
			
			// place unequipped item in inventory
			
			// equip the item
			
			// remove it from inventory
		},
		drop( item ){
			this.player_character.inventory.splice( this.player_character.inventory.indexOf( item ), 1 ); // I can't believe there isn't a built in function for this STILL
		}
	}
}
</script>