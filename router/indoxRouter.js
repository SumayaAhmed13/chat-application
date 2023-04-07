//library exports
const express=require("express");
const router=express.Router();

//external exports
const {getInbox}=require("../controller/inboxController");
const decorateHtmlResponse=require("../middleware/common/decorateHtmlResponse");

//login page

router.get("/",decorateHtmlResponse("Inbox"),getInbox);


module.exports=router;