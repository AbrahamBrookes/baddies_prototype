<template>
	<div 
		class=enemy
		:class="{'about-to-attack': waitingToAttack }"
		:style="styleBinding"
		@click="begin_attack_loop"
	>
		<ul class=enemy-stats>
			<li><h6>{{enemy.name}}</h6></li>
			<li>Health: {{ enemy.health_stat }}</li>
		</ul>
		<div class=attack-slider>
		</div>
		
	</div>
</template>

<script>
import Enemy from '../classes/Enemy'
export default {
	props: {
		enemy: null, // the enemy object, passed from the calling component
	},
	data(){
		return {
			styleBinding: { // we're passing in some calculated css variables
							// to let css handle animations
				'--attack-speed': this.enemy.speed + 's',
			},
			waitingToAttack: false,
		}
	},
	methods: {
		begin_attack_loop(){ // initiate an attack, wait for the timer to complete and then attack
			// check that the enemy is still alive
			if( ! this.enemy.can_attack ) return;
			console.log('attack loop started');
			// start a timer based on this.speed
			window.setTimeout(() => {
			
				this.$emit('attack', this.enemy.attack()); // send an attack event with this enemy's attack values
				
				// toggle attacking class off so our css animations will run again
				this.waitingToAttack = false;
				window.requestAnimationFrame(() => {
					this.begin_attack_loop();
				});
				
			}, this.enemy.speed * 1000);
			
			// change the class so our css animations will run
			this.waitingToAttack = true;
		}
	}
}
</script>

<style scoped lang="scss">
	.enemy {
		.attack-slider {
			height: 20px; 
			width: 100%;
			background-color: black;
		}
		
		&.about-to-attack {
			.attack-slider {
				/* 	
					animation-duration passed from this.data.styleBindings to inline style 
					and then used here to handle animation via css depending on our enemy 
					objects speed property 
				*/
				animation-duration: var(--attack-speed); 
				animation-name: attackSlider;
				animation-timing-function: linear;
			}
		}
	}

	@keyframes attackSlider {
		from {
			width: 100%;
		}

		to {
			width: 0%;
		}
	}
</style>