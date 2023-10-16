const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");
const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  // ...twój kod
};

const removeContact = async (id) => {
  // ...twój kod
};

const addContact = async (name, email, phone) => {
  // ...twój kod
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
