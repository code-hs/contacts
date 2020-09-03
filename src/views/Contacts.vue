<template>
	<div>
		<h1 class="title">Contacts</h1>
		<div class="content contacts">
			<div v-for="contact in contacts" :key="contact.id">
				<router-link
					:to="{name: 'contact', params: {id: contact.id}}"
					class="contacts-item"
				>
					{{ getValueByKey(contact, 'name').value }}
					<div class="but-remove" @click.prevent="remove(contact)" />
				</router-link>
			</div>

			<AddContact
				v-show="showAddContact"
				@create="handlerCreate"
				@dismiss="showAddContact = !showAddContact"
			/>

			<button
				v-show="!showAddContact"
				class="but-add"
				@click="showAddContact = !showAddContact"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import types from '../store/types';
import AddContact from '@/components/contacts/AddContact';
import Config from '@/config/main';

export default {
	components: {
		AddContact,
	},
	data() {
		return {
			showAddContact: false,
		};
	},
	computed: {
		...mapGetters({contacts: types.CONTACTS_CONTACTS}),
	},
	methods: {
		...mapMutations({
			sCreate: types.CONTACTS_CREATE,
			sDelete: types.CONTACTS_DELETE,
		}),
		handlerCreate(newItem) {
			console.log('newItem :>> ', newItem);
			// create new item by template
			const pContact = {
				fields: [
					{
						name: 'name',
						value: newItem.name,
						required: true,
					},
					{
						name: 'email',
						value: newItem.email,
					},
					{
						name: 'phone',
						value: newItem.phone,
					},
				],
			};
			this.sCreate(pContact);
			// hide creating form
			this.showAddContact = !this.showAddContact;
		},
		getValueByKey(contact, key) {
			return contact.fields.find(f => f.name === key);
		},
		remove(contact) {
			this.$dialog
				.confirm(
					'Are you sure you want to delete this contact ?',
					Config.confirmModal
				)
				.then(() => {
					this.sDelete(contact.id);
				})
				.catch(() => {});
		},
	},
};
</script>

<style scoped>
.contacts-item {
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

.contacts-item:hover {
	background: hsl(0deg 0% 0% / 50%);
}

.but-add {
	display: block;
	width: 100%;
	height: 40px;
	line-height: 44px;
	cursor: pointer;
	transition: all 0.5s;
	border-bottom: none;
	font-weight: bold;
	font-family: serif;
	background: url(/img/icons/add.svg) no-repeat center;
	opacity: 0.3;
	border: none;
	outline: none;
}

.but-add:hover {
	opacity: 1;
}

.but-remove {
	position: absolute;
	opacity: 0;
	width: 15px;
	height: 15px;
	right: 10px;
	top: 20px;
	font-family: inherit;
	background: url(/img/icons/delete.svg) no-repeat center / contain;
}
.contacts-item:hover .but-remove {
	opacity: 0.2;
}
.contacts-item .but-remove:hover {
	opacity: 1;
}
</style>
