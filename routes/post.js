const express = require('express')
const postmodel = require('../models/postmodel')
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('<h1>post</h1>')
})
router.post('/',(req,res) => {
    const post= new postmodel({
        title:req.body.title,
        content:req.body.content
    })
    post.save().then(data =>res.send(data))
})
module.exports=router