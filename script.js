const app = Vue.createApp({
	data() {
		return {
			currentTab: "Homepage",
			tabs: ["Homepage", "Products", "Contact"],
		};
	},
	computed: {
		currentTabComponent() {
			return "tab-" + this.currentTab.toLowerCase();
		},
	},
});

app.component("tab-homepage", {
	template: `<div
							class="navigation">homepage information</div>`,
});

app.component("tab-products", {
	template: `<div	class="navigation">product information</div>`,
});

app.component("tab-contact", {
	template: `<div class="navigation">contact information</div>`,
});

app.mount("#navigation-div");
