<template>
	<div>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import Vue from 'vue';
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import './../assets/css/main.css';

Vue.use(VuejsDialog);

export default {
	name: 'App',
	components: {},
};
</script>
