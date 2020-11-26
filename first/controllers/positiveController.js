const Positive = require('../models/positive');
const { check, validationResult } = require('express-validator');

exports.createPositive = (req, res, next) => {
    const positive = new Positive({
          prenom: req.body.prenom,
          nom: req.body.nom,
          age: req.body.age,
          tel: req.body.tel,
          residence: req.body.residence,
          matromoniale: req.body.matromoniale,
          nbEnfant: req.body.nbEnfant,
          voyageExt: req.body.voyageExt,
          voyageInt: req.body.voyageInt,
          userId: req.body.userId
    });
    positive.save()
    .then(() =>res.status(201).json({
          _id: positive._id,
          prenom: positive.prenom,
          nom: positive.nom,
          age: positive.age,
          tel: positive.tel,
          residence: req.body.residence,
          matromoniale: positive.matromoniale,
          nbEnfant: positive.nbEnfant,
          voyageExt: positive.voyageExt,
          voyageInt: positive.voyageInt,
          userId: positive.userId,
          createDate: positive.createDate
    }))
    .catch(error => res.status(400).json({error}));
};

exports.getAllPositive = (req, res, next) => {
    Positive.find().sort({'createDate': -1})
    .then(positives => res.status(200).json(positives))
    .catch(error => res.status(400).json({error}));
  };
  
exports.getOnePositive = (req, res, next) => {
    Positive.findOne({_id: req.params.id})
    .then(positive => res.status(200).json(positive))
    .catch(error => res.status(404).json({error}));
  };
  
exports.modifyPositive = (req, res, next) =>{
    Positive.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(positive => res.status(200).json(positive))
    .catch(error => res.status(404).json({error}));
  };

exports.deletePositive = (req, res, next) => {
        Positive.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
    
  };
