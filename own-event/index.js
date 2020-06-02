const Emitter = require("./emitter");
const emitter = new Emitter();

emitter.on("save", () => {
  console.log("On save Activated 1");
});

emitter.on("save", () => {
  console.log("On save Activated 2");
});

emitter.emit("save");

/* 
  Los eventos en node realmente son objetos con 
  propiedades predefinidas como en el caso del archivo emiter
  Donde tenemos un objeto con la propiedad events
*/
