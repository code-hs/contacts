<template>
	<div class="buttons">
		<router-link to="/" class="back"> </router-link>
	</div>
</template>

<script>
export default {};
</script>

<style>
.buttons {
	display: flex;
}
.buttons .back {
	background: url(/img/icons/back.svg) no-repeat center;
	cursor: pointer;
	width: 30%;
	height: 20px;
	background-size: contain;
}
</style>
