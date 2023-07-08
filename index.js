const argv = require("yargs").argv;

const contactsOperations = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsOperations.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contactsOperations.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1" });
// invokeAction({
//   action: "add",
//   name: "Alex Ferguson",
//   email: "AlexFerguson@mail.net",
//   phone: "(097) 111-99222",
// });
// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
invokeAction(argv);
