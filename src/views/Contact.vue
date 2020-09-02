<template>
	<div>
		<h1 class="title">{{ contact.name }}</h1>
		<div class="content contact">
			<div
				v-for="(field, key) in contact.fields"
				:key="key"
				class="contact-info"
			>
				<div class="info-key">{{ field.name }}:</div>
				<input
					v-model="field.value"
					:ref="'field_' + key"
					:disabled="!field.editing"
				/>

				<div v-show="!field.editing">
					<div class="but-edit" @click="editField(key)" />
					<div class="but-remove" @click="removeField(field.name)" />
				</div>
				<div v-show="field.editing">
					<div class="but-ok" @click="saveField(key)" />
					<div class="but-reset" @click="resetField(key)" />
				</div>
			</div>

			<Buttons />
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import types from '../store/types';
import Buttons from '@/components/contact/Buttons';

export default {
	components: {
		Buttons,
	},
	data() {
		return {
			contact: null,
		};
	},
	computed: {
		...mapGetters({contacts: types.CONTACTS_CONTACTS}),
	},
	created() {
		const id = +this.$route.params.id;
		const isNumber = /^\d+$/.test(id);
		if (!id || !isNumber) this.$router.push('/');

		const contact = this.contacts.find(c => c.id === id);
		if (!contact) this.$router.push('/');
		this.contact = contact;
	},
	methods: {
		...mapMutations({
			sSaveContact: types.CONTACTS_SAVE,
		}),
		editField(key) {
			this.clearEditFields();
			this.contact.fields[key].editing = true;
			this.$nextTick(() => {
				this.$refs[`field_${key}`][0].focus();
			});
		},
		removeField(key) {
			console.log('key :>> ', key);
		},
		saveField(key) {
			this.contact.fields[key].editing = false;
			this.sSaveContact(this.contact);
		},
		clearEditFields() {
			this.contact.fields.forEach(item => {
				item.editing = false;
			});
		},
		resetField(key) {
			console.log('key :>> ', key);
		},
	},
};
</script>

<style scoped>
.contact-info {
	display: flex;
	position: relative;
	justify-content: flex-end;
	color: hsl(0deg 0% 100%);
	border-bottom: 1px solid hsl(0deg 0% 100% / 39%);
	line-height: 40px;
	height: 40px;
}

.info-key {
	padding-right: 15px;
	min-width: 35%;
	text-align: right;
	text-transform: capitalize;
	letter-spacing: 1.2px;
	opacity: 0.7;
}

.contact-info input[disabled] {
	background: hsl(0deg 0% 0% / 0%);
	outline: none;
	border: none;
	color: hsl(0deg 0% 100%);
}
.contact-info input {
	min-width: 65%;
	text-align: left;
	font-size: 16px;
	background: hsl(0deg 0% 0% / 32%);
	border: none;
	outline: 1px solid hsl(0deg 0% 100% / 80%);
	color: hsl(0deg 0% 100%);
	padding-left: 7px;
	box-sizing: border-box;
}

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
.contact-info:hover .but-edit {
	opacity: 0.5;
}
.contact-info .but-edit:hover {
	opacity: 1;
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
.contact-info:hover .but-remove {
	opacity: 0.4;
}
.contact-info .but-remove:hover {
	opacity: 1;
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
.but-ok:hover {
	opacity: 1;
}
</style>
