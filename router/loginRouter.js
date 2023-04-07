//library exports
const express=require("express");
const router=express.Router();

//external exports
const {getLogin}=require("../controller/loginController");
const decorateHtmlResponse=require("../middleware/common/decorateHtmlResponse");

//login page

router.get("/",decorateHtmlResponse("Login"),getLogin);


module.exports=router;