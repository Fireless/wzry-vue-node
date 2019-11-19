const mongoose =require('mongoose')

const Schema =new mongoose.Schema({
    name:{type:String},
    avatar:{type:String},

})

module.exports = mongoose.model('Hero',Schema)