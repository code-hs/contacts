import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '../views/Contacts.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'contacts',
		component: Contacts,
	},
	{
		path: '/contact/:id',
		name: 'contact',
		component: Contact,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
