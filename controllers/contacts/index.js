const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const { getAll } = require("./getAll");
const { getContactById } = require("./getContactById");
const { addContact } = require("./addContact");
const { updateContactById } = require("./updateContactById");
const { removeContact } = require("./removeContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  removeContact: ctrlWrapper(removeContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
