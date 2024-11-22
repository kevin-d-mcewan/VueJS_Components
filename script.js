// const app = Vue.createApp({});

// app.component("my-first-component", {
// 	data() {
// 		return {
// 			propertyName: 0,
// 		};
// 	},
// 	template: `<button v-on:click='propertyName++'>
// 			Clicked {{ propertyName }} times
// 		</button>`,
// });

// app.mount("#my-first-div");

// const app = Vue.createApp({});

// app.component("header-component", {
// 	props: ["title"],
// 	template: `<h2>{{title}}</h2>`,
// });

// app.mount("#component-props-div");

const app = Vue.createApp({
	data() {
		return {
			headers: [
				{ id: 1, title: "My First Header" },
				{ id: 2, title: "My Second Header" },
				{ id: 3, title: "My Third Header" },
			],
			headerFontSize: 1,
		};
	},
});

app.component("header-component", {
	props: ["title"],
	template: `<div class=header-component>
		<h2>{{title}}</h2>
		<button @click="$emit('increase-text-size')">
			Increase Text Size
		</button>
		<button @click="$emit('decrease-text-size')">
			Decrease Text Size
		</button>
	</div>`,
});

app.mount("#emit-events-div");
