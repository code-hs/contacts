<template>
	<div>
		<h1 class="title">Contacts</h1>
		<div class="content contacts">
			<div v-for="contact in contacts" :key="contact.id" class="contacts__list">
				<router-link
					:to="{name: 'contact', params: {id: contact.id}}"
					class="contacts__item"
				>
					{{ contact.name }}
					<div class="but-remove" />
				</router-link>
			</div>

			<div class="contacts__but-add">
				<img src="/img/icons/add.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contacts: [
				{
					id: 1,
					name: 'Jon Snow',
				},
				{
					id: 2,
					name: 'Ella Gray',
				},
				{
					id: 3,
					name: 'Madison Rock',
				},
				{
					id: 4,
					name: 'Grayson Carter',
				},
				{
					id: 5,
					name: 'Kinsley Clarke',
				},
			],
		};
	},
};
</script>

<style scoped>
.contacts__item {
	display: block;
	position: relative;
	color: hsl(0deg 0% 100%);
	border-bottom: 1px solid hsl(0deg 0% 100% / 45%);
	height: 55px;
	line-height: 55px;
	cursor: pointer;
	transition: all 0.5s;
	text-decoration: none;
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
