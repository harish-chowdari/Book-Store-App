const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://harish:LDPasAv1fBvS38al@cluster0.qgm68yy.mongodb.net/?retryWrites=true&w=majority")

const con = mongoose.connection;

con.on("error", (error) => {
    console.log("MongoDB connection error:", error);
});
  
con.once("open", () => {
    console.log("db is connected...");
});


const routerOpe = require("./routes/book-routes")
app.use("/bookstore",routerOpe)


app.listen(6007,()=>{
    console.log("server is running...")
})