import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
		const div = document.getElementById('emojis');
		div.textContent = ''
		var paragraph = document.createElement('p');
		this.emojis.forEach((item) => paragraph.textContent += item);
		div.appendChild(paragraph);
  }

  addBananas() {
		const result = this.emojis.map((item) => item + this.banana);
		this.setEmojis(result);	
	}
}
