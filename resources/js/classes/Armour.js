
import {Item} from './Item'

export class Armour extends Item {
	constructor( init ){
		super(init);
		this.name = init.name 			|| 'Untitled Armour';
		this.weight = init.weight 		|| 0;
		this.defense = init.defense		|| 0;
		this.repair = init.repair 		|| 100;
		this.slot = init.slot 			|| 'CUIRASS'; // 'HELM', 'LEFT_PAULDRON', 'RIGHT_PAULDRON', 'CUIRASS', 'GREAVES', 'BOOTS', 'GLOVES'
	}
}