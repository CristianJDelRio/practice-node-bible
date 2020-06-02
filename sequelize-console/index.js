const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

if (params.length <= 2) process.exit(0);

const args = params.slice(2);

let [command, entity] = args[0].split(":");
command = command.substring(2);

switch (command) {
  case CRUD.CREATE:
    const newElement = {};

    args.slice(1).forEach(arg => {
      const [fieldName, fieldValue] = arg.substring(2).split("=");
      newElement[fieldName] = fieldValue;
    });

    db[entity]
      .create(newElement)
      .then(() => console.log("Contact Created"))
      .catch(console.log);

    break;

  case CRUD.READ:
    db[entity]
      .findAll()
      .then(contacts =>
        contacts.forEach(({ dataValues }) => console.log(dataValues))
      )
      .catch(console.log);

    break;

  case CRUD.DELETE:
    const elementToRemove = {};

    args.slice(1).forEach(arg => {
      const [fieldName, fieldValue] = arg.substring(2).split("=");
      elementToRemove[fieldName] = fieldValue;
    });

    db[entity]
      .destroy({ where: elementToRemove })
      .then(() => console.log("Element Removed!"))
      .catch(console.log);
    break;

  case CRUD.UPDATE:
    let elementToUpdate = {},
      newData = {},
      isUpdateArgument = false;

    args.slice(1).forEach(arg => {
      if (arg === "--newfields") return (isUpdateArgument = true);
      const [fieldName, fieldValue] = arg.substring(2).split("=");

      if (isUpdateArgument) newData[fieldName] = fieldValue;
      else elementToUpdate[fieldName] = fieldValue;
    });

    db[entity]
      .findOne({ where: elementToUpdate })
      .then(existingField => {
        for (const key in newData) existingField[key] = newData[key];
        return existingField.save();
      })
      .then(element => console.log("Element Updated!"))
      .catch(console.log);

    break;

  default:
    console.log("Operation Not Found!");
}
