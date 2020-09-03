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
					@edit="handleEdit(i)"
					@remove="handleRemove(i)"
					@save="save"
					@reset="handleResetField(i)"
				/>
			</div>

			<Buttons
				v-show="!showAddField"
				:showResetButton="showResetButton"
				@add-field="showAddField = !showAddField"
				@reset-last-change="handleResetLastChange"
			/>
			<AddField
				v-show="showAddField"
				@dismiss="showAddField = false"
				@create-field="handleCreateField"
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
			showAddField: false,
			resetValue: '',
			resetContact: null,
		};
	},
	computed: {
		...mapGetters({contacts: types.CONTACTS_CONTACTS}),
		showResetButton() {
			// if has memory contact and not equal
			if (!this.resetContact) return false;

			return JSON.stringify(this.contact) !== JSON.stringify(this.resetContact);
		},
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
		handleEdit(index) {
			// copy contact before some changes
			this.copyContactToMemory();
			// set new editing index
			this.editingFieldIndex = index;
			// copy value for reset functional
			this.resetValue = this.contact.fields[index].value;

			this.$nextTick(() => {
				// set focus on editing input, for next tick
				this.$refs[`field_${index}`][0].focus();
			});
		},
		handleRemove(index) {
			// if empty field or field required
			if (!this.contact.fields[index] || this.contact.fields[index].required)
				return false;

			this.$dialog
				.confirm('Are you sure you want to detele field ?', Config.confirmModal)
				.then(() => {
					// copy contact before changes
					this.copyContactToMemory();
					// delete reactive
					this.contact.fields.splice(index, 1);
					this.save();
				})
				.catch();
		},
		handleResetField(index) {
			this.$dialog
				.confirm('Are you sure you want to reset ?', Config.confirmModal)
				.then(() => {
					this.contact.fields[index].value = this.resetValue;
				})
				.catch(() => {});
			this.clearEditIndex();
		},
		handleCreateField(field) {
			// copy contact before changes
			this.copyContactToMemory();

			const pField = {
				name: field[0],
				value: field[1],
			};
			this.contact.fields.push(pField);
			this.save();
		},
		handleResetLastChange() {
			if (!this.resetContact) return false;

			this.contact = this.resetContact;
			// clear memory
			this.resetContact = false;
			this.save();
		},
		save() {
			this.sSaveContact(this.contact);
			this.clearEditIndex();
		},
		clearEditIndex() {
			this.editingFieldIndex = null;
		},
		copyContactToMemory() {
			// copy without reactivity
			this.resetContact = JSON.parse(JSON.stringify(this.contact));
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
