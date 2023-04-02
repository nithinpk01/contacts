// @desc getAllContacts
// @route GET api/contacts/:id
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: `get all contacts` })
};

// @desc getContactById
// @route GET api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `get contacts for ${req.params.id}` })
};

// @desc createContacts
// @route POST api/contacts
//@access public
const createContact = (req, res) => {
    console.log(req.body)
    res.status(201).json({ message: 'post contacts' })
};

// @desc getAllContacts
// @route PUT api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for${req.params.id}` })
};

// @desc deleteContacts
// @route DELETE api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` })
};

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
