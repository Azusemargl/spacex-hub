const { Schema, model } = require('mongoose');

const schema = Schema({
   login:    {type: String, required: true, unique: true},
   email:    {type: String, required: true, unique: true},
   password: {type: String, required: true}
});

module.exports = model('User', schema);
