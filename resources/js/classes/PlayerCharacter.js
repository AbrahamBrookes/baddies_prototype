import { Battleable } from './Battleable'

export class PlayerCharacter extends Battleable {
	constructor( init ){
		super(init);
		this.name = init.name 					|| 'Untitled Character';
		this.level_stat = init.level 			|| 1;
		this.dexterity = init.dexterity			|| 1; // critical hit chance, dodging, landing hits
		this.vitality = init.vitality 			|| 1; // stamina total and recovery, movement speed
		this.strength = init.strength 			|| 1; // health, attack, heavier gear, encumberance
		this.intelligence = init.intelligence	|| 1; // mana total and recovery, high level spells
		this.willpower = init.willpower 		|| 1; // magic attack and defense, magical accuracy
	}
	
	get stats(){
		return {
			level: this.level_stat,
			health: this.health_stat,
			defense: this.defense_stat,
			attack: this.attack_stat,
			dexterity: this.dexterity,
			vitality: this.vitality,
			strength: this.strength,
			intelligence: this.intelligence,
			willpower: this.willpower,
		}
	}
}