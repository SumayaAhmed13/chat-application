//library exports
const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const path=require("path");
const cookieParser = require("cookie-parser");

//internal export
const{notFoundHandler, errorHanlder}=require("./middleware/common/errorhandler");
const loginRouter=require("./router/loginRouter");
const usersRouter=require("./router/usersRouter");
const indoxRouter=require("./router/indoxRouter");

const app=express();
dotenv.config();

//Database Connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("Database connection successfully"))
    .catch(error=>console.log(error));

//request parser
app.use(express.json());    
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//set static folder
app.use(express.static(path.join(__dirname,"public")));

// cookies-parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/",loginRouter);
app.use("/users",usersRouter);
app.use("/indox",indoxRouter);


//error handling

//404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHanlder);

//port listening

 app.listen(process.env.PORT,()=>{
    console.log(`App Listening form ${process.env.PORT}`)
 })