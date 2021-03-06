  
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true, minlength: 8},
  leidos: {type: [String]},
  leyendo: {type: [String]},
  porLeer: {type: [String]},
})

const User = mongoose.model('User', userSchema)

module.exports = User