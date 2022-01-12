import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Jason",
    age: 30,
  },
});

export default app;
