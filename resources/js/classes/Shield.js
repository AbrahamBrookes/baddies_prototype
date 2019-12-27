
import {Item} from './Item'

export class Shield extends Item {
	constructor( init ){
		super(init);
		this.name = init.name 			|| 'Untitled Shield';
		this.weight = init.weight 		|| 0;
		this.defense = init.defense 	|| 0
		this.repair = init.repair 		|| 100;
	}
	
	take_damage( dmg ){
		this.repair -= dmg;
		
		if( this.repair <= 0 ){
			//send an event or smth
			console.log( 'Shield broke!' );
			this.defense = 0;
		}
	}
}