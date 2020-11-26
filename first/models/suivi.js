const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suiviSchema = new Schema({
  periode: {type: String, required: true},
  prendreTempm: {type: Boolean, required: true},
  temp: {type: Number, required: true},
  tousser: {type: Boolean, required: true},
  enrhumer: {type: Boolean, required: true},
  gorge: {type: Boolean, required: true},
  autreSymptome: {type: Boolean, required: true},
  autres:{type: String},
  createDate: { type: Date, default: Date.now },
  casContact:{
    type: Schema.Types.ObjectId,
    ref: 'casContact'
   }
  
})


module.exports = mongoose.model('Suivi', suiviSchema);