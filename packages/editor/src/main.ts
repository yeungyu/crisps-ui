import App from './App.svelte';
import 'virtual:windi.css';

const appDOM = document.getElementById('app');
let app;
if (appDOM) {
  app = new App({
    target: appDOM,
  });
}

export default app;
