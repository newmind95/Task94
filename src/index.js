import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  const result = app.addBananas();
  window.__JS_APP = app;
	var paragraph = document.createElement('p');
	result.forEach((item) => paragraph.textContent += item);
	const div = document.getElementById('emojis');
	div.appendChild(paragraph);
});

