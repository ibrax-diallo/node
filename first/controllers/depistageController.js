const Depistage = require('../models/depistage');


exports.createDepistage = (req, res, next) => {
    const depistage = new Depistage({
    faisabiliteCSRef: req.body.faisabiliteCSRef ,
    depistageDate: req.body.depistageDate,
    informationCont: req.body.informationCont,
    avisContOk: req.body.avisContOk,
    avisContNonOk: req.body.avisContNonOk,
    suivi: req.body.suivi
    })

    depistage.save()
    .then(() => res.status(201).json(depistage))
    .catch(error => res.status(500).json({error}));
}

exports.getAllDepistage = (req, res, next) => {
    Depistage.find().sort({'createDate': -1}).sort({'createDate': -1})
    .then(depistage => res.status(200).json(depistage))
    .catch(error => res.status(500).json({error}));
}
exports.getOneDepistage = (req, res, next) => {
    Depistage.findOne({_id: req.params.id})
    .then(depistage => res.status(200).json(depistage))
    .catch(error => res.status(500).json({eror}));
}
exports.modifyDepistage = (req, res, next) => {
    Depistage.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(depistage => res.status(200).json(depistage))
    .catch(error => res.status(500).json({error}))
}

exports.suiviDepistage =(req, res, next) => {
   Depistage.find({suivi: req.params.suivi}).sort({'createDate': -1})
   .then(depistage => res.status(200).json(depistage))
   .catch(error => res.status(500).json({error}))
}
exports.deleteDepistage = (req, res, next) => {
    Depistage.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet supprimé'}))
    .catch(error => res.status(500).json({error}))
}