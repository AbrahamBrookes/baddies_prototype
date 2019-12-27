
import {Enemy} from '../classes/Enemy'

export var all_enemies = [
	new Enemy({
		name: 'Wet Rat',
		health: 5,
		attack: 0.1,
		defense: 0.2,
		speed: 5,
	}),
	new Enemy({
		name: 'Flappy Bat',
		health: 5,
		attack: 3,
		defense: 0.2,
		speed: 0.5,
	}),
	new Enemy({
		name: 'Irate Frog',
		health: 15,
		attack: 0.25,
		defense: 0.5,
		speed: 1,
	}),
];