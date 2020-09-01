<template>
	<div>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import './../assets/css/main.css';

export default {
	name: 'App',
	components: {},
};
</script>
