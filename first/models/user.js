const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {type: String, require: true,lowercase: true, unique: true},
    password: {type: String, require: true},
    role: {
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user',
      },
    imageUrl: {type: String },
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    tel: {type: String},
    createDate: { type: Date, default: Date.now },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);