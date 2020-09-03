<template>
	<div class="buttons">
		<router-link to="/" class="back" title="back page" />

		<div class="but-add" title="add field" @click="$emit('add-field')" />

		<div
			:class="{hide: !showResetButton}"
			class="but-reset"
			title="reset last change"
			@click="$emit('reset-last-change')"
		/>
	</div>
</template>

<script>
export default {
	props: ['showResetButton'],
};
</script>

<style>
.buttons {
	display: flex;
	height: 40px;
}
.back {
	width: 100%;
	height: 100%;
	background: url(/img/icons/back.svg) no-repeat center;
	background-position-y: 13px;
	cursor: pointer;
}
.but-add {
	width: 100%;
	height: 100%;
	background: url(/img/icons/add.svg) no-repeat center;
	background-size: 15px;
	cursor: pointer;
}
.but-reset {
	width: 100%;
	height: 100%;
	background: url(/img/icons/reset.svg) no-repeat center;
	background-size: 15px;
	cursor: pointer;
}
.but-reset.hide {
	opacity: 0;
}
.buttons > *:hover {
	background-color: hsl(0deg 0% 1% / 16%);
}
</style>
