module.exports = app =>{
    const mongoose = require('mongoose')
    mongoose.connect("mongodb://127.0.0.1:27017/wzry-vue-node",{
        useNewUrlParser:true
    })

}