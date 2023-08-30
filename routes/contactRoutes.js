const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/authentication");
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController")

router.get('/', getContacts);
router.get('/:id', getContact);
router.post('/', validateToken, createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;