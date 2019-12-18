
export class Enemy {
	constructor( init ){
		this.name = init.name 			|| 'Untitled Enemy';
		this.health = init.health		|| 1;
		this.attack = init.attack		|| 1;
		this.defense = init.defense		|| 1;
		this.speed = init.speed			|| 1;
	}
}