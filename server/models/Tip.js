const mongoose =require('mongoose')

const Schema =new mongoose.Schema({
    name:{type:String},
    money:{type:Number},
    predecessor:{type:Number},
    isAlways:{type:String},
    result:{type:Number},
    remark:{type:String},
})

module.exports = mongoose.model('Tip',Schema)