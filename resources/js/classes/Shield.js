
import {Item} from './Item'

export class Shield extends Item {
	constructor( init ){
		super(init);
		this.name = init.name 			|| 'Untitled Shield';
		this.weight = init.weight 		|| 0;
		this.defense = init.defense 	|| 0
		this.repair = init.repair 		|| 100;
	}
}