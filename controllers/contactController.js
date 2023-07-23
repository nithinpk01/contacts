const asyncHandler = require("express-async-handler");
const Contacts = require("../model/contact");
// @desc getAllContacts
// @route GET api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json({ data: contacts, message: `get all contacts` })
});

// @desc getContactById
// @route GET api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contacts.findById(req.params.id);
    if (!contacts) {
        res.status(404);
        throw new Error("Contacts not found")
    }
    res.status(200).json({ data: contacts, status: "success" })
});

// @desc createContacts
// @route POST api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const { name, mobile, email } = req.body;
    if (!name || !mobile || !email) {
        res.status(400);
        throw new Error("all are mandatry")
    }
    const contacts = await Contacts.create({
        name: name,
        mobile: mobile,
        email: email
    });
    res.status(201).json({ data: contacts, status: 'success' })
});

// @desc getAllContacts
// @route PUT api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    try {

        const { name, mobile, email } = req.body;
        const contact = await Contacts.findOne({ _id: req.params.id });
        if (!contact) {
            res.status(404);
            throw new Error("Contacts not found")
        }
        contact.name = name,
            contact.mobile = mobile,
            contact.email = email
        await contact.save();
    } catch (e) {
        console.log(e)
    }
    res.status(200).json({ status: 'success' })
});

// @desc deleteContacts
// @route DELETE api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contacts.findById(req.params.id);
        if (!contacts) {
            res.status(404);
            throw new Error("Contacts not found")
        }
        const deleteContact = await Contacts.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error)
    }
    res.status(200).json({ deleteContact })
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
