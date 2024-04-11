require("dotenv").config()
const express = require("express");
const expressLayouts  = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 8888;
const allWebRoutes = require("./routes/web")

// app.set("view engine","ejs")
app.use(express.static("public"))
app.use(expressLayouts);
app.set('view engine', 'ejs') // required to set  ejs , pug different types of template engine

app.use("",allWebRoutes)


app.listen(PORT,()=>{
    console.log(`Server is listning on ${PORT}`)
})