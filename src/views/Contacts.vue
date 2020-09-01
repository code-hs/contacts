<template>
	<div>
		<h1 class="title">Contacts</h1>
		<div class="content contacts">
			<div class="contacts__list">
				<div class="contacts__item">123123123</div>
				<div class="contacts__item">123123123</div>
				<div class="contacts__item">123123123</div>
				<div class="contacts__item">123123123</div>
				<div class="contacts__item">123123123</div>
				<div class="contacts__item">123123123</div>
			</div>

			<div class="contacts__but-add">+</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.contacts__item {
	color: hsl(0deg 0% 100%);
	border-bottom: 1px solid hsl(0deg 0% 100% / 45%);
	height: 55px;
	line-height: 55px;
	cursor: pointer;
	transition: all 0.5s;
}

.contacts__item:hover {
	background: hsl(0deg 0% 0% / 50%);
}

.contacts__but-add {
	color: hsl(0deg 0% 100%);
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	transition: all 0.5s;
	border-bottom: none;
	font-size: 31px;
	font-weight: bold;
	font-family: serif;
}

.contacts__but-add:hover {
	background: hsl(0deg 0% 0% / 50%);
}
</style>
