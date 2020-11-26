const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const positiveSchema = mongoose.Schema({
    prenom: {type: String, require: true},
    nom: {type: String, require: true},
    sexe: {type: String, require: true},
    age: {type: Number, require: true},
    tel: {type: String, require: true},
    residence: {type: String, require: true},
    matromoniale: {type: String, require: true},
    nbEnfant: {type: Number, require: true},
    voyageExt: {type: String},
    voyageInt: {type: String},
    createDate: { type: Date, default: Date.now },
    userId: {type: String, require: true}
});

module.exports = mongoose.model('Positive', positiveSchema);