const { EventEmitter } = require("events");
const { SAVE } = require("./event-names");

const emitter = new EventEmitter();

emitter.on(SAVE, () => {
  console.log("On save Activated 1");
});

emitter.on(SAVE, () => {
  console.log("On save Activated 2");
});

emitter.emit(SAVE);
