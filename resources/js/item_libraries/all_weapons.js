
import {Weapon} from '../classes/Weapon'

export var all_weapons = [
	new Weapon({
		name: 'Brittle wooden short sword',
		weight: 1.5,
		attack: 1.5,
		price: 5,
		wpn_type: 'SHORT_SWORD'
	}),
	new Weapon({
		name: 'Blunt rusty short sword',
		weight: 1.75,
		attack: 5,
		price: 30,
		wpn_type: 'SHORT_SWORD'
	}),
	new Weapon({
		name: 'Shiny steel short sword',
		weight: 1.75,
		attack: 15,
		price: 120,
		wpn_type: 'SHORT_SWORD'
	}),
];