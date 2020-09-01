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
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// Tell Vue to install the plugin.
Vue.use(VuejsDialog);
import './../assets/css/main.css';

export default {
	name: 'App',
	components: {},
};
</script>
