 const express = require('express')
 const app = express()
 const PORT = 3000

 app.get('/',(req,res) => {
    res.send('HII')
 })

 app.post('/item', (req,res)=>{
    console.log("Hii from post")
 })

 app.put('/item/:id' , (req, res)=>{
    console.log("Hii from PUT")
 })

 app.listen(PORT, ()=>{
    console.log(`Server started .. at ${PORT}`)
 })


 // npm init -y
 // node index.js
 // 'dev' : 'nodemon index.js'