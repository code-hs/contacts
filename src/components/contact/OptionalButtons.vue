<template>
	<div>
		<div v-show="i !== editingFieldIndex">
			<div class="but-edit" @click="$emit('edit', i)" title="edit" />
			<div
				v-if="!required"
				class="but-remove"
				@click="$emit('remove', i)"
				title="remove"
			/>
		</div>

		<div v-show="i === editingFieldIndex">
			<div class="but-ok" @click="$emit('save')" title="save" />
			<div
				v-show="fieldValue !== resetValue"
				class="but-reset"
				@click="$emit('reset', i)"
				title="reset"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: ['i', 'editingFieldIndex', 'fieldValue', 'resetValue', 'required'],
};
</script>

<style scoped>
.but-edit {
	opacity: 0;
	position: absolute;
	width: 17px;
	height: 17px;
	right: 29px;
	top: 11px;
	font-family: inherit;
	background: url(/img/icons/edit.svg) no-repeat center / contain;
	cursor: pointer;
}

.but-remove {
	opacity: 0;
	position: absolute;
	width: 15px;
	height: 15px;
	right: 4px;
	top: 13px;
	font-family: inherit;
	background: url(/img/icons/delete.svg) no-repeat center / contain;
	cursor: pointer;
}

.but-ok {
	opacity: 0.8;
	position: absolute;
	width: 15px;
	height: 15px;
	right: 29px;
	top: 13px;
	font-family: inherit;
	background: url(/img/icons/ok.svg) no-repeat center / contain;
	cursor: pointer;
}

.but-reset {
	opacity: 0;
	position: absolute;
	width: 15px;
	height: 15px;
	right: 4px;
	top: 12px;
	font-family: inherit;
	background: url(/img/icons/reset.svg) no-repeat center / contain;
	cursor: pointer;
}

.but-edit:hover {
	opacity: 1;
}
.but-ok:hover {
	opacity: 1;
}
.but-remove:hover {
	opacity: 1;
}
.but-reset:hover {
	opacity: 1;
}
</style>
