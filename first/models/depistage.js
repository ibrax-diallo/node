const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depistageSchema= new Schema({
    faisabiliteCSRef: {type: Boolean, required: true},
    depistageDate: {type: Date, required: true},
    informationCont: {type: Boolean, required: true},
    avisContOk: {type: Boolean, required: true},
    avisContNonOk: {type: String, required: true},
    createDate: { type: Date, default: Date.now },
    suivi: {
        type: Schema.Types.ObjectId,
        ref: 'suivi'
    }
})
module.exports = mongoose.model('Depistage', depistageSchema);