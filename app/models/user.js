let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('user',  UserSchema);