<template>
	<div>
		<h1 class="title">Contacts</h1>
		<div class="content contacts">
			<div class="contacts__list">
				<div class="contacts__item">
					Jon Snow
					<div class="but-remove" />
				</div>
				<div class="contacts__item">
					Ella Gray
					<div class="but-remove" />
				</div>
				<div class="contacts__item">
					Madison Rock
					<div class="but-remove" />
				</div>
				<div class="contacts__item">
					Grayson Carter
					<div class="but-remove" />
				</div>
				<div class="contacts__item">
					Kinsley Clarke
					<div class="but-remove" />
				</div>
			</div>

			<div class="contacts__but-add">
				<img src="/img/icons/add.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.contacts__item {
	position: relative;
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
	height: 40px;
	line-height: 44px;
	cursor: pointer;
	transition: all 0.5s;
	border-bottom: none;
	font-weight: bold;
	font-family: serif;
	opacity: 0.3;
}

.contacts__but-add:hover {
	opacity: 1;
}

.but-remove {
	opacity: 0;
	position: absolute;
	width: 15px;
	height: 15px;
	right: 10px;
	top: 20px;
	font-family: inherit;
	background: url(/img/icons/delete.svg) no-repeat center center / contain;
}
.contacts__item:hover .but-remove {
	opacity: 0.2;
}
.contacts__item .but-remove:hover {
	opacity: 1;
}
</style>
