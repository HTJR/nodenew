const mongoose = require('mongoose')
const postname = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:String
})
module.exports=mongoose.model("hrash",postname)
