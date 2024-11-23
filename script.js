const tabs = [
	{
		name: "Homepage",
		component: {
			template: `<div>Home information</div>`,
		},
	},

	{
		name: "Products",
		component: {
			template: `<div>Products infomation</div>`,
		},
	},

	{
		name: "Contact",
		component: {
			template: `<div>Contact information</div>`,
		},
	},
];

const app = Vue.createApp({
	data() {
		return {
			tabs,
			currentTab: tabs[0],
		};
	},
	computed: {
		getCurrentTab() {
			return "tab-" + this.currentTab.toLowerCase();
		},
	},
});

app.component("tab-homepage", {
	template: `<div>Home information</div>`,
});

app.component("tab-products", {
	template: `<div>Product Information</div>`,
});

app.component("tab-contact", {
	template: `<div>Contact Information</div>`,
});

app.mount("#navigation-div");
