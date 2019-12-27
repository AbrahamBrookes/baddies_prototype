<template>
	<div id=blacksmith-screen class="mt-5">
		<ul class="list-unstyled">
			<li v-for="item in all_equipment" class="d-flex mb-1">
				<span class="flex-grow-1">{{item.name}} - {{item.price}}g</span>
				<button class="btn btn-secondary" @click="purchase(item)">buy</button>
			</li>
		</ul>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

import {Item} from './../../classes/Item'
import {Weapon} from './../../classes/Weapon'
import {Armour} from './../../classes/Armour'
import {Shield} from './../../classes/Shield'

export default {
	computed: {
		...mapGetters([
			'all_equipment'
		]),
		...mapState([
			'player_character'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
		purchase( item ){
			if( this.player_character.gold >= item.price ){
				this.player_character.gold -= item.price;
				switch( item.constructor.name ){
					case 'Weapon':
						this.player_character.inventory.push( new Weapon( JSON.parse(JSON.stringify( item )) ) ); // clone and copy
						break;
					case 'Armour':
						this.player_character.inventory.push( new Armour( JSON.parse(JSON.stringify( item )) ) ); // clone and copy
						break;
					case 'Shield':
						this.player_character.inventory.push( new Shield( JSON.parse(JSON.stringify( item )) ) ); // clone and copy
						break;
					case 'Item':
						this.player_character.inventory.push( new Item( JSON.parse(JSON.stringify( item )) ) ); // clone and copy
						break;
				}
			} else {
				alert('not enough gold - go slay some baddies!');
			}
		}
	}
}
</script>