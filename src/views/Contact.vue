<template>
	<div>
		<h1 class="title">{{ contact.name }}</h1>
		<div class="content contact">
			content
			<Buttons />
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
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
		const id = this.$route.params.id;
		const isNumber = /^\d+$/.test(id);
		if (!id || !isNumber) this.$router.push('/');

		const contact = this.contacts.find(c => c.id === id);
		if (!contact) this.$router.push('/');
		this.contact = contact;
	},
};
</script>
