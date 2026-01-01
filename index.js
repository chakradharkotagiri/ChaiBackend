require('dotenv').config()
const express = require("express")

const PORT = process.env.PORT
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/twitter',(req,res)=>{
    res.send("Hello Chakradhar!")
})

app.get('/name' , (req,res)=> {
    res.send("Chakradhar")
})

app.get('/youtube', (req,res)=>{
    res.send("<h1>Chai aur Code </h1>")
})

app.listen( PORT, ()=>{
    console.log(`example app listening on port ${PORT}`)
})