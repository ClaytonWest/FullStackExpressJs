const asyncHandler = require("express-async-handler");



// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
});

// @desc create new contact
// @route POST /api/contacts
// @access public
// status 201 resource creating
const createContact = asyncHandler(async (req,res)=>{
    console.log("The req body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    res.status(201).json({message: "Create Contact"});
});

// @desc Get contact
// @route Get /api/contacts/:id
// @access public
// status 201 resource creating
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Get contact ${req.params.id}`});
});

// @desc  Update contact
// @route Put /api/contacts/:id
// @access public
// status 201 resource creating
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Update contact ${req.params.id}`});
});

// @desc Delete  contact
// @route DELETE /api/contacts/:id
// @access public
// status 201 resource creating
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

module.exports = { 
    getContact,
    createContact,
    getContacts,
    deleteContact,
    updateContact 
};