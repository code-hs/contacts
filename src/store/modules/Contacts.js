import types from '../types.js';

const state = {
	contacts: [
		{
			id: 1,
			fields: [
				{
					name: 'name',
					value: 'Jon Snow',
					editing: false,
				},
				{
					name: 'email',
					value: 'jon-snow@gmail.com',
					editing: false,
				},
			],
		},
		{
			id: 2,
			fields: [
				{
					name: 'name',
					value: 'Ella Gray',
					editing: false,
				},
				{
					name: 'email',
					value: 'ella-gray@gmail.com',
					editing: false,
				},
			],
		},
		{
			id: 3,
			fields: [
				{
					name: 'name',
					value: 'Madison Rock',
					editing: false,
				},
				{
					name: 'email',
					value: 'madison-rock@gmail.com',
					editing: false,
				},
			],
		},
		{
			id: 4,

			fields: [
				{
					name: 'name',
					value: 'Grayson Carter',
					editing: false,
				},
				{
					name: 'email',
					value: 'grayson-carter@gmail.com',
					editing: false,
				},
			],
		},
		{
			id: 5,
			fields: [
				{
					name: 'name',
					value: 'Kinsley Clarke',
					editing: false,
				},
				{
					name: 'email',
					value: 'kinsley-clarke@gmail.com',
					editing: false,
				},
			],
		},
	],
};

const getters = {
	[types.CONTACTS_CONTACTS]: s => {
		return s.contacts;
	},
};

const mutations = {
	[types.CONTACTS_CREATE]: (s, payload) => {
		let maxId = Math.max(...s.contacts.map(c => c.id));
		payload.id = ++maxId;
		s.contacts.push(payload);
	},

	[types.CONTACTS_DELETE]: (s, id) => {
		s.contacts = s.contacts.filter(c => c.id !== id);
	},

	[types.CONTACTS_SAVE]: (s, payload) => {
		const key = Object.keys(s.contacts).find(
			k => s.contacts[k].id == payload.id
		);
		s.contacts[key] = payload;
	},
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions,
};
