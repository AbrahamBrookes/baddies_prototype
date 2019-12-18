<template>
	<div id=blacksmith-screen>
		<ul>
			<li v-for="item in all_equipment">
				{{item.name}} - {{item.price}} gold
			</li>
		</ul>
		<button class="btn btn-secondary" @click="set_current_screen('VILLAGE_SCREEN')">Back</button>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
	computed: {
		...mapGetters([
			'all_equipment'
		]),
	},
	methods: {
		...mapMutations([
			'set_current_screen'
		]),
	}
}
</script>