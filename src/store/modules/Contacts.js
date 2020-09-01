import types from '../types.js';

const state = {
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
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions,
};
