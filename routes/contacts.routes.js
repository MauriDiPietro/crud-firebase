const express = require("express");
const { getAllContacts, createContact, deleteContact, getContactById, updateContact } = require ('../controllers/contacts.controllers.js');
const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router
