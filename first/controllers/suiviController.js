const Suivi = require('../models/suivi');

exports.createSuivi = (req, res, next) => {
    const suivi = new Suivi({
        periode: req.body.periode,
        prendreTempm: req.body.prendreTempm,
        temp: req.body.temp,
        tousser: req.body.tousser,
        enrhumer: req.body.enrhumer,
        gorge: req.body.gorge,
        autreSymptome: req.body.autreSymptome,
        autres: req.body.autres,
        casContact: req.body.casContact
    })
    suivi.save()
    .then(() => res.status(201).json(suivi))
    .catch(error => res.status(500).json({error}));
}
exports.getAllSuivi = (req, res, next) => {
    Suivi.find().sort({'createDate': -1})
    .then(suivi => res.status(200).json({suivi}))
    .catch(error => res.status(500).json({error}));
}
exports.getOneSuivi = (req, res, next) => {
    Suivi.findOne({_id: req.params.id})
    .then(suivi => res.status(200).json(suivi))
    .catch(error => res.status(500).json({error}));
}
exports.modifySuivi = (req, res, next) => {
    Suivi.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(suivi => res.status(200).json(suivi))
    .catch(error => res.status(500).json({error}))
}

exports.deleteOneSuivi = (req, res, next) => {
    Suivi.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet supprimé!'}))
    .catch(error => res.status(500).json({error}))
}
exports.getContactSuivi = (req, res, next) => {
    Suivi.find({casContact: req.params.casContact}).sort({'createDate': -1})
    .then(suivi => res.status(200).json(suivi))
    .catch(error => res.status(500).json({error}));
}
