// Imports Mongoose stores in variable mongoose
const mongoose = require("mongoose");

// Creates a Schema named contactSchema
const contactSchema = mongoose.Schema({

    name:{
        type: String,
        // Creates flag that name is required and error thrown with if else
        required: [true, "Please add contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add contact email address"],
    },
    phone: {
        type: String,
        required: [true, "Please add contact phone number"],
    },
},
{
    timestamps: true,
});
module.exports = mongoose.model("Contact",contactSchema);