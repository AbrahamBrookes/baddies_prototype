/**
	The Item class is a base class that defines a simple item that may be bought, sold
	or dropped as loot.
*/

export class Item {
	constructor( init ){
		this.name = init.name || 'Untitled Item';
		this.price = init.price || 0;
	}
}