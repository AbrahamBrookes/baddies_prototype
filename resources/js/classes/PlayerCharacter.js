import { Battleable } from './Battleable'
import {Item} from './Item'
import {Weapon} from './Weapon'
import {Armour} from './Armour'
import {Shield} from './Shield'

export class PlayerCharacter extends Battleable {
	constructor( init ){
		super(init);
		this.name = init.name 					|| 'Untitled Character';
		
		this.weapon = {};
		this.shield = {};
	
		this.gold = 0;
		this.inventory = [];
	
		this.armourSlots = {
			helm: {},
			left_pauldron: {},
			right_pauldron: {},
			cuirass: {},
			greaves: {},
			boots: {},
			gloves: {}
		}
		
		this.potion_belt_size = 0;
		this.potion_belt = new Array(this.potion_belt_size);
		
	}
	
	
	equipWeapon( weapon ){
		if( ! ( weapon instanceof Weapon ) )
			throw "Cannot equip a non-weapon type as a weapon, silly";
		
		if( this.weapon instanceof Weapon ){ // we already have a weapon equipped
			// unequip it
			this.inventory.push( this.weapon );
		}
		this.weapon = weapon;
		this.inventory.splice( this.inventory.indexOf( weapon ), 1 );
	}
	
	
	equipShield( shield ){
		if( ! ( shield instanceof Shield ) )
			throw "Cannot equip a non-shield type as a shield, silly";
		
		if( this.shield instanceof Shield ){ // we already have a shield equipped
			// unequip it
			this.inventory.push( this.shield );
		}
		this.shield = shield;
		this.inventory.splice( this.inventory.indexOf( shield ), 1 );
	}
	
	
	equipArmour( armour ){
		if( ! ( armour instanceof Armour ) )
			throw "Cannot equip a non-armour type as armour, silly";
		
		var armourSlot = armour.slot.toLowerCase();
		if( this.armourSlots[armourSlot] instanceof Armour ){ // we already have some armour equipped
			// unequip it
			this.inventory.push( this.armourSlots[armourSlot] );
		}
		this.armourSlots[armourSlot] = armour;
		this.inventory.splice( this.inventory.indexOf( armour ), 1 );
	}
	
	
	getTotalArmourRating(){
		var total = 0;
		Object.keys(this.armourSlots)
			.map( key => total += this.armourSlots[key].defense || 0 );
		return total;
	}
	
	
	getTotalEncumberance() {
		var total = 0;
		Object.keys(this.armourSlots)
			.map( key => total += this.armourSlots[key].weight || 0 );
		total += this.weapon.weight || 0;
		total += this.shield.weight || 0;
		return total;
	}
}