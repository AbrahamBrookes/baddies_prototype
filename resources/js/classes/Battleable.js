/**
	A base class for anything that can attack or be attacked, including enemies and the player
*/

export class Battleable {
	
	constructor( init ){
		this.health_stat = init.health			|| 1;
		this.defense_stat = init.defense		|| 1;
		
		// attack is handled with different types of damage - physical, magical, fire, electric etc
		// so if we are handed a simple number for attack, it's simply physical damage. Otherwise the
		// passed in object will specifically set different damage types
		if( typeof init.attack == 'number' ){
			this.attack_stat = {
				physical: init.attack
			}
		} else {
			if( typeof init.attack != 'object' ) throw "Please assign a proper attack type to enemy"
			this.attack_stat = init.attack;
		}
	}
	
	/**
		Sends an attack signal, in the form of a returned object containing information about
		the different types of damage this attack shall deliver. All randomization and status
		effects shall be handled in this method before sending out the signal.
	*/
	attack(){
		return this.attack_stat;
	}
	
}