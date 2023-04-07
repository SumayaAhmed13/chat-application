//library exports
const express=require("express");
const router=express.Router();

//external exports
const {getUsers}=require("../controller/usersController");
const decorateHtmlResponse=require("../middleware/common/decorateHtmlResponse");

//login page

router.get("/",decorateHtmlResponse("Users"), getUsers);


module.exports=router;