require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const allwebroutes = require("./routes/web")

app.use("",allwebroutes)


app.listen(PORT,()=>{
    console.log(`Server is listning on ${PORT}`)
})