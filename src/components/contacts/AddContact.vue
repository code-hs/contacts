<template>
	<form @submit.prevent="submit">
		<h1>Add new contact</h1>
		<div class="form-container">
			<div class="form-group">
				<label>Name</label>
				<input v-model="name" type="text" required />
			</div>

			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="email" required />
			</div>

			<div class="form-group">
				<label>Phone</label>
				<input v-model="phone" type="text" required />
			</div>
		</div>

		<div class="buttons">
			<button class="create" type="submit" />
			<button class="dismiss" type="button" @click="dismiss" />
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			phone: '',
		};
	},
	methods: {
		submit() {
			const item = {
				name: this.name,
				email: this.email,
				phone: this.phone,
			};
			this.$emit('create', item);
			this.resetFields();
		},
		dismiss() {
			this.resetFields();
			this.$emit('dismiss');
		},
		resetFields() {
			this.name = '';
			this.email = '';
			this.phone = '';
		},
	},
};
</script>

<style scoped>
h1 {
	margin-top: 30px;
	margin-bottom: 30px;
	color: hsl(0deg 0% 100% / 75%);
	letter-spacing: 0.7px;
	font-size: 18px;
}
.form-container {
	margin: 0px 40px;
}

.form-group {
	display: flex;
	margin: 16px 10px;
	height: 26px;
	justify-content: center;
}

.form-group label {
	width: 20%;
	margin-right: 30px;
	color: hsl(0deg 0% 100%);
	line-height: 26px;
	font-size: 14px;
	letter-spacing: 1.5px;
	text-align: right;
}

.form-group input {
	padding: 0px 6px;
	background: hsl(0deg 0% 0% / 0%);
	border: 1px solid hsl(0deg 0% 100% / 46%);
	min-width: 300px;
	color: hsl(0deg 0% 100%);
	box-sizing: border-box;
}

.form-group input:focus {
	outline: 1px solid hsl(0deg 0% 100%);
}

.buttons {
	display: flex;
	justify-content: space-around;
	height: 40px;
	align-items: center;
	border-top: 1px solid hsl(0deg 0% 100% / 39%);
}

.buttons button {
	width: 50%;
	height: 100%;
	border: none;
	outline: none;
}

.buttons .create {
	background: url(/img/icons/add.svg) no-repeat center;
	cursor: pointer;
}
.buttons .create:hover {
	background-color: hsl(166deg 100% 65% / 35%);
}

.buttons .dismiss {
	opacity: 0.5;
	background: url(/img/icons/delete.svg) no-repeat center / contain;
	background-size: 17px 17px;
	cursor: not-allowed;
}
.buttons .dismiss:hover {
	opacity: 1;
	background-color: hsl(0deg 100% 65% / 35%);
}
</style>
