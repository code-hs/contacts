<template>
	<form @submit.prevent="submit">
		<h1>Add new field</h1>
		<div class="form-container">
			<div class="form-group">
				<label>name:value</label>
				<input v-model="field" type="text" required />
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
			field: '',
		};
	},
	methods: {
		submit() {
			const field = this.field.split(':');
			if (field.length !== 2) return false;

			this.$emit('create-field', field);
			this.resetFields();
		},
		dismiss() {
			this.resetFields();
			this.$emit('dismiss');
		},
		resetFields() {
			this.field = '';
		},
	},
};
</script>

<style scoped>
h1 {
	color: hsl(0deg 0% 100% / 75%);
	letter-spacing: 0.7px;
	margin-top: 30px;
	font-size: 18px;
	margin-bottom: 30px;
}
.form-container {
	margin: 0px 40px;
}

.form-group {
	display: flex;
	justify-content: center;
	margin: 16px 10px;
	height: 26px;
}

.form-group label {
	color: hsl(0deg 0% 100%);
	margin-right: 30px;
	line-height: 26px;
	font-size: 14px;
	letter-spacing: 1.5px;
	width: 30%;
	text-align: right;
}

.form-group input {
	background: hsl(0deg 0% 0% / 0%);
	border: 1px solid hsl(0deg 0% 100% / 46%);
	min-width: 210px;
	color: hsl(0deg 0% 100%);
	padding: 0px 6px;
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
	border-top: 1px solid hsl(0deg 0% 100% /39%);
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
	background: url(/img/icons/delete.svg) no-repeat center / contain;
	background-size: 17px 17px;
	opacity: 0.5;
	cursor: not-allowed;
}
.buttons .dismiss:hover {
	background-color: hsl(0deg 100% 65% / 35%);
	opacity: 1;
}
</style>
