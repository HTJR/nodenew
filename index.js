const express = require('express')
const postHandler = require ('./routes/post')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Hrasht1:Aman1234@subject0-imirp.gcp.mongodb.net/test?retryWrites=true&w=majority',()=>console.log('connected'))
app.get('/',(req,res)=>{
    res.send('hello from server')           
})

app.use('/post',postHandler)
app.listen(3000,()=> console.log("server is running at 3000"))
