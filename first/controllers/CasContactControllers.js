const CasContact = require('../models/casContact');


exports.createCasContact= (req, res, next) => {
    const casConatact = new CasContact({
    prenom: req.body.prenom,
    nom:  req.body.nom ,
    sexe: req.body.sexe,
    age:  req.body.age,
    tel: req.body.tel,
    residence: req.body.residence,
    matromoniale: req.body.matromoniale,
    nbEnfant: req.body.nbEnfant ,
    voyageExt:  req.body.voyageExt,
    voyageInt: req.body.voyageInt,
    possesionTher: req.body.possesionTher ,
    possibiliteTher: req.body.possibiliteTher ,
    location: req.body.location,
    nbPersFam: req.body.nbPersFam ,
    nbChambreFam: req.body.nbChambreFam,
    chambreIsoFam: req.body.chambreIsoFam ,
    contraintIsoFam: req.body.contraintIsoFam,
    positive: req.body.positive
    })

    casConatact.save()
    .then(() => res.status(201).json(casConatact))
    .catch(error => res.status(400).json({error}));
}

exports.getAllCasContact = (req, res, next) => {
    CasContact.find().sort({'createDate': -1})
    .then(cas => res.status(200).json(cas))
    .catch(error => res.status(400).json({error}))
}
exports.getOneCasContact = (req, res, next) => {
    CasContact.findOne({_id: req.params.id})
    .then(cas => res.status(200).json(cas))
    .catch(error => res.status(400).json({error}));
}
exports.modifyCasContact = (req, res, next) => {
    CasContact.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(cas => res.status(200).json(cas))
    .catch(error => res.status(400).json({error}));
}
exports.deleteCasContact  = (req, res, next) => {
    CasContact.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet supprimé avec succès'}))
    .catch(error => res.status(400).json({error}));
}

exports.getPositiveCasContact = (req, res, next) => {
    CasContact.find({positive: req.params.positive}).sort({'createDate': -1})
    .then(cas => res.status(200).json(cas))
    .catch(error => res.status(400).json({error}))
}
