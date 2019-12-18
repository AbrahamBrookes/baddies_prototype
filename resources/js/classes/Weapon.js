
import {Item} from './Item'

export class Weapon extends Item {
	constructor( init ){
		super(init);
		this.name = init.name 		  	|| 'Untitled Weapon';
		this.weight = init.weight 	  	|| 0;
		this.attack = init.attack 	  	|| 0;
		this.repair = init.repair 	  	|| 100;
		this.wpn_type = init.wpn_type 	|| ''; // 'SHORT_SWORD', 'DAGGER', 'CLAYMORE', 'BATTLE_AXE', 'CLEAVER'
	}
}
