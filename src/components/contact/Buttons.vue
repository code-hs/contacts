<template>
	<div class="buttons">
		<router-link to="/" class="back" />
	</div>
</template>

<script>
export default {};
</script>

<style>
.buttons {
	display: flex;
	height: 40px;
}
.buttons .back {
	background: url(/img/icons/back.svg) no-repeat center;
	cursor: pointer;
	width: 33%;
	height: 100%;
}
</style>
