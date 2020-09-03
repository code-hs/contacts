<template>
	<div>
		<h1 class="title">{{ contact.name }}</h1>
		<div class="content contact">
			<div v-for="(field, i) in contact.fields" :key="i" class="contact-info">
				<div class="info-key">{{ field.name }}:</div>
				<input
					v-model="field.value"
					:ref="'field_' + i"
					:disabled="i !== editingFieldIndex"
				/>

				<OptionalButtons
					:fieldIndex="i"
					:editingFieldIndex="editingFieldIndex"
					:fieldValue="field.value"
					:required="field.required"
					:resetValue="resetValue"
					:showAddField="showAddField"
					@edit="edit(i)"
					@remove="remove(i)"
					@save="save"
					@reset="reset(i)"
				/>
			</div>

			<Buttons
				v-show="!showAddField"
				@add-field="showAddField = !showAddField"
				@reset-last-change="resetLastChange"
			/>
			<AddField
				v-show="showAddField"
				@dismiss="showAddField = false"
				@create-field="createField"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import types from '../store/types';
import Buttons from '@/components/contact/Buttons';
import OptionalButtons from '@/components/contact/OptionalButtons';
import AddField from '@/components/contact/AddField';
import Config from '@/config/main';

export default {
	components: {
		Buttons,
		OptionalButtons,
		AddField,
	},
	data() {
		return {
			contact: null,
			editingFieldIndex: '',
			resetValue: '',
			showAddField: false,
		};
	},
	computed: {
		...mapGetters({contacts: types.CONTACTS_CONTACTS}),
	},
	created() {
		// check url param
		const id = +this.$route.params.id;
		const isNumber = /^\d+$/.test(id);
		if (!id || !isNumber) this.$router.push('/');

		// check contact
		const contact = this.contacts.find(c => c.id === id);
		if (!contact) this.$router.push('/');

		// using native JSON functions removes reactivity
		this.contact = JSON.parse(JSON.stringify(contact));
	},
	methods: {
		...mapMutations({
			sSaveContact: types.CONTACTS_SAVE,
		}),
		edit(index) {
			// set new editing index
			this.editingFieldIndex = index;
			// copy value for reset functional
			this.resetValue = this.contact.fields[index].value;

			this.$nextTick(() => {
				// set focus on editing input, for next tick
				this.$refs[`field_${index}`][0].focus();
			});
		},
		remove(index) {
			// if empty field or field required
			if (!this.contact.fields[index] || this.contact.fields[index].required)
				return false;

			this.$dialog
				.confirm('Are you sure you want to detele field ?', Config.confirmModal)
				.then(() => {
					// delete reactive
					this.contact.fields.splice(index, 1);
					this.save();
				})
				.catch();
		},
		save() {
			this.sSaveContact(this.contact);
			this.clearEditIndex();
		},
		clearEditIndex() {
			this.editingFieldIndex = null;
		},
		reset(index) {
			this.$dialog
				.confirm('Are you sure you want to reset ?', Config.confirmModal)
				.then(() => {
					this.contact.fields[index].value = this.resetValue;
				})
				.catch();
			this.clearEditIndex();
		},
		createField(field) {
			const pField = {
				name: field[0],
				value: field[1],
			};
			this.contact.fields.push(pField);
			this.save();
		},
		resetLastChange() {
			console.log('reset last change');
			// храним последнее измененное поле, позицию и значение
			// при добавлении нового поля, записываем его реактивно в
			// реактивно записываем его через contacts.fields = current fields+

			// main reset, при каждом действии, сохраняем весь контакт, а потом при клике на кнопку, востанавливаем его

			// в функции save делаем сохранение промежуточного состояния ???
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
	letter-spacing: 1.5px;
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
</style>
