const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const casConatctSchema = new Schema({
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
    userId: {type: String, require: true},
    possesionTher: {type: Boolean, require: true},
    possibiliteTher: {type: Boolean},
    location: {type: Boolean, require: true},
    nbPersFam: {type: Number, require: true},
    nbChambreFam: {type: Number, require: true},
    chambreIsoFam: {type: Boolean, require: true},
    contraintIsoFam: {type: String, require: true},
    positive:{
        type: Schema.Types.ObjectId,
        ref: 'positive'
    }
    
})

module.exports = mongoose.model('CasCantact', casConatctSchema);