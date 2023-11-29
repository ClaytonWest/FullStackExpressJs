const asyncHandler = require("express-async-handler");



// @desc Register a user
// @route Post /api/users/register
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    res.json({message: "register the user"});
});


// @desc login a user
// @route Post /api/users/login
// @access public
const loginUser = asyncHandler(async(req, res)=>{
    res.json({message: "login user"});
});


// @desc current info of a user
// @route Post /api/users/current
// @access private
const currentUser = asyncHandler(async(req, res)=>{
    res.json({message: "current user info"});
});

module.exports = {registerUser,loginUser,currentUser};