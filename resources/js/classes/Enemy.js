import { Battleable } from './Battleable'

export class Enemy extends Battleable {
	constructor( init ){
		super(init);
		this.name = init.name 					|| 'Untitled Enemy';
		this.speed_stat = init.speed			|| 1; // attack timer - larger is slower
	}
	
	get speed(){
		return this.speed_stat;
	}
	set speed( value ){
		this.speed_stat = value;
	}
	
}